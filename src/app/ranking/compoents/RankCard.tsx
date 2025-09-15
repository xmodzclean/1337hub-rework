import { useSession } from "next-auth/react";
import React, { FC, forwardRef, Ref } from "react";
import styled from "styled-components";
import { FaCheckSquare as VerifiedIcon, FaUserShield } from "react-icons/fa";
import useMobileDetection from "@/hooks/useMobile";
import AdmissionStatus from "@/components/admission_status/AdmissionStatus";

interface StyledProps {
  $rank: number;
  $avatar: string;
  $is_user: boolean;
  $is_even: boolean;
}

const StyledCard = styled.div<StyledProps>`
  width: 100%;
  min-height: 65px;
  background-color: ${(props) => (props.$is_even ? "#212125" : "#2c2c30")};
  /* background: ${(props) =>
    props.$is_user
      ? "linear-gradient(337deg, rgba(183,251,43,1) 30%, rgba(110,157,13,1) 100%);"
      : props.$rank === 1 || props.$rank === 2 || props.$rank === 3
      ? "linear-gradient(291deg, rgba(245,206,0,1) 0%, rgba(224,189,0,1) 100%);"
      : "#212125"}; */
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-right: 5px solid ${(props) =>
    props.$rank === 1 || props.$rank === 2 || props.$rank === 3
      ? "#FFD700"
      : props.$is_user
      ? "var(--main_color_light)"
      : "#2c2c30"};
  border-radius: 5px;
  display: flex;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease-in-out;
  overflow: hidden;
  @media only screen and (max-width: 767px) {
    height: 60px;
  }

  &:after {
    content: "";
    border-radius: 3px;
    width: 3px;
    height: 80%;
    position: absolute;
    left: 0;
    background-color: ${(props) =>
      props.$rank >= 1 && props.$rank <= 3 ? "#ffd700" : "var(--main_color)"};
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    content: "";
    height: 100%;
    width: 100%;
    background: ${(props) =>
      props.$is_user
        ? "linear-gradient(90deg, rgba(183,251,43, 0.3) 0%, rgba(183,251,43,0) 8%);"
        : props.$rank >= 1 && props.$rank <= 3
        ? "linear-gradient(90deg, rgba(255,215,0,0.8) 0%, rgba(255,215,0,0) 8%);"
        : ""};
    position: absolute;
    left: 0;

    @media only screen and (max-width: 767px) {
      background: ${(props) =>
        props.$is_user
          ? "linear-gradient(90deg, rgba(183,251,43, 0.3) 0%, rgba(183,251,43,0) 25%);"
          : props.$rank >= 1 && props.$rank <= 3
          ? "linear-gradient(90deg, rgba(255,215,0,0.8) 0%, rgba(255,215,0,0) 25%);"
          : ""};
    }
  }

  &:hover {
    box-shadow: ${(props) =>
          props.$rank === 1 || props.$rank === 2 || props.$rank === 3
            ? "rgb(255, 215, 0, 0.1)"
            : "rgba(0, 0, 0, 0.1)"}
        3px 12px 34px 0px,
      ${(props) =>
          props.$rank === 1 || props.$rank === 2 || props.$rank === 3
            ? "rgb(255, 215, 0, 0.4)"
            : "rgba(0, 0, 0, 0.1)"}
        0px 1px 2px 0px;
  }

  .Card_Avatar {
    width: 60px;
    height: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    position: relative;
    background-color: var(--border_grey);
    background-image: ${(props) => `url(${props.$avatar})`};
    background-position: center;
    background-size: cover;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: 0.1s ease-in-out;
    z-index: 1;
  }

  .Card_Rank {
    z-index: 1;
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .Rank_icon {
      width: 25px;
    }

    span {
      position: absolute;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 1.2rem;
      color: white;
      font-family: var(--playable_font);
    }
  }

  .Card_Data {
    z-index: 1;
    margin-left: 10px;
    font-family: "Poppins", sans-serif;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;
    .Card_FullName {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3px;
      .VerifiedIcon {
        color : var(--main_color_light);
      }
      .ModBadge {
        color: #fff;
        background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 50%, #ff4757 100%);
        border: 1px solid rgba(255, 107, 107, 0.6);
        border-radius: 6px;
        padding: 3px 8px;
        font-size: 0.65rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 3px;
        margin-left: 6px;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        backdrop-filter: blur(8px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 
          0 2px 8px rgba(255, 107, 107, 0.3),
          0 1px 3px rgba(0, 0, 0, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.2);
        position: relative;
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        &:hover {
          background: linear-gradient(135deg, #ff7675 0%, #fd79a8 50%, #e84393 100%);
          border-color: rgba(255, 107, 107, 0.8);
          transform: scale(1.08) translateY(-1px);
          box-shadow: 
            0 4px 16px rgba(255, 107, 107, 0.4),
            0 2px 6px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          
          &::before {
            left: 100%;
          }
        }

        .mod-icon {
          font-size: 0.65rem;
          filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3));
        }
      }
    }

    h1 {
      font-size: 1.1rem;
      font-weight: 400;
      font-style: normal;
      color: white;
      opacity: 0.7;
    }

    .Card_UserName {
      font-size: 0.8rem;
      font-weight: 300;
      color: white;
      opacity: 0.5;
    }
  }

  .Card_level {
    z-index: 1;
    position: absolute;
    right: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 4px;
    min-width: 100px;
    max-width: 180px;

    span {
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 12px;
      border-radius: 12px;
      background: linear-gradient(135deg, rgba(33, 33, 37, 0.8), rgba(44, 44, 48, 0.6));
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(183, 251, 43, 0.2);
      font-size: 1rem;
      font-weight: 600;
      color: var(--main_color);
      text-shadow: 0 0 8px rgba(183, 251, 43, 0.3);
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
        background: linear-gradient(90deg, transparent, rgba(183, 251, 43, 0.1), transparent);
        transition: left 0.5s ease;
      }
      
      &:hover {
        transform: translateY(-2px);
        border-color: rgba(183, 251, 43, 0.4);
        box-shadow: 0 8px 25px rgba(183, 251, 43, 0.15);
        
        &::before {
          left: 100%;
        }
      }
    }
  }
`;

interface Profile {
  id: number;
  FullName: string;
  UserName: string;
  nickname: string;
  Rank: number;
  Level: number;
  img: string;
  IsUser: boolean;
  is_even: boolean;
  is_verified: boolean;
  setSelectedId: (id: number) => void;
  // Admission status fields
  accepted?: string | boolean;
  reason?: string | null;
  isvalidated?: string | boolean;
  cheating?: boolean;
}

const RankCard: FC<Profile & { forwardedRef: Ref<HTMLDivElement> }> = ({
  id,
  FullName,
  UserName,
  Rank,
  Level,
  img,
  setSelectedId,
  IsUser,
  is_verified,
  forwardedRef,
  is_even,
  nickname,
  accepted,
  reason,
  isvalidated,
  cheating
}) => {
  const { data: session } = useSession();

  const handleClick = () => {
    setSelectedId(id);
  };

  return (
    <StyledCard
      $rank={Rank}
      $avatar={img}
      onClick={handleClick}
      $is_user={IsUser}
      ref={forwardedRef}
      $is_even={is_even}
    >
      {/* <LinePatternSvg color={" rgba(183,251,43,0.1)"} /> */}

      <div className="Card_Rank">
        {Rank >= 1 && Rank <= 3 ? (
          <img
            className="Rank_icon"
            src={`/assets/icons/${Rank}.png`}
            alt={`Rank ${Rank}`}
          />
        ) : (
          <span>{Rank}</span>
        )}
      </div>
      <div className="Card_Avatar">
        {!img && (
          <svg
            width="76"
            height="20"
            viewBox="0 0 76 20"
            fill="var(--Par_grey)"
          >
            <path
              d="M2.8333 17.6623H5.92418V2.33766H2.31816V5.45455H0V1.49012e-07H8.75748V17.6623H11.8484V20H2.8333V17.6623Z"
              fill="var(--Par_grey)"
            ></path>
            <path
              d="M21.3785 17.6623H30.6512V10.9091H22.1513V8.57143H30.6512V2.33766H21.3785V0H33.4845V20H21.3785V17.6623Z"
              fill="var(--Par_grey)"
            ></path>
            <path
              d="M42.2419 17.6623H51.5146V10.9091H43.0147V8.57143H51.5146V2.33766H42.2419V0H54.3479V20H42.2419V17.6623Z"
              fill="var(--Par_grey)"
            ></path>
            <path
              d="M72.6355 2.33766H64.9084V7.27273H62.5902V0H75.2113V20H72.6355V2.33766Z"
              fill="var(--Par_grey)"
            ></path>
          </svg>
        )}
      </div>

      <div className="Card_Data">
        <h1 className="Card_FullName">
          {nickname ? nickname : FullName}
          {is_verified && <VerifiedIcon className="VerifiedIcon" />}
          {(UserName === 'azaki' || UserName === 'amezioun') && (
            <span className="ModBadge">
              <FaUserShield className="mod-icon" />
              MOD
            </span>
          )}
        </h1>
        <h2 className="Card_UserName">{UserName}</h2>
      </div>

      <div className="Card_level">
        <span>{Level.toFixed(2)}</span>
        {(accepted !== undefined || cheating !== undefined) && (
          <AdmissionStatus
            accepted={accepted || false}
            reason={reason || null}
            isvalidated={isvalidated || false}
            cheating={cheating || false}
            level={Level}
          />
        )}
      </div>
    </StyledCard>
  );
};

const ForwardedRankCard = forwardRef(
  (props: Profile, ref: Ref<HTMLDivElement>) => (
    <RankCard {...props} forwardedRef={ref} />
  )
);

ForwardedRankCard.displayName = "ForwardedRankCard";

export default ForwardedRankCard;
