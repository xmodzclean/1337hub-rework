import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSession } from 'next-auth/react';
import { FaBullhorn, FaTimes } from 'react-icons/fa';

interface Announcement {
  id: string;
  title: string;
  message: string;
  created_by: string;
  created_at: string;
  is_global: boolean;
  target_login?: string;
  is_active: boolean;
  is_anonymous: boolean;
  dismissed_by: string[];
  viewed_by: string[];
  view_count: number;
}

interface AnnouncementCenterProps {
  className?: string;
}

const AnnouncementContainer = styled.div`
  position: relative;
`;

const AnnouncementButton = styled.button<{ $hasUnread: boolean }>`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .bullhorn-icon {
    color: ${props => props.$hasUnread ? 'var(--main_color)' : 'rgba(255, 255, 255, 0.7)'};
    font-size: 20px;
  }
`;

const AnnouncementBadge = styled.span<{ $count: number }>`
  position: absolute;
  top: 2px;
  right: 2px;
  background: #ff4757;
  color: white;
  border-radius: 50%;
  font-size: 10px;
  font-weight: bold;
  min-width: 16px;
  height: 16px;
  display: ${props => props.$count > 0 ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  padding: 2px;
  animation: ${props => props.$count > 0 ? 'pulse 2s infinite' : 'none'};
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`;

const AnnouncementDropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  width: 350px;
  max-height: 400px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d30 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.$isOpen ? 'translateY(8px)' : 'translateY(0)'};
  transition: all 0.3s ease;
  overflow: hidden;
`;

const AnnouncementHeader = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: white;
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }

  button {
    background: transparent;
    border: none;
    color: var(--main_color);
    cursor: pointer;
    font-size: 0.9rem;
    padding: 4px 8px;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(183, 251, 43, 0.1);
    }
  }
`;

const AnnouncementList = styled.div`
  max-height: 300px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--main_color);
    border-radius: 3px;
  }
`;

const AnnouncementItem = styled.div<{ $isDismissed: boolean }>`
  padding: 12px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  background: ${props => props.$isDismissed ? 'transparent' : 'rgba(183, 251, 43, 0.05)'};

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${props => props.$isDismissed ? 'transparent' : 'var(--main_color)'};
  }
`;

const AnnouncementContent = styled.div`
  .title {
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 4px;
  }

  .message {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
    margin-bottom: 6px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.75rem;
  }
`;

const DismissButton = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  padding: 2px;
  border-radius: 2px;
  transition: all 0.3s ease;

  &:hover {
    color: #ff4757;
    background: rgba(255, 71, 87, 0.1);
  }
`;

const EmptyState = styled.div`
  padding: 40px 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
`;

const AnnouncementCenter: React.FC<AnnouncementCenterProps> = ({ className }) => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchAnnouncements = async () => {
    if (!session) return;

    setLoading(true);
    try {
      const res = await fetch('/api/user/announcements');
      if (res.ok) {
        const data = await res.json();
        setAnnouncements(data);
        
        // Count undismissed announcements
        const userLogin = (session.user as any)?.login || '';
        const undismissed = data.filter((announcement: Announcement) => 
          !announcement.dismissed_by.includes(userLogin)
        );
        setUnreadCount(undismissed.length);
      }
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
    setLoading(false);
  };

  const dismissAnnouncement = async (announcementId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    
    try {
      const res = await fetch('/api/user/dismiss-announcement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ announcementId }),
      });

      if (res.ok) {
        // Update local state
        setAnnouncements(prev => 
          prev.map(announcement => 
            announcement.id === announcementId 
              ? { ...announcement, dismissed_by: [...announcement.dismissed_by, (session?.user as any)?.login || ''] }
              : announcement
          )
        );
        setUnreadCount(prev => Math.max(0, prev - 1));
      }
    } catch (error) {
      console.error('Error dismissing announcement:', error);
    }
  };

  const markAsViewed = async (announcementId: string) => {
    try {
      await fetch('/api/user/track-view', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ announcementId }),
      });
    } catch (error) {
      console.error('Error tracking view:', error);
    }
  };

  const handleAnnouncementClick = (announcement: Announcement) => {
    const userLogin = (session?.user as any)?.login || '';
    
    // Mark as viewed if not already viewed
    if (!announcement.viewed_by.includes(userLogin)) {
      markAsViewed(announcement.id);
      // Update local state
      setAnnouncements(prev => 
        prev.map(a => 
          a.id === announcement.id 
            ? { ...a, viewed_by: [...a.viewed_by, userLogin] }
            : a
        )
      );
    }
  };

  const formatTimeAgo = (isoDate: string): string => {
    const now = new Date();
    const then = new Date(isoDate);
    const diffMs = now.getTime() - then.getTime();

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  };

  useEffect(() => {
    fetchAnnouncements();
    
    // Fetch announcements every 30 seconds
    const interval = setInterval(fetchAnnouncements, 30000);
    return () => clearInterval(interval);
  }, [session]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-announcement-center]')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  if (!session) return null;

  const userLogin = (session.user as any)?.login || '';

  return (
    <AnnouncementContainer className={className} data-announcement-center>
      <AnnouncementButton
        $hasUnread={unreadCount > 0}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBullhorn className="bullhorn-icon" />
        <AnnouncementBadge $count={unreadCount}>
          {unreadCount > 99 ? '99+' : unreadCount}
        </AnnouncementBadge>
      </AnnouncementButton>

      <AnnouncementDropdown $isOpen={isOpen}>
        <AnnouncementHeader>
          <h3>📢 Announcements</h3>
          {announcements.length > 0 && (
            <button onClick={fetchAnnouncements} disabled={loading}>
              {loading ? 'Loading...' : 'Refresh'}
            </button>
          )}
        </AnnouncementHeader>

        <AnnouncementList>
          {announcements.length === 0 ? (
            <EmptyState>
              📢 No announcements
            </EmptyState>
          ) : (
            announcements.map((announcement) => {
              const isDismissed = announcement.dismissed_by.includes(userLogin);
              
              return (
                <AnnouncementItem
                  key={announcement.id}
                  $isDismissed={isDismissed}
                  onClick={() => handleAnnouncementClick(announcement)}
                >
                  <AnnouncementContent>
                    <div className="title">{announcement.title}</div>
                    <div className="message">{announcement.message}</div>
                    <div className="footer">
                      <span>
                        By: {announcement.is_anonymous ? 'Anonymous' : announcement.created_by} • {formatTimeAgo(announcement.created_at)}
                      </span>
                      {!isDismissed && (
                        <DismissButton
                          onClick={(e) => dismissAnnouncement(announcement.id, e)}
                          title="Dismiss"
                        >
                          <FaTimes size={12} />
                        </DismissButton>
                      )}
                    </div>
                  </AnnouncementContent>
                </AnnouncementItem>
              );
            })
          )}
        </AnnouncementList>
      </AnnouncementDropdown>
    </AnnouncementContainer>
  );
};

export default AnnouncementCenter;
