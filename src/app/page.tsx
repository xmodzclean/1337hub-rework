"use client";
import { StyledMain } from "./styled.home";
import { useSession, signIn} from "next-auth/react";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaDiscord, FaArrowRight, FaGithub, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import BanDialog from "@/components/ban_dialog/BanDialog";
import AnnouncementDialog from "@/components/announcement_dialog/AnnouncementDialog";

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

const Main = () => {
  const { data: session, status } = useSession();
  const [showBanDialog, setShowBanDialog] = useState(false);
  const [banReason, setBanReason] = useState("");
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  const [showAnnouncementDialog, setShowAnnouncementDialog] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleInvite = () => {
    window.open("https://discord.gg/5cZfS8djyg");
  };

  const handleSignIn = async () => {
    if (session) {
      // If user is already logged in, redirect to ranking page
      window.location.href = "/ranking";
    } else {
      // If user is not logged in, start the login process
      const callbackUrl = "/ranking";
      signIn("42-school", { callbackUrl });
    }
  };

  const handleGuestLogin = () => {
    toast.info("soon...", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      icon: false,
    });
  };

  // Redirect to ranking if already logged in
  useEffect(() => {
    if (status === 'authenticated' && session) {
      window.location.href = "/ranking";
    }
  }, [status, session]);

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch('/api/user/announcements');
      if (response.ok) {
        const data = await response.json();
        setAnnouncements(data);
      }
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");
    const reason = params.get("reason");
    
    if (error === "ranking") {
      toast.error("🔒 You must be logged in to access this page.", {
        icon: false,
      });
    } else if (error === "banned") {
      const decodedReason = reason ? decodeURIComponent(reason) : 'No reason provided';
      setBanReason(decodedReason);
      setShowBanDialog(true);
      
      // Clear URL parameters after showing dialog
      const url = new URL(window.location.href);
      url.searchParams.delete('error');
      url.searchParams.delete('reason');
      window.history.replaceState({}, '', url.toString());
    }
  }, []);

  // Fetch announcements for the logged-in user
  useEffect(() => {
    if (session) {
      const fetchAnnouncements = async () => {
        try {
          const response = await fetch('/api/user/announcements');
          if (response.ok) {
            const data = await response.json();
            setAnnouncements(data);
            
            // Show first announcement if any exist
            if (data.length > 0) {
              setShowAnnouncementDialog(true);
            }
          }
        } catch (error) {
          console.error('Error fetching announcements:', error);
        }
      };

      fetchAnnouncements();
    }
  }, [session]);

  // Fetch announcements when user is logged in
  useEffect(() => {
    if (session?.user) {
      fetchAnnouncements();
    }
  }, [session]);

  // Show first announcement when announcements are loaded
  useEffect(() => {
    if (announcements.length > 0 && !showAnnouncementDialog) {
      setCurrentAnnouncementIndex(0);
      setShowAnnouncementDialog(true);
    }
  }, [announcements]);

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollToTop(scrollTop > 300); // Show button after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCloseBanDialog = () => {
    setShowBanDialog(false);
  };

  const handleCloseAnnouncementDialog = () => {
    setShowAnnouncementDialog(false);
    
    // Show next announcement if there are more
    if (currentAnnouncementIndex < announcements.length - 1) {
      setCurrentAnnouncementIndex(prev => prev + 1);
      setTimeout(() => setShowAnnouncementDialog(true), 500);
    }
  };

  const handleDismissAnnouncement = async (announcementId: string) => {
    try {
      const response = await fetch('/api/user/dismiss-announcement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ announcementId }),
      });

      if (response.ok) {
        // Remove dismissed announcement from the list
        setAnnouncements(prev => prev.filter(a => a.id !== announcementId));
        
        // Close current dialog and show next if available
        handleCloseAnnouncementDialog();
      }
    } catch (error) {
      console.error('Error dismissing announcement:', error);
    }
  };

  return (
    <StyledMain>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        className="foo"
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Navigate <span className="gradient-text">School</span>
              <br />Like a <span className="highlight">Boss!</span>
            </h1>

            <div className="hero-actions">
              <div className="login-section">
                <button className="cta-button primary" onClick={handleSignIn}>
                  <span>Login with</span>
                  <FaArrowRight className="arrow-icon" />
                  <svg className="_42logo" viewBox="0 -200 960 960">
                    <polygon points="32,412.6 362.1,412.6 362.1,578 526.8,578 526.8,279.1 197.3,279.1 526.8,-51.1 362.1,-51.1 32,279.1" />
                    <polygon points="597.9,114.2 762.7,-51.1 597.9,-51.1" />
                    <polygon points="762.7,114.2 597.9,279.1 597.9,443.9 762.7,443.9 762.7,279.1 928,114.2 928,-51.1 762.7,-51.1" />
                    <polygon points="928,279.1 762.7,443.9 928,443.9" />
                  </svg>
                </button>
                
                <span className="guest-text" onClick={handleGuestLogin}>
                     No account? Login as Guest
                </span>
              </div>

              <button className="cta-button secondary" onClick={handleInvite}>
                <FaDiscord />
                <span>Join Community</span>
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="header-image-container">
              <img 
                src="/Header.jpg" 
                alt="1337 School" 
                className="header-image"
              />
              <div className="header-overlay">
                <div className="overlay-content">
                  <h3></h3>
                  <p>waw ana f benguerir</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img src="/13HUB.png" alt="13BG" className="hub-logo" />
              <span>1337 Hub</span>
            </div>
            <p>Navigate 1337 campuses with realtime rankings and analytics.</p>
          </div>
          
          <div className="footer-right">
            <div className="footer-links">
              <a href="https://discord.gg/5cZfS8djyg" target="_blank" rel="noopener noreferrer">
                <FaDiscord />
              </a>
              <a href="https://github.com/hassankarrach/1337bg" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
            <p>&copy; 2024 1337 Hub.</p>
          </div>
        </div>
      </footer>

      {/* Ban Dialog */}
      <BanDialog 
        isOpen={showBanDialog} 
        onClose={handleCloseBanDialog} 
        reason={banReason}
      />

      {/* Announcement Dialog */}
      {announcements.length > 0 && (
        <AnnouncementDialog 
          isOpen={showAnnouncementDialog} 
          onClose={handleCloseAnnouncementDialog} 
          announcement={announcements[currentAnnouncementIndex]}
          onDismiss={handleDismissAnnouncement}
        />
      )}
    </StyledMain>
  );
};

export default Main;
