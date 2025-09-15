import styled from "styled-components";

export const StyledMain = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0e1a 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  overflow-x: hidden;

  /* Hero Section */
  .hero-section {
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 5%;
    background: linear-gradient(135deg, #0a0e1a 0%, #1a1a2e 50%, #16213e 100%);
    
    @media (max-width: 768px) {
      min-height: 100vh;
      padding: 0 4%;
    }
  }

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 20% 20%, rgba(183, 251, 43, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(0, 150, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 60%, rgba(255, 20, 147, 0.05) 0%, transparent 50%);
    }
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    z-index: 2;
    position: relative;
    align-items: center;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2rem;
    }
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    max-width: 600px;

    h1 {
      font-family: var(--playable_font);
      font-size: 3.5rem;
      font-weight: 700;
      color: white;
      line-height: 1.1;
      margin: 0;
      
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
      
      @media (max-width: 480px) {
        font-size: 2rem;
      }
    }

    .gradient-text {
      background: linear-gradient(135deg, var(--main_color), #00d4ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .highlight {
      color: var(--main_color);
      text-shadow: 0 0 20px rgba(183, 251, 43, 0.5);
    }
  }

  .hero-description {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin: 0;
    max-width: 500px;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
      justify-content: center;
      gap: 0.8rem;
    }
    
    @media (max-width: 600px) {
      flex-direction: column;
      width: 100%;
      gap: 1rem;
    }
  }

  .cta-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 12px;
    border: none;
    font-size: 1.1rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    span {
      font-weight: 800;
      font-size: 1.1rem;
    }
    
    @media (max-width: 600px) {
      width: 100%;
      justify-content: center;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      transition: left 0.5s ease;
    }

    &:hover::before {
      left: 100%;
    }

    &.primary {
      background: linear-gradient(135deg, #1a1a1a, #000000);
      color: white;
      font-weight: 900;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
        background: linear-gradient(135deg, #000000, #2a2a2a);
      }

      .arrow-icon {
        transition: transform 0.3s ease;
        color: white;
      }

      &:hover .arrow-icon {
        transform: translateX(4px);
      }

      ._42logo {
        width: 24px;
        height: 24px;
        fill: white;
      }
    }

    &.secondary {
      background: linear-gradient(135deg, #5865f2, #7289da);
      color: white;
      border: 1px solid rgba(88, 101, 242, 0.3);
      backdrop-filter: blur(10px);
      font-weight: 800;
      box-shadow: 0 4px 20px rgba(88, 101, 242, 0.3);
      position: relative;
      overflow: hidden;
      min-width: 180px;
      padding: 1rem 1.5rem;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.6s ease;
      }

      &:hover {
        background: linear-gradient(135deg, #4752c4, #5865f2);
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(88, 101, 242, 0.5);
      }

      &:hover::after {
        left: 100%;
      }

      svg {
        font-size: 1.2rem;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        transition: transform 0.3s ease;
      }

      &:hover svg {
        transform: scale(1.1) rotate(5deg);
      }

      span {
        position: relative;
        z-index: 1;
      }
    }

    &.guest {
      background: linear-gradient(135deg, rgba(183, 251, 43, 0.1), rgba(110, 157, 13, 0.1));
      color: var(--main_color);
      border: 2px solid rgba(183, 251, 43, 0.3);
      backdrop-filter: blur(10px);
      font-weight: 600;
      box-shadow: 0 4px 20px rgba(183, 251, 43, 0.2);
      position: relative;
      overflow: hidden;
      min-width: 180px;
      padding: 1rem 1.5rem;
      
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(183, 251, 43, 0.1), transparent);
        transition: left 0.6s ease;
      }

      &:hover {
        background: linear-gradient(135deg, rgba(183, 251, 43, 0.2), rgba(110, 157, 13, 0.2));
        border-color: rgba(183, 251, 43, 0.5);
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(183, 251, 43, 0.3);
        color: var(--main_color_light);
      }

      &:hover::after {
        left: 100%;
      }

      .arrow-icon {
        transition: transform 0.3s ease;
        color: var(--main_color);
      }

      &:hover .arrow-icon {
        transform: translateX(4px);
        color: var(--main_color_light);
      }

      span {
        position: relative;
        z-index: 1;
        font-weight: 600;
      }
    }
  }

  /* Hero Visual */
  .hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-image-container {
    position: relative;
    width: 100%;
    max-width: 500px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(183, 251, 43, 0.2);
    
    @media (max-width: 768px) {
      max-width: 90%;
      border-radius: 16px;
    }
  }

  .header-image {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
    
    @media (max-width: 768px) {
      &:hover {
        transform: scale(1.02);
      }
    }
  }

  .header-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    padding: 2rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
    
    @media (max-width: 768px) {
      padding: 1.5rem;
      transform: translateY(0);
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
    }
  }

  .header-image-container:hover .header-overlay {
    transform: translateY(0);
  }

  .overlay-content {
    text-align: center;
    color: white;

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0 0 0.5rem 0;
      color: var(--main_color);
      
      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }

    p {
      font-size: 1rem;
      margin: 0;
      opacity: 0.9;
      
      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }

  /* Footer */
  .footer-section {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    padding: 1.5rem 5%;
    z-index: 2;
    
    @media (max-width: 768px) {
      padding: 1rem 4%;
    }
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-items: center;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 0.5rem;
    }
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;

    .logo-image {
      width: 28px;
      height: 28px;
    }

    .hub-logo {
      width: 24px;
      height: 24px;
      margin-left: -4px;
    }

    span {
      font-size: 1.1rem;
      font-weight: bold;
      color: white;
    }
  }

  .footer-left p {
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
  }

  .footer-right {
    text-align: right;
    
    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .footer-links {
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
    margin-bottom: 0.5rem;
    
    @media (max-width: 768px) {
      justify-content: center;
    }

    a {
      width: 36px;
      height: 36px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      transition: all 0.3s ease;

      &:hover {
        background: var(--main_color);
        color: #0a0e1a;
        transform: translateY(-2px);
      }
    }
  }

  .footer-right p {
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
    font-size: 0.9rem;
  }

  /* Scroll to Top Button */
  .scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--main_color), #4CAF50);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(183, 251, 43, 0.3);
    transition: all 0.3s ease;
    z-index: 1000;
    animation: fadeInUp 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(183, 251, 43, 0.4);
      background: linear-gradient(135deg, #4CAF50, var(--main_color));
    }

    &:active {
      transform: translateY(-1px);
    }

    svg {
      color: #000;
      font-size: 20px;
    }

    @media (max-width: 768px) {
      width: 45px;
      height: 45px;
      bottom: 20px;
      right: 20px;

      svg {
        font-size: 18px;
      }
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Login Section */
  .login-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
    
    @media (max-width: 768px) {
      align-items: center;
    }
  }

  .guest-text {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    font-family: var(--main_font);
    
    &:hover {
      color: var(--main_color);
      transform: translateY(-1px);
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--main_color);
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
`;

