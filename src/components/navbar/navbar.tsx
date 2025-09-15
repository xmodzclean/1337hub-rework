"use client";
import { StyledNavbar } from "./styled.navbar";
import _13hub_logo from "../../../public/logos/13hub.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
// MaterialUI Components
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// Icons
import {
  FaRegEdit,
  FaSignOutAlt,
  FaBell,
  FaCommentAlt,
  FaDiscord,
  FaUser,
  FaHeart,
  FaCog,
  FaStar,
} from "react-icons/fa";
import GetVerified from "./GetVerified";
import Profile from "@/app/ranking/compoents/profile";
import ProfileModal from "./ProfileModal";
import MyFeedbacksModal from "@/components/my_feedbacks_modal/MyFeedbacksModal";
import NotificationCenter from "@/components/notification_center/NotificationCenter";
import AnnouncementCenter from "@/components/announcement_center/AnnouncementCenter";
import { toast } from "react-toastify";

const get_username_from_email = (email: string) => {
  const username = email.split("@")[0];
  return username;
};

const Navbar: React.FC = () => {
  const { data: session, status: sessionStatus } = useSession();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openGetVerified, setOpenGetVerified] = React.useState(false);
  const [openProfileModal, setOpenProfileModal] = React.useState(false);
  const [openFeedbacksModal, setOpenFeedbacksModal] = React.useState(false);
  const [isOnline, setIsOnline] = React.useState(true);
  const [lastSeen, setLastSeen] = React.useState<Date>(new Date());
  const [isHovered, setIsHovered] = React.useState(false);
  const open = Boolean(anchorEl);

  // Check if we're on the home page
  const isHomePage = pathname === "/";

  console.log("Session Data:", session);

  // Online status tracking
  React.useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setLastSeen(new Date());
    };
    
    const handleOffline = () => {
      setIsOnline(false);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setIsOnline(true);
        setLastSeen(new Date());
      } else {
        setIsOnline(false);
      }
    };

    // Set up event listeners
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Update last seen every minute when online
    const interval = setInterval(() => {
      if (isOnline && document.visibilityState === 'visible') {
        setLastSeen(new Date());
      }
    }, 60000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(interval);
    };
  }, [isOnline]);

  // Format user display name
  const getDisplayName = () => {
    if (!session?.user) return "";
    
    // If user has a nickname, use it, otherwise use their name
    if (session.user.nickname && session.user.nickname.trim()) {
      return session.user.nickname;
    }
    
    // Truncate long names
    const name = session.user.name || "";
    return name.length > 20 ? name.substring(0, 20) + "..." : name;
  };

  // Get online status text and color
  const getOnlineStatus = () => {
    if (!session) return { text: "offline", color: "#e53935" };
    
    if (isOnline && document.visibilityState === 'visible') {
      return { text: "online", color: "#56ab2f" };
    } else if (isOnline) {
      return { text: "away", color: "#ff9800" };
    } else {
      return { text: "offline", color: "#e53935" };
    }
  };

  const status_online = getOnlineStatus();

  // Format last seen time
  const formatLastSeen = () => {
    if (!lastSeen || isOnline) return "";
    
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - lastSeen.getTime()) / 1000);
    
    if (diffInSeconds < 60) {
      return "just now";
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes}m ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours}h ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days}d ago`;
    }
  };

  const status = getOnlineStatus();

  // Dialog Handlers
  const handleGetVerified = () => {
    setOpenGetVerified(true);
  };

  const handleOpenProfileModal = () => {
    setOpenProfileModal(true);
    setAnchorEl(null);
  };

  const handleOpenFeedbacksModal = () => {
    setOpenFeedbacksModal(true);
    setAnchorEl(null);
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!session) return;
    setAnchorEl(event.currentTarget);
  };

  const handleCloseProfileDialog = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    signOut({ callbackUrl: "/" });
  };

  const HandleFeatureClick = () => {
    toast.info("Feature not implemented yet");
    setAnchorEl(null);
  };

  const handleCloseProfileModal = () => {
    setOpenProfileModal(false);
  };
  
  const handleCloseFeedbacksModal = () => {
    setOpenFeedbacksModal(false);
  };
  const handleCloseGetVerified = () => {
    setOpenGetVerified(false);
  };

  const handleInvite = () => {
    window.open("https://discord.gg/5cZfS8djyg");
  };

  return (
    <StyledNavbar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseProfileDialog}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, rgba(33, 33, 37, 0.95), rgba(44, 44, 48, 0.95))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            minWidth: '200px',
            '& .MuiMenuItem-root': {
              color: 'rgba(255, 255, 255, 0.9)',
              padding: '12px 16px',
              margin: '4px 8px',
              borderRadius: '8px',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              '&:hover': {
                background: 'rgba(183, 251, 43, 0.1)',
                color: 'white',
                transform: 'translateX(4px)',
              },
              '&:first-of-type': {
                marginTop: '8px',
              },
              '&:last-of-type': {
                marginBottom: '8px',
                color: 'rgba(255, 107, 107, 0.9)',
                '&:hover': {
                  background: 'rgba(255, 107, 107, 0.1)',
                  color: 'rgba(255, 107, 107, 1)',
                },
              },
            },
          },
        }}
      >
        <MenuItem onClick={handleOpenProfileModal}>
          <FaUser size={14} />
          My Profile
        </MenuItem>
        <MenuItem onClick={handleOpenFeedbacksModal}>
          <FaCommentAlt size={14} />
          My Feedbacks
        </MenuItem>
        <MenuItem onClick={HandleFeatureClick}>
          <FaHeart size={14} />
          My Favorites
        </MenuItem>
        <MenuItem onClick={HandleFeatureClick}>
          <FaCog size={14} />
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <FaSignOutAlt size={14} />
          Logout
        </MenuItem>
      </Menu>
      {session?.user.verified === false && (
        <>
          <GetVerified
            open={openGetVerified}
            onClose={() => handleCloseGetVerified()}
            setIsOpen={setOpenGetVerified}
          />
          <div className="GetVerified" onClick={handleGetVerified}>
            <h1>Get Verified!</h1>
          </div>
        </>
      )}
      {!isHomePage && (
        <div className="Nav_item discordInvite" onClick={handleInvite}>
          <FaDiscord fill="white" size={25} />
          <h1>Join Community</h1>
        </div>
      )}

      <ProfileModal
        open={openProfileModal}
        onClose={() => handleCloseProfileModal()}
        setIsOpen={setOpenProfileModal}
      />

      <MyFeedbacksModal
        open={openFeedbacksModal}
        onClose={() => handleCloseFeedbacksModal()}
      />

      {session && <NotificationCenter />}
      {session && <AnnouncementCenter />}

      <div
        className="Profile"
        onClick={handleProfileClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        title={`${getDisplayName()} - ${status_online.text}${!isOnline && lastSeen ? ` (${formatLastSeen()})` : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="UserInfo">
          <div className="name-container">
            <h4 className="User_name">{getDisplayName()}</h4>
            {session?.user.verified && (
              <div className="verified-badge" title="Verified User">
                ✓
              </div>
            )}
          </div>
          <div className="online">
            <div
              className="online_dot"
              style={{ backgroundColor: status_online.color }}
            />
            <span>{status_online.text}</span>
          </div>
        </div>

        <div
          className="Avatar"
          style={{ 
            backgroundImage: `url(${session?.user?.image || 'https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg'})` 
          }}
        >
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
