"use client";

import React, { useState } from "react";
import styled from "styled-components";

import { IconType } from "react-icons";
import {
  FaTrophy,
  FaIdCard,
  FaSignOutAlt,
  FaSkull,
  FaUserSecret,
  FaEllipsisV,
  FaRocket,
  FaWindowClose,
  FaGraduationCap,
} from "react-icons/fa";

import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import useMobileDetection from "@/hooks/useMobile";

import _13bg from "../../../public/logos/13bg.png";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "var(--main_color)",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: "",
    fontSize: 11,
    padding: "5px 10px",
    width: "auto",
    height: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "var(--main_font)",
  },
}));

const List: {
  id: number;
  name: string;
  desc: string;
  icon: IconType;
  path: string;
  is_first: boolean;
  is_last: boolean;
  is_underdev : boolean
}[] = [
  {
    id: 0,
    name: "LeaderBoard",
    desc: "",
    icon: FaTrophy,
    is_first: true,
    is_last: false,
    path: "/ranking",
    is_underdev : false
  },
  {
    id: 1,
    name: "BlackHole",
    desc: "",
    icon: FaSkull,
    is_first: false,
    is_last: false,
    path: "/blackhole",
    is_underdev : false
  },
  {
    id: 2,
    name: "Digital Badge (In Progress)",
    desc: "",
    icon: FaIdCard,
    is_first: false,
    is_last: false,
    path: "/badge",
    is_underdev : true
  },
  {
    id: 3,
    name: "Anonymous Feedback (In Progress)",
    desc: "",
    icon: FaUserSecret,
    is_first: false,
    is_last: false,
    path: "/feedback",
    is_underdev : true
  },
  {
    id: 4,
    name: "42 Improved Intra V3 extension (In Progress)",
    desc: "",
    icon: FaRocket,
    is_first: false,
    is_last: false,
    path: "/extension",
    is_underdev : true
  },
  {
    id: 5,
    name: "Sign out",
    desc: "",
    icon: FaSignOutAlt,
    is_first: false,
    is_last: true,
    path: "",
    is_underdev : false
  },
];

interface StyledSideBarProps {
  $is_open: boolean;
}
const StyledSideBar = styled.div<StyledSideBarProps>`
  width: 68px;
  height: 100%;
  position: fixed;
  /* border : 1px solid white; */
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px 3px;
  z-index : 99999;
  @media only screen and (max-width: 767px) {
    /* display : none; */
    z-index: 999;
  }

  .LogoPlaceHolder {
    width: 100%;
    height: 70px;
    background-color: var(--sec_background);
    border-radius: 3px;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 100%,
      20px 100%,
      0% calc(100% - 20px)
    );
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-in-out;
    color: white;
    &:hover {
      background-color: var(--main_color);
    }
    .MainLogo{
      width :100%;
    }
    @media only screen and (max-width: 767px) {
      height: 40px;
      width : 40px;
      /* display: none; */
    }
  }
  .ListBar {
    width: 100%;
    height: 100%;
    background-color: var(--sec_background);
    border-radius: 3px;
    clip-path: polygon(
      0% 0%,
      calc(100% - 20px) 0%,
      100% 20px,
      100% 100%,
      20px 100%,
      0% calc(100% - 20px)
    );
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    @media only screen and (max-width: 767px) {
      /* display : none; */
      margin-left: ${(props) => (props.$is_open ? "0" : "-200%")};
      z-index: 99999;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      /* left : -20%; */
    }
  }
`;

interface StyleSideElement {
  $is_first: boolean;
  $is_last: boolean;
  $is_active: boolean;
  $is_under_dev : boolean;
}
const StyleSideElement = styled.div<StyleSideElement>`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  cursor: pointer;
  clip-path: ${(props) =>
    props.$is_first
      ? "polygon(0% 0%, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 0% 100%)"
      : props.$is_last
      ? "polygon(0% 0%, 100% 0%, 100% 100%, 20px 100%, 0% calc(100% - 20px));"
      : ""};
  margin-top: ${(props) => props.$is_last && "auto"};
  color: ${(props) =>
    props.$is_active ? "var(--main_color_dark)" 
    : props.$is_under_dev ? "rgba(93, 189, 75, 0.3)" 
    : "var(--main_color)"};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &:hover {
    opacity: 1;
    color: var(--main_color_dark);
    &:after {
      opacity: 1;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--main_color);
    z-index: -1;
    opacity: ${(props) => (props.$is_active ? "1" : "0.2")};
    transition: 0.2s ease-in-out;
  }
`;
interface SideElementProps {
  is_first: boolean;
  is_last: boolean;
  title: string;
  is_active: boolean;
  is_under_dev : boolean
  path: string;
  icon: IconType;
  setIsOpen : (value : boolean) => void;
}
const SideBarElement: React.FC<SideElementProps> = ({
  is_first,
  is_last,
  title,
  is_active,
  is_under_dev,
  path,
  icon: Icon,
  setIsOpen
}) => {
  const { data: session } = useSession();
  const Handle_logout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <LightTooltip
      title={title}
      placement="right-start"
      disableInteractive
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [5, -1],
              },
            },
          ],
        },
      }}
    >
      <Link href={path} style={{ marginTop: `${is_last && "auto"}` }}>
        <StyleSideElement
          $is_first={is_first}
          $is_last={is_last}
          $is_active={is_active}
          $is_under_dev = {is_under_dev}
          onClick={() => {
            if (is_last) Handle_logout();
            setIsOpen(false);
          }}
        >
          <Icon size={25} />
        </StyleSideElement>
      </Link>
    </LightTooltip>
  );
};

const SideBar = () => {
  const path = usePathname();
  const [IsOpen, setIsOpen] = useState(false);
  const isMobile = useMobileDetection();

  const ToggleSideBar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledSideBar $is_open={IsOpen}>
      <Link href={!isMobile ? '/' : ''}>
        <div
          onClick={ToggleSideBar}
          className="LogoPlaceHolder"
          style={{ backgroundColor: path == "/" ? "var(--main_color)" : "" }}
        >
          {!isMobile ? (
            <img src={"/13HUB.png"} className="MainLogo"/>
          ) : IsOpen ? (
            <FaWindowClose size={20} />
          ) : (
            <FaEllipsisV size={20} />
          )}
        </div>
      </Link>

      <div className="ListBar">
        {List.map((ListItem, key) => {
          return (
            <SideBarElement
              key={key}
              is_first={ListItem.is_first}
              icon={ListItem.icon}
              is_last={ListItem.is_last}
              title={ListItem.name}
              is_active={path === ListItem.path}
              path={ListItem.path}
              setIsOpen={setIsOpen}
              is_under_dev = {ListItem.is_underdev}
            />
          );
        })}
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
