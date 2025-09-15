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
      tran      .UserInfo {
        padding: 8px 16px;

        .User_name {
          font-size: 1rem;
          max-width: 180px;
        }

        .online span {
          font-size: 0.85rem;
        }
      }lateX(-100px) skewX(-15deg);
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

  /* Additional keyframe animations */
  @keyframes verifiedGlow {
    0%,
    100% {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
        0 0 8px rgba(183, 251, 43, 0.3);
    }
    50% {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3),
        0 0 15px rgba(183, 251, 43, 0.6);
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
    width: 250px;
    height: 45px;
    border-radius: 12px;
    padding: 3px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    background: linear-gradient(
      135deg,
      rgba(195, 185, 252, 0.15),
      rgba(183, 251, 43, 0.08)
    );
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(183, 251, 43, 0.1),
        transparent
      );
      transition: left 0.6s ease;
    }

    &:hover {
      background: linear-gradient(135deg, rgba(195, 185, 252, 0.25), rgba(183, 251, 43, 0.15));
      border-color: rgba(183, 251, 43, 0.3);
      box-shadow: 0 8px 25px rgba(183, 251, 43, 0.15);
      transform: translateY(-2px);

      &::before {
        left: 100%;
      }

      .UserInfo {
        .name-container .User_name {
          color: rgba(255, 255, 255, 0.95);
        }
        
        .online {
          span {
            color: rgba(255, 255, 255, 0.9);
          }
          
          .online_dot {
            box-shadow: 0 0 8px currentColor;
            animation: pulse 2s ease-in-out infinite;
            transform: scale(1.1);
          }
        }
      }

      .Avatar {
        transform: scale(1.05);
        border-color: rgba(183, 251, 43, 0.4);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        
        .level-badge {
          /* Level badge removed */
        }

        &::after {
          opacity: 0.15;
        }
      }
    }

    .UserInfo {
      height: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      padding: 8px 12px;
      gap: 2px;        .name-container {
          display: flex;
          align-items: center;
          gap: 4px;
          max-width: 160px;          .verified-badge {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--main_color), #4CAF50);
            color: white;
            font-size: 10px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            animation: verifiedGlow 3s ease-in-out infinite;
          }
      }

      .User_name {
        font-weight: 500;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.85);
        transition: color 0.3s ease;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 1.2;
        margin: 0;
        flex: 1;
        min-width: 0;
      }

      .online {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 6px;

        .online_dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 0;
          position: relative;
          transition: all 0.3s ease;

          &::before {
            content: "";
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            border-radius: 50%;
            background: inherit;
            opacity: 0.3;
            animation: ripple 2s ease-in-out infinite;
          }
        }

        span {
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: color 0.3s ease;
        }
      }
    }

    .Avatar {
      width: 38px;
      height: 38px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      background-position: center;
      background-size: cover;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: visible;
      border: 2px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

      .level-badge {
        /* Level badge removed */
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          135deg,
          rgba(183, 251, 43, 0.2),
          rgba(195, 185, 252, 0.2)
        );
        opacity: 0;
        transition: opacity 0.3s ease;
        border-radius: inherit;
      }
    }

    /* Responsive adjustments */
    @media only screen and (max-width: 1024px) {
      width: 220px;
      height: 42px;

      .UserInfo {
        padding: 6px 10px;

        .User_name {
          font-size: 0.85rem;
          max-width: 140px;
        }

        .online span {
          font-size: 0.75rem;
        }
      }

      .Avatar {
        width: 35px;
        height: 35px;
      }
    }

    @media only screen and (max-width: 768px) {
      width: 200px;
      height: 40px;

      .UserInfo {
        .User_name {
          max-width: 120px;
        }
      }

      .Avatar {
        width: 32px;
        height: 32px;
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
      0%,
      100% {
        box-shadow: 0 4px 20px rgba(88, 101, 242, 0.3);
      }
      50% {
        box-shadow: 0 4px 25px rgba(88, 101, 242, 0.4);
      }
    }

    &::before {
      content: "";
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

  /* Keyframe animations */
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }

  @keyframes ripple {
    0% {
      transform: scale(1);
      opacity: 0.3;
    }
    100% {
      transform: scale(1.4);
      opacity: 0;
    }
  }
`;
