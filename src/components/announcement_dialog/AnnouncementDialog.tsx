import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTimes, FaBullhorn } from 'react-icons/fa';
import { useSession } from 'next-auth/react';

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

interface AnnouncementDialogProps {
  announcement: Announcement;
  isOpen: boolean;
  onClose: () => void;
  onDismiss: (id: string) => void;
}

const AnnouncementDialog: React.FC<AnnouncementDialogProps> = ({
  announcement,
  isOpen,
  onClose,
  onDismiss
}) => {
  const { data: session } = useSession();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Track view when dialog opens
      trackView();
    }
  }, [isOpen]);

  const trackView = async () => {
    try {
      await fetch('/api/user/track-view', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ announcementId: announcement.id }),
      });
    } catch (error) {
      console.error('Error tracking view:', error);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for animation to complete
  };

  const handleDismiss = () => {
    onDismiss(announcement.id);
    handleClose();
  };

  const userLogin = (session?.user as any)?.login || '';
  const isDismissed = announcement.dismissed_by.includes(userLogin);

  // Format time ago function
  const formatTimeAgo = (dateString: string): string => {
    const now = new Date();
    const then = new Date(dateString);
    const diffMs = now.getTime() - then.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSeconds < 60) return `${diffSeconds}s ago`;
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  if (!isOpen) return null;

  return (
    <DialogOverlay className={isVisible ? 'visible' : ''}>
      <DialogContainer className={isVisible ? 'visible' : ''}>
        <DialogHeader>
          <div className="header-icon">
            <FaBullhorn size={20} />
          </div>
          <h2>Announcement</h2>
          <CloseButton onClick={handleClose}>
            <FaTimes size={16} />
          </CloseButton>
        </DialogHeader>
        
        <DialogContent>
          <div className="announcement-title">
            <h3>{announcement.title}</h3>
          </div>
          
          <div className="announcement-message">
            <p>{announcement.message}</p>
          </div>
          
          <div className="announcement-footer">
            <span className="author">
              by: {announcement.is_anonymous ? 'Anonymous' : announcement.created_by}
            </span>
            <span className="time">
              {formatTimeAgo(announcement.created_at)}
            </span>
          </div>
        </DialogContent>
        
        <DialogActions>
          {!isDismissed && (
            <button className="mark-read-btn" onClick={handleDismiss}>
              Mark as Read
            </button>
          )}
          <button className="close-btn" onClick={handleClose}>
            Close
          </button>
        </DialogActions>
      </DialogContainer>
    </DialogOverlay>
  );
};

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.visible {
    opacity: 1;
  }
`;

const DialogContainer = styled.div`
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  max-height: 70vh;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transform: scale(0.9) translateY(20px);
  transition: all 0.3s ease-out;

  &.visible {
    transform: scale(1) translateY(0);
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 20px;
    max-height: 80vh;
  }
`;

const DialogHeader = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .header-icon {
    color: var(--main_color);
  }

  h2 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
    flex: 1;
    color: white;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
`;

const DialogContent = styled.div`
  padding: 20px;
  color: white;

  .announcement-title {
    margin-bottom: 16px;

    h3 {
      color: var(--main_color);
      font-size: 1.4rem;
      margin: 0;
      font-weight: 500;
    }
  }

  .announcement-message {
    margin-bottom: 20px;

    p {
      font-size: 1rem;
      line-height: 1.5;
      color: rgba(255, 255, 255, 0.9);
      margin: 0;
      white-space: pre-wrap;
    }
  }

  .announcement-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;

    .author {
      color: rgba(255, 255, 255, 0.7);
    }

    .time {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const DialogActions = styled.div`
  padding: 16px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  background: rgba(255, 255, 255, 0.02);

  button {
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;

    &.close-btn {
      background: rgba(255, 255, 255, 0.1);
      color: white;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }

    &.mark-read-btn {
      background: var(--main_color);
      color: #000;

      &:hover {
        background: rgba(183, 251, 43, 0.8);
        transform: translateY(-1px);
      }
    }
  }
`;

export default AnnouncementDialog;
