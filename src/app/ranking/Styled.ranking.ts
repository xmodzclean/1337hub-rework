import styled from "styled-components";
//weekly_placeholder'
import _feedback from "../../../public/feedback.png";

interface StyledCardProps {
  // BannerImg: string;
}

export const StyledRanking = styled.div`
  width: calc(100% - 70px);
  max-width: calc(100% - 70px);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--main_background);
  overflow: hidden;
  overflow-x: hidden;
  margin-left: 70px;
  box-sizing: border-box;
  @media only screen and (max-width: 767px) {
    width: 100%;
    max-width: 100%;
    height: auto;
    padding: 5px;
    min-height: 100vh;
    margin-left: 0;
  }

  /* background-color :#FAFBF4; */

  /* &:before{
    content : "";
    width : 100%;
    height : 70vh;
    background-image : url("/Header.jpg");
    background-position : center 80%;
    background-size : cover;
    position : absolute;
    bottom : 0;
    opacity : 0.3;
  } */

  //Test : feeling weird:because of what. t
  .Container {
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    position: relative;
    z-index: 9;
    box-sizing: border-box;
    overflow: hidden;
    @media only screen and (max-width: 767px) {
      padding: 0px;
      min-height: 100vh;
    }
    /* flex-direction : column; */
    /* overflow  :hidden; */

    .ProfileContainer {
      width: 35%;
      max-width: 35%;
      height: 100%;
      padding: 55px 10px;
      padding-bottom: 5px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      box-sizing: border-box;
      flex-shrink: 0;
      .tmp {
        flex: 1;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        background-color: #212125;
        border: 1px solid rgba(255, 255, 255, 0.06);
        h1 {
          color: white;
          padding: 0px 5px;
          padding-bottom: 10px;
          font-size: 1rem;
          font-family: var(--playable_font);
          font-weight: 100;
          opacity: 0.8;
        }
        .VideoContainer {
          flex: 1;
          overflow: hidden;
          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 3px;
          }
        }
      }

      ._13Hub {
        width: 100%;
        height: 300px;
        background-color: #212125;
        border: 1px solid rgba(255, 255, 255, 0.06);
        border-radius: 5px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        border: none;
        background: linear-gradient(
          20deg,
          rgba(64, 228, 64, 0.4) 0%,
          transparent 100%
        );
        position: relative;
        &:after {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            90deg,
            rgba(142, 45, 226, 0) 0%,
            rgba(64, 228, 64, 1) 50%,
            rgba(142, 45, 226, 0) 100%
          );
          background-position: top;
          background-size: 100% 2px;
          background-repeat: no-repeat;
          top: 0;
          left: 0;
        }

        .Header {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        ._13HubLogo {
          height: 80px;
        }
        h1 {
          color: rgba(255, 255, 255, 0.8);
        }
        span {
          font-weight: 300;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
        }
        button {
          height: 45px;
          border-radius: 5px;
          border: none;
          outline: none;
          background-color: var(--main_color);
          margin-top: auto;
          color: white;
          font-size: 1.2rem;
          font-weight: 500;
          color : rgb(11, 73, 11);
          display: flex;
          justify-content: center;
          align-items: center;
          gap : 5px;
        }
      }

      @media only screen and (max-width: 767px) {
        display: none;
      }
    }

    .LeaderBoardContainer {
      height: 100%;
      flex: 1;
      min-width: 0;
      padding: 55px 10px;
      padding-bottom: 5px;
      box-sizing: border-box;
      @media only screen and (max-width: 767px) {
        margin-top: 7%;
        padding: 0px;
      }
      .Ranking {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        @media only screen and (max-width: 767px) {
          /* height: auto; */
          /* display : none; */
        }
        .Profiles_container {
          overflow-y: scroll;
          display: flex;
          flex-direction: column;
          padding-right: 8px;
          gap: 6px;
          scroll-behavior: smooth;
          
          /* Custom scrollbar */
          &::-webkit-scrollbar {
            width: 6px;
          }
          
          &::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 3px;
          }
          
          &::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, var(--main_color), rgba(183, 251, 43, 0.6));
            border-radius: 3px;
            transition: all 0.3s ease;
          }
          
          &::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, rgba(183, 251, 43, 0.9), var(--main_color));
          }
          
          @media only screen and (max-width: 767px) {
            padding: 0px;
            padding-top: 8px;
            overflow-y: unset;
            padding-right: 0px;
            padding-bottom: 120px;
          }

          .FetchMore {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgba(255, 255, 255, 0.6);
            padding: 20px;
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.3s ease;
            
            &.Animated {
              color: var(--main_color);
              animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
              0%, 100% {
                opacity: 0.6;
                transform: scale(1);
              }
              50% {
                opacity: 1;
                transform: scale(1.02);
              }
            }
            align-items: center;
            padding: 10px;
            @media only screen and (max-width: 767px) {
              /* position : fixed; */
              background: linear-gradient(
                90deg,
                rgb(44, 44, 48, 0) 0%,
                rgb(44, 44, 48, 0.8) 50%,
                rgb(44, 44, 48, 0) 100%
              );
            }
          }
          .Animated {
            animation: fadeInOut 1s infinite;
          }
          /* Scrollbar styles */
          &::-webkit-scrollbar {
            width: 8px; /* Width of the scroll bar */
            @media only screen and (max-width: 767px) {
              width: 0px;
            }
          }
          &::-webkit-scrollbar-track {
            background: rgba(183, 251, 43, 0.2);
            border-radius: 2px;
          }
          &::-webkit-scrollbar-thumb {
            background: rgba(183, 251, 43, 0.4);
            border-radius: 10px;
            transition: 2s ease-in-out;
          }
          &::-webkit-scrollbar-thumb:hover {
            background: rgba(183, 251, 43, 0.6);
          }
        }
        .Skeletons {
          display: flex;
          flex-direction: column;
          padding-right: 5px;
          gap: 5px;
          position: relative;
          @media only screen and (max-width: 767px) {
            padding-right: 0px;
          }
          .CardSkl {
            border-radius: 5px;
            background-color: rgba(44, 44, 48, 1);
          }
          .profileSkl {
            top: 0;
            position: absolute;
          }
        }
      }
    }

    .Options {
      width: 100%;
      max-width: 100%;
      border-radius: 8px;
      display: flex;
      position: relative;
      background: rgba(33, 33, 37, 0.6);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 15px;
      margin-bottom: 15px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease;
      box-sizing: border-box;
      
      &:hover {
        border-color: rgba(255, 255, 255, 0.12);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
      }
      
      @media only screen and (max-width: 767px) {
        max-width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 99;
        height: auto;
        background: rgba(33, 33, 37, 0.95);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        padding: 15px 10px;
        flex-direction: column;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        margin-bottom: 0;
      }        .Filters {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          padding-bottom: 0px;
          
          @media only screen and (max-width: 767px) {
            flex-direction: column;
            padding-bottom: 0px;
          }
          
          .Select_container {
            width: 100%;
            flex-grow: 1;
            color: white;
            display: flex;
            gap: 8px;
            
            @media only screen and (max-width: 767px) {
              width: 100%;
              .HideIt {
                display: none;
              }
            }
          }
        .Other_filters {
          width: 100%;
          display: flex;
          gap: 8px;
          align-items: center;
          
          .SearchUser {
            flex-grow: 1;
            height: 100%;
            display: flex;
            align-items: flex-end;
            position: relative;
            @media only screen and (max-width: 767px) {
              display: none;
            }
            input {
              height: 42px;
              width: 100%;
              border-radius: 8px;
              padding: 12px 16px;
              outline: none;
              background: rgba(44, 44, 48, 0.6);
              border: 1px solid rgba(255, 255, 255, 0.1);
              font-size: 0.9rem;
              color: rgba(255, 255, 255, 0.9);
              transition: all 0.3s ease;
              
              &::placeholder {
                color: rgba(255, 255, 255, 0.5);
              }
              
              &:focus {
                border-color: var(--main_color);
                background: rgba(44, 44, 48, 0.8);
                box-shadow: 0 0 0 3px rgba(183, 251, 43, 0.1);
              }
            }
          }
          
          .ToMeButton {
            height: 42px;
            border-radius: 8px;
            cursor: pointer;
            border: 2px solid rgba(183, 251, 43, 0.4);
            background: linear-gradient(135deg, rgba(183, 251, 43, 0.1), rgba(183, 251, 43, 0.05));
            color: rgba(183, 251, 43, 0.9);
            font-size: 0.9rem;
            font-weight: 600;
            padding: 0px 20px;
            min-width: 80px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            
            &::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(183, 251, 43, 0.2), transparent);
              transition: left 0.5s ease;
            }
            
            &:hover {
              background: linear-gradient(135deg, rgba(183, 251, 43, 0.2), rgba(183, 251, 43, 0.1));
              border-color: rgba(183, 251, 43, 0.6);
              color: rgba(183, 251, 43, 1);
              transform: translateY(-1px);
              box-shadow: 0 4px 12px rgba(183, 251, 43, 0.2);
              
              &::before {
                left: 100%;
              }
            }
            
            &:active {
              transform: translateY(0);
            }
            
            @media only screen and (max-width: 767px) {
              width: 25%;
              position: absolute;
              bottom: 10px;
              left: 5px;
            }
          }
          .GenderFilter {
            width: 300px;
            height: 42px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            overflow: hidden;
            background: rgba(44, 44, 48, 0.4);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            
            &:hover {
              border-color: rgba(255, 255, 255, 0.15);
            }
            
            @media only screen and (max-width: 767px) {
              width: 70%;
            }
            
            span {
              font-family: var(--main_font);
              color: rgba(255, 255, 255, 0.7);
              font-weight: 500;
            }
            
            .Male {
              color: #87ceeb;
              padding: 0px 10px;
            }

            .Female {
              color: #ff69b4;
            }
            
            .All {
              color: rgba(255, 255, 255, 0.8);
            }

            .Male,
            .Female,
            .All {
              flex-grow: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 0px 15px;
              cursor: pointer;
              transition: all 0.3s ease;
              position: relative;
              
              @media only screen and (max-width: 767px) {
                padding: 0px 8px;
              }
              
              .GenderIcon {
                size: 50px;
              }
              
              &.selected {
                background: linear-gradient(135deg, rgba(183, 251, 43, 0.2), rgba(183, 251, 43, 0.1));
                color: rgba(183, 251, 43, 1);
                
                &::after {
                  content: '';
                  position: absolute;
                  bottom: 0;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 80%;
                  height: 2px;
                  background: linear-gradient(90deg, transparent, var(--main_color), transparent);
                }
              }
              
              &:hover:not(.selected) {
                background: rgba(255, 255, 255, 0.05);
                color: rgba(255, 255, 255, 0.9);
              }
            }
            
            .devider {
              width: 1px;
              height: 60%;
              background: linear-gradient(
                0deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.1) 50%,
                rgba(255, 255, 255, 0) 100%
              );
              align-self: center;
            }
          }
        }
      }
    }
  }
`;
