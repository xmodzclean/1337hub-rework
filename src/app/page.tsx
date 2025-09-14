"use client";
import { StyledMain } from "./styled.home";
import { useSession, signIn} from "next-auth/react";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaDiscord, FaArrowRight, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Main = () => {
  const { data: session, status } = useSession();

  const handleInvite = () => {
    window.open("https://discord.gg/5cZfS8djyg");
  };

  const handleSignIn = async () => {
    const callbackUrl = "/ranking";
    signIn("42-school", { callbackUrl });
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const message = params.get("error");
    if (message) {
      toast.error("🔒 You must be logged in to access this page.", {
        icon: false,
      });
    }
  }, []);

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
    </StyledMain>
  );
};

export default Main;
