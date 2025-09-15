import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import styled from 'styled-components';
import { FaUserSlash, FaBullhorn, FaUserCheck, FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface BannedUser {
  id: string;
  login: string;
  reason: string;
  banned_by: string;
  banned_at: string;
  is_active: boolean;
}

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

const AdminPanel = () => {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState('analytics');
  const [banForm, setBanForm] = useState({
    login: '',
    reason: ''
  });
  const [announcementForm, setAnnouncementForm] = useState({
    title: '',
    message: '',
    isGlobal: true,
    targetLogin: '',
    isAnonymous: false
  });
  const [bannedUsers, setBannedUsers] = useState<BannedUser[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(false);

  // Check if user is admin
  const isAdmin = (session?.user as any)?.login === 'azaki' || (session?.user as any)?.login === 'amezioun';

  // Debug logging
  console.log('AdminPanel - Session:', session);
  console.log('AdminPanel - User login:', (session?.user as any)?.login);
  console.log('AdminPanel - Is admin:', isAdmin);

  // Early return if not admin
  if (!isAdmin) {
    return (
      <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
        <h2>Access Denied</h2>
        <p>You don't have permission to access the admin panel.</p>
      </div>
    );
  }

  useEffect(() => {
    if (isAdmin) {
      fetchBannedUsers();
      fetchAnnouncements();
    }
  }, [isAdmin]);

  const fetchBannedUsers = async () => {
    try {
      const response = await fetch('/api/admin/banned-users');
      if (response.ok) {
        const data = await response.json();
        setBannedUsers(data);
      }
    } catch (error) {
      console.error('Error fetching banned users:', error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch('/api/admin/announcements');
      if (response.ok) {
        const data = await response.json();
        setAnnouncements(data);
      }
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  const handleBanUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!banForm.login || !banForm.reason) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/admin/ban-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(banForm),
      });

      if (response.ok) {
        toast.success('User banned successfully');
        setBanForm({ login: '', reason: '' });
        fetchBannedUsers();
      } else {
        const error = await response.json();
        toast.error(error.message || 'Failed to ban user');
      }
    } catch (error) {
      toast.error('Error banning user');
    }
    setLoading(false);
  };

  const handleUnbanUser = async (login: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/unban-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login }),
      });

      if (response.ok) {
        toast.success('User unbanned successfully');
        fetchBannedUsers();
      } else {
        const error = await response.json();
        toast.error(error.message || 'Failed to unban user');
      }
    } catch (error) {
      toast.error('Error unbanning user');
    }
    setLoading(false);
  };

  const handleCreateAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!announcementForm.title || !announcementForm.message) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!announcementForm.isGlobal && !announcementForm.targetLogin) {
      toast.error('Please specify target user for non-global announcement');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/admin/create-announcement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(announcementForm),
      });

      if (response.ok) {
        toast.success('Announcement created successfully');
        setAnnouncementForm({
          title: '',
          message: '',
          isGlobal: true,
          targetLogin: '',
          isAnonymous: false
        });
        fetchAnnouncements();
      } else {
        const error = await response.json();
        toast.error(error.message || 'Failed to create announcement');
      }
    } catch (error) {
      toast.error('Error creating announcement');
    }
    setLoading(false);
  };

  const handleDeleteAnnouncement = async (announcementId: string) => {
    if (!confirm('Are you sure you want to delete this announcement?')) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/admin/delete-announcement', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ announcementId }),
      });

      if (response.ok) {
        toast.success('Announcement deleted successfully');
        fetchAnnouncements();
      } else {
        const error = await response.json();
        toast.error(error.message || 'Failed to delete announcement');
      }
    } catch (error) {
      toast.error('Error deleting announcement');
    }
    setLoading(false);
  };

  const handleDeleteAllAnnouncements = async () => {
    if (!confirm('Are you sure you want to delete ALL announcements? This action cannot be undone.')) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/admin/delete-all-announcements', {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('All announcements deleted successfully');
        fetchAnnouncements();
      } else {
        const error = await response.json();
        toast.error(error.message || 'Failed to delete all announcements');
      }
    } catch (error) {
      toast.error('Error deleting all announcements');
    }
    setLoading(false);
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <StyledAdminPanel>
      <div className="admin-header">
        <h2>Admin Panel</h2>
        <div className="admin-tabs">
          <button
            className={activeTab === 'analytics' ? 'active' : ''}
            onClick={() => setActiveTab('analytics')}
          >
            <FaEye /> Analytics
          </button>
          <button
            className={activeTab === 'ban' ? 'active' : ''}
            onClick={() => setActiveTab('ban')}
          >
            <FaUserSlash /> Ban Users
          </button>
          <button
            className={activeTab === 'announcement' ? 'active' : ''}
            onClick={() => setActiveTab('announcement')}
          >
            <FaBullhorn /> Announcements
          </button>
        </div>
      </div>

      {activeTab === 'analytics' && (
        <div className="tab-content">
          <div className="analytics-section">
            <h3>📊 Platform Analytics</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">🚫</div>
                <div className="stat-info">
                  <h4>Banned Users</h4>
                  <span className="stat-number">{bannedUsers.length}</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📢</div>
                <div className="stat-info">
                  <h4>Total Announcements</h4>
                  <span className="stat-number">{announcements.length}</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👁️</div>
                <div className="stat-info">
                  <h4>Total Views</h4>
                  <span className="stat-number">
                    {announcements.reduce((acc, ann) => acc + (ann.view_count || 0), 0)}
                  </span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✅</div>
                <div className="stat-info">
                  <h4>Active Announcements</h4>
                  <span className="stat-number">
                    {announcements.filter(ann => ann.is_active).length}
                  </span>
                </div>
              </div>
            </div>

            <div className="top-announcements">
              <h4>📈 Top Performing Announcements</h4>
              <div className="top-announcements-list">
                {announcements
                  .sort((a, b) => (b.view_count || 0) - (a.view_count || 0))
                  .slice(0, 5)
                  .map((announcement) => (
                    <div key={announcement.id} className="top-announcement-item">
                      <div className="announcement-preview">
                        <strong>{announcement.title}</strong>
                        <p>{announcement.message.substring(0, 100)}...</p>
                      </div>
                      <div className="announcement-metrics">
                        <span className="metric">
                          👁️ {announcement.view_count || 0} views
                        </span>
                        <span className="metric">
                          ❌ {announcement.dismissed_by?.length || 0} dismissed
                        </span>
                        <span className="metric">
                          📊 {announcement.is_global ? 'Global' : 'Targeted'}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'ban' && (
        <div className="tab-content">
          <div className="ban-section">
            <h3>Ban User</h3>
            <form onSubmit={handleBanUser}>
              <div className="form-group">
                <label>User Login:</label>
                <input
                  type="text"
                  value={banForm.login}
                  onChange={(e) => setBanForm({ ...banForm, login: e.target.value })}
                  placeholder="Enter 42 login"
                  required
                />
              </div>
              <div className="form-group">
                <label>Reason:</label>
                <textarea
                  value={banForm.reason}
                  onChange={(e) => setBanForm({ ...banForm, reason: e.target.value })}
                  placeholder="Enter reason for ban"
                  required
                />
              </div>
              <button type="submit" disabled={loading}>
                <FaUserSlash /> Ban User
              </button>
            </form>
          </div>

          <div className="banned-users-section">
            <h3>Banned Users</h3>
            <div className="banned-users-list">
              {bannedUsers.length === 0 ? (
                <p>No banned users</p>
              ) : (
                bannedUsers.map((user) => (
                  <div key={user.id} className="banned-user-item">
                    <div className="user-info">
                      <strong>{user.login}</strong>
                      <p>{user.reason}</p>
                      <small>Banned by {user.banned_by} on {new Date(user.banned_at).toLocaleDateString()}</small>
                    </div>
                    <button
                      className="unban-btn"
                      onClick={() => handleUnbanUser(user.login)}
                      disabled={loading}
                    >
                      <FaUserCheck /> Unban
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'announcement' && (
        <div className="tab-content">
          <div className="announcement-section">
            <h3>Create Announcement</h3>
            <form onSubmit={handleCreateAnnouncement}>
              <div className="form-group">
                <label>Title:</label>
                <input
                  type="text"
                  value={announcementForm.title}
                  onChange={(e) => setAnnouncementForm({ ...announcementForm, title: e.target.value })}
                  placeholder="Enter announcement title"
                  required
                />
              </div>
              <div className="form-group">
                <label>Message:</label>
                <textarea
                  value={announcementForm.message}
                  onChange={(e) => setAnnouncementForm({ ...announcementForm, message: e.target.value })}
                  placeholder="Enter announcement message"
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={announcementForm.isGlobal}
                    onChange={(e) => setAnnouncementForm({ ...announcementForm, isGlobal: e.target.checked })}
                  />
                  Global Announcement
                </label>
              </div>
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={announcementForm.isAnonymous}
                    onChange={(e) => setAnnouncementForm({ ...announcementForm, isAnonymous: e.target.checked })}
                  />
                  Anonymous (Hide creator identity)
                </label>
              </div>
              {!announcementForm.isGlobal && (
                <div className="form-group">
                  <label>Target User Login:</label>
                  <input
                    type="text"
                    value={announcementForm.targetLogin}
                    onChange={(e) => setAnnouncementForm({ ...announcementForm, targetLogin: e.target.value })}
                    placeholder="Enter target user login"
                    required
                  />
                </div>
              )}
              <button type="submit" disabled={loading}>
                <FaBullhorn /> Create Announcement
              </button>
            </form>
          </div>

          <div className="announcements-section">
            <div className="section-header">
              <h3>Recent Announcements</h3>
              {announcements.length > 0 && (
                <button 
                  className="delete-all-btn"
                  onClick={handleDeleteAllAnnouncements}
                  disabled={loading}
                >
                  🗑️ Delete All
                </button>
              )}
            </div>
            <div className="announcements-list">
              {announcements.length === 0 ? (
                <p>No announcements</p>
              ) : (
                announcements.map((announcement) => (
                  <div key={announcement.id} className="announcement-item">
                    <div className="announcement-header">
                      <strong>{announcement.title}</strong>
                      <div className="announcement-actions">
                        <div className="announcement-stats">
                          <span className="stat-badge views">
                            <FaEye /> {announcement.view_count || 0} views
                          </span>
                          <span className="stat-badge dismissed">
                            {announcement.dismissed_by?.length || 0} dismissed
                          </span>
                        </div>
                        <button
                          className="delete-btn"
                          onClick={() => handleDeleteAnnouncement(announcement.id)}
                          disabled={loading}
                          title="Delete Announcement"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                    <div className="announcement-info">
                      <p>{announcement.message}</p>
                      <div className="announcement-meta">
                        <small>
                          <span className="meta-item">
                            📊 {announcement.is_global ? 'Global' : `Target: ${announcement.target_login}`}
                          </span>
                          <span className="meta-item">
                            👤 {announcement.is_anonymous ? 'Anonymous' : `By ${announcement.created_by}`}
                          </span>
                          <span className="meta-item">
                            📅 {new Date(announcement.created_at).toLocaleDateString()}
                          </span>
                        </small>
                      </div>
                      {announcement.viewed_by && announcement.viewed_by.length > 0 && (
                        <div className="viewers-list">
                          <small>
                            <strong>Viewed by:</strong> {announcement.viewed_by.slice(0, 5).join(', ')}
                            {announcement.viewed_by.length > 5 && ` +${announcement.viewed_by.length - 5} more`}
                          </small>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </StyledAdminPanel>
  );
};

const StyledAdminPanel = styled.div`
  background: linear-gradient(135deg, rgba(33, 33, 37, 0.95), rgba(44, 44, 48, 0.95));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  color: white;

  .admin-header {
    margin-bottom: 20px;

    h2 {
      color: var(--main_color);
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .admin-tabs {
      display: flex;
      gap: 10px;

      button {
        padding: 10px 15px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;

        &:hover {
          background: rgba(183, 251, 43, 0.1);
          border-color: rgba(183, 251, 43, 0.3);
        }

        &.active {
          background: rgba(183, 251, 43, 0.2);
          border-color: var(--main_color);
          color: var(--main_color);
        }
      }
    }
  }

  .tab-content {
    .form-group {
      margin-bottom: 15px;

      label {
        display: block;
        margin-bottom: 5px;
        color: rgba(255, 255, 255, 0.9);
        font-weight: 500;
      }

      input, textarea {
        width: 100%;
        padding: 10px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        color: white;
        font-size: 14px;

        &::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        &:focus {
          outline: none;
          border-color: var(--main_color);
          box-shadow: 0 0 0 2px rgba(183, 251, 43, 0.2);
        }
      }

      textarea {
        min-height: 80px;
        resize: vertical;
      }
    }

    button[type="submit"] {
      background: linear-gradient(135deg, var(--main_color), #4CAF50);
      border: none;
      padding: 12px 20px;
      border-radius: 8px;
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(183, 251, 43, 0.3);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
      }
    }

    h3 {
      color: var(--main_color);
      margin-bottom: 15px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 8px;
    }

    h4 {
      color: #ffffff;
      margin-bottom: 10px;
      font-size: 1.1em;
    }
  }

  /* Analytics Styles */
  .analytics-section {
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-bottom: 30px;
    }

    .stat-card {
      background: linear-gradient(135deg, rgba(183, 251, 43, 0.1), rgba(183, 251, 43, 0.05));
      border: 1px solid rgba(183, 251, 43, 0.2);
      border-radius: 12px;
      padding: 20px;
      display: flex;
      align-items: center;
      gap: 15px;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(183, 251, 43, 0.2);
      }

      .stat-icon {
        font-size: 2em;
        opacity: 0.8;
      }

      .stat-info {
        h4 {
          margin: 0 0 5px 0;
          font-size: 0.9em;
          color: rgba(255, 255, 255, 0.8);
        }

        .stat-number {
          font-size: 1.8em;
          font-weight: bold;
          color: var(--main_color);
        }
      }
    }

    .top-announcements {
      .top-announcements-list {
        max-height: 400px;
        overflow-y: auto;
      }

      .top-announcement-item {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 10px;

        .announcement-preview {
          margin-bottom: 10px;

          strong {
            color: var(--main_color);
            display: block;
            margin-bottom: 5px;
          }

          p {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9em;
            margin: 0;
          }
        }

        .announcement-metrics {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;

          .metric {
            background: rgba(183, 251, 43, 0.1);
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8em;
            color: var(--main_color);
          }
        }
      }
    }
  }

  .banned-users-list, .announcements-list {
    max-height: 300px;
    overflow-y: auto;
  }

  .banned-user-item, .announcement-item {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 10px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(183, 251, 43, 0.3);
    }
  }

  .announcement-item {
    display: block;

    .announcement-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      strong {
        color: var(--main_color);
        font-size: 1.1em;
        flex: 1;
      }

      .announcement-actions {
        display: flex;
        align-items: center;
        gap: 10px;

        .announcement-stats {
          display: flex;
          gap: 8px;

          .stat-badge {
            background: rgba(183, 251, 43, 0.1);
            border: 1px solid rgba(183, 251, 43, 0.3);
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8em;
            color: var(--main_color);
            display: flex;
            align-items: center;
            gap: 4px;

            &.views {
              background: rgba(100, 149, 237, 0.1);
              border-color: rgba(100, 149, 237, 0.3);
              color: #6495ed;
            }

            &.dismissed {
              background: rgba(255, 99, 132, 0.1);
              border-color: rgba(255, 99, 132, 0.3);
              color: #ff6384;
            }
          }
        }

        .delete-btn {
          background: rgba(255, 69, 69, 0.1);
          border: 1px solid rgba(255, 69, 69, 0.3);
          border-radius: 4px;
          padding: 6px 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.9em;

          &:hover {
            background: rgba(255, 69, 69, 0.2);
            border-color: rgba(255, 69, 69, 0.5);
          }

          &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        }
      }
    }

    .announcement-info {
      .announcement-meta {
        margin: 10px 0;

        .meta-item {
          display: inline-block;
          margin-right: 15px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85em;
        }
      }

      .viewers-list {
        margin-top: 8px;
        padding: 8px;
        background: rgba(183, 251, 43, 0.05);
        border-radius: 4px;
        border-left: 3px solid var(--main_color);

        small {
          color: rgba(255, 255, 255, 0.8);
        }
      }
    }
  }

  .banned-user-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-info, .announcement-info {
      flex: 1;

      strong {
        color: var(--main_color);
        font-size: 16px;
      }

      p {
        margin: 5px 0;
        color: rgba(255, 255, 255, 0.8);
      }

      small {
        color: rgba(255, 255, 255, 0.6);
      }
    }

    .unban-btn {
      background: linear-gradient(135deg, #ff6b6b, #ee5a24);
      border: none;
      padding: 8px 12px;
      border-radius: 6px;
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 5px;

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 10px rgba(255, 107, 107, 0.3);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 15px;

    .admin-tabs {
      flex-direction: column;

      button {
        justify-content: center;
      }
    }

    .banned-user-item, .announcement-item {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;

      .unban-btn {
        align-self: flex-end;
      }
    }
  }

  .announcements-section {
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;

      h3 {
        margin: 0;
      }

      .delete-all-btn {
        background: rgba(255, 69, 69, 0.1);
        border: 1px solid rgba(255, 69, 69, 0.3);
        border-radius: 6px;
        padding: 8px 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 0.85em;
        color: #ff4545;

        &:hover {
          background: rgba(255, 69, 69, 0.2);
          border-color: rgba(255, 69, 69, 0.5);
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
    }
  }
`;

export default AdminPanel;
