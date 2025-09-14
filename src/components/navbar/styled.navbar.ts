import styled from "styled-components";

export const StyledNavbar = styled.div`
  position: fixed;
  z-index: 999;
  right: 10px;
  top: 10px;
  display: flex;
  gap: 5px;
  @media only screen and (max-width: 767px) {
    top: 5px;
    right: 5px;
  }

  @keyframes shine-alt1 {
    0% {
      opacity: 0.5;
      transform: translateX(-100px) skewX(-15deg);
    }
    100% {
      opacity: 0.6;
      transform: translateX(300px) skewX(-15deg);
    }
  }

  @keyframes shine-alt2 {
    0% {
      opacity: 0;
      transform: translateX(-100px) skewX(-15deg);
    }
    100% {
      opacity: 1;
      transform: translateX(300px) skewX(-15deg);
    }
  }

  .GetVerified {
    width: 200px;
    height: 40px;
    background-size: 400% !important;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    h1 {
      color: rgba(255, 255, 255, 0.8);
      font-weight: 400;
      font-size: 1.2rem;
      transition: 0.1s ease-in-out;
      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    }

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 100%;
      top: 0;
    }
    &::before {
      background: rgba(255, 255, 255, 0.5);
      width: 60px;
      left: 0;
      filter: blur(30px);
      animation: shine-alt1 2s ease-in-out infinite;
    }
    &::after {
      background: rgba(255, 255, 255, 0.2);
      width: 30px;
      left: 30px;
      filter: blur(5px);
      animation: shine-alt2 2s ease-in-out infinite;
    }
  }

  .Profile {
    width: 200px;
    height: 40px;
    border-radius: 5px;
    padding: 2px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    background: rgba(195, 185, 252, 0.15);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.06);

    .UserInfo {
      height: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      padding: 10px 5px;
      /* justify-content : flex-end; */

      .User_name {
        /* color: var(--main_color); */
        font-weight: 400;
        /* text-transform: uppercase; */
      }
      .online {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .online_dot {
          width: 8px;
          height: 8px;
          background-color: red;
          border-radius: 50%;
          margin-right: 5px;
        }
      }
    }

    .Avatar {
      width: 35px;
      height: 100%;
      background-color: white;
      border-radius: 3px;
      background-position: center;
      background-size: cover;
      transition: 0.2s ease-in-out;
      position: relative;
      overflow: hidden;

      &:hover {
        /* border : 1px solid var(--main_color); */
        &:after {
          content: "";
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: var(--main_color);
          opacity: 0.1;
        }
      }
    }
  }

  .Nav_item {
    width: 40px;
    height: 40px;
    background: rgba(195, 185, 252, 0.15);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      .Nav_item_icon {
        opacity: 1;
      }
    }

    .Nav_item_icon {
      color: var(--main_color);
      opacity: 0.7;
      transition: 0.2s ease-in-out;
    }
  }
  .Nav_item.discordInvite {
    background: linear-gradient(135deg, #5865f2, #7289da);
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 12px;
    padding: 8px 16px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(88, 101, 242, 0.3);
    box-shadow: 0 4px 20px rgba(88, 101, 242, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    animation: subtle-pulse 3s ease-in-out infinite;
    
    @keyframes subtle-pulse {
      0%, 100% {
        box-shadow: 0 4px 20px rgba(88, 101, 242, 0.3);
      }
      50% {
        box-shadow: 0 4px 25px rgba(88, 101, 242, 0.4);
      }
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s ease;
    }
    
    &:hover::before {
      left: 100%;
    }
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(88, 101, 242, 0.5);
      background: linear-gradient(135deg, #4752c4, #5b6ecd);
      animation: none;
    }
    
    &:active {
      transform: translateY(0);
      transition: transform 0.1s ease;
    }
    
    svg {
      transition: transform 0.3s ease;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    }
    
    &:hover svg {
      transform: scale(1.1) rotate(5deg);
    }
    
    h1 {
      color: white;
      font-weight: 700;
      font-size: 1.2rem;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      letter-spacing: 0.3px;
      transition: all 0.3s ease;
    }
    
    &:hover h1 {
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
      transform: translateX(2px);
    }
    
    @media only screen and (max-width: 1024px) {
      width: 180px;
      
      h1 {
        font-size: 1.1rem;
      }
    }
    
    @media only screen and (max-width: 767px) {
      display: none;
    }
  }
`;
