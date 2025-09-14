"use client";
import React, { useState, useEffect, useCallback, useRef, Suspense, lazy } from "react";
import { StyledRanking } from "./Styled.ranking";
// Components
import Card from "./compoents/RankCard";
import EnhancedRankCard from "./compoents/EnhancedRankCard";
import CustomDropDown from "@/components/drop_down/dropdown";
import Profile from "./compoents/profile";
import { useSession } from "next-auth/react";
import { Skeleton } from "@mui/material";

// Data
import { Campuses, Filters } from "@/data/Campuses";
import { Promos } from "@/data/Promos";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSessionEnd from "@/hooks/useSessionEnd";

// Lazy load heavy components
const LevelCalculator = lazy(() => import("./compoents/LevelCalculator/LevelCalculator"));
const Logtime = lazy(() => import("./compoents/LogTime/Logtime"));
const Stats = lazy(() => import("./compoents/stats/Stats"));
const Banner = lazy(() => import("./compoents/Banner/Banner"));

// Icons - load only what we need
import { FaDiscord } from "react-icons/fa";

const Ranking: React.FC = () => {
  const { data: session } = useSession();
  const [Users, SetUsers] = useState<any[]>([]);
  const [SearchTerm, setSearchTerm] = useState<string>("");
  const [SelectedUser, SetSelectedUser] = useState<any>();
  const [SelectedGender, setSelectedGender] = useState<string>("All");

  useSessionEnd();

  const loggedInUserCardRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  // Initialize with null to prevent loading data until user session is available
  const [SelectedCampus, setSelectedCampus] = useState<number | null>(null);
  const [SelectedPromo, setSelectedPromo] = useState<number | null>(null);
  
  // Track if user has manually changed selections
  const [hasUserManuallyChanged, setHasUserManuallyChanged] = useState(false);

  // Auto-set campus and promo based on user's session data (only once when session loads)
  useEffect(() => {
    if (session?.user && !hasUserManuallyChanged) {
      // Set campus based on user's campus_id, fallback to Rabat (75) if not available
      const userCampus = session.user.campus_id || 75;
      setSelectedCampus(userCampus);

      // Determine promo based on user's start year, fallback to first promo if not found
      let userPromo = Promos[0].id; // Default fallback
      if (session.user.start_year) {
        const startYear = new Date(session.user.start_year).getFullYear();
        const promoForYear = Promos.find(promo => promo.Name === startYear.toString());
        if (promoForYear) {
          userPromo = promoForYear.id;
        }
      }
      setSelectedPromo(userPromo);
    }
  }, [session, hasUserManuallyChanged]);


  const lastUserRef = useCallback(
    (node: HTMLSpanElement) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [Users, session]
  );

  const handlePromoChange = (value: string) => {
    SetUsers([]);
    setSelectedGender("All");
    const promoId = parseInt(value, 10);
    setSelectedPromo(promoId);
    setHasUserManuallyChanged(true); // Mark as manually changed
    if (process.env.NODE_ENV === 'development') {
      console.log("Selected Promo changed to:", promoId);
    }
    window.scrollTo(0, 0);
  };

  const fetchUsers = async ({ pageParam = 1 }) => {
    // Return early if campus or promo is not set
    if (SelectedCampus === null || SelectedPromo === null) {
      return { data: [], nextPage: undefined };
    }

    const promo = Promos.find((promo) => promo.id === SelectedPromo);
    if (process.env.NODE_ENV === 'development') {
      console.log("SelectedPromo:", SelectedPromo, "Promo:", promo, "Campus:", SelectedCampus);
    }
    const url = `/api/students?started_date=${promo?.start_date}&campus_id=${SelectedCampus}&page=${pageParam}&alumni=true`;
    if (process.env.NODE_ENV === 'development') {
      console.log("API URL:", url);
    }
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch Students.");
      }

      const data = await response.json();
      return {
        data: data,
        nextPage: data.length > 0 ? pageParam + 1 : undefined,
      };
    } catch (error) {
      toast.error("Error fetching Students, trying again...", { icon: false });
      throw error;
    }
  };

  const handleInvite = () => {
    window.open("https://discord.gg/5cZfS8djyg");
  };

  const { data, status, fetchNextPage, hasNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["users", SelectedPromo, SelectedCampus, session?.accessToken],
      queryFn: fetchUsers,
      getNextPageParam: (lastPage, allPages) => lastPage.nextPage,
      initialPageParam: 1,
      retry: 2,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      enabled:
        session !== undefined &&
        SelectedPromo !== undefined &&
        SelectedPromo !== null &&
        SelectedCampus !== undefined &&
        SelectedCampus !== null,
    });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const scrollToMe = () => {
    // Scroll to the logged-in user's card if the ref exists
    if (loggedInUserCardRef.current) {
      loggedInUserCardRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      toast.error(
        "📋 You are not on the list. ensure that you have loaded all students or selected your promo.",
        {
          icon: false,
        }
      );
    }
  };

const updateSelectedUserById = (userId: number) => {
  const selectedUser = Users.find((user) => user.user.id === userId);
  if (selectedUser) {
    SetSelectedUser(selectedUser);
  }
};

  useEffect(() => {
    
    if (data && session?.accessToken) {
      const newUsers = data.pages.flatMap((page) => page.data);

      const filteredUsers = newUsers.filter((user) => {
        const matchesGender =
          SelectedGender === "All" || user.Gender === SelectedGender;
        const matchesSearchTerm =
          SearchTerm === "" ||
          user.user?.usual_full_name
            ?.toLowerCase()
            .includes(SearchTerm.toLowerCase()) ||
          user.user?.login?.toLowerCase().includes(SearchTerm.toLowerCase()) ||
          user.nickname?.toLowerCase().includes(SearchTerm.toLowerCase());
        return matchesGender && matchesSearchTerm;
      });

      SetSelectedUser(filteredUsers[0]);
      SetUsers(filteredUsers);
    }
  }, [data, session, SelectedGender, SearchTerm]);


  return (
    <StyledRanking>
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
        theme="light"
        className="foo"
      />

      <div className="Container">
        <div className="LeaderBoardContainer">
          <div className="Ranking">
            <div className="Options">
              <div className="Filters">
                <div className="Select_container">
                  <CustomDropDown
                    data={Promos}
                    getValue={(item) => item.id.toString()}
                    renderItem={(item) => item.Name}
                    onChange={handlePromoChange}
                    value={SelectedPromo?.toString()}
                  />
                  <CustomDropDown
                    data={Campuses}
                    getValue={(item) => item.id.toString()}
                    renderItem={(item) => item.name}
                    onChange={(value) => {
                      setSelectedCampus(Number(value));
                      setHasUserManuallyChanged(true); // Mark as manually changed
                      SetUsers([]);
                      window.scrollTo(0, 0);
                    }}
                    value={SelectedCampus?.toString()}
                  />
                  {/* </div> */}
                  {/* <div className="HideIt"> */}
                  <CustomDropDown
                    data={Filters}
                    getValue={(item) => item.id.toString()}
                    renderItem={(item) => `${item.name}`}
                    onChange={() => {}}
                    // disabled
                  />
                  {/* </div> */}
                </div>
                <div className="Other_filters">
                  <div className="SearchUser">
                    <input
                      placeholder="Search User :"
                      // value={SearchTerm}
                      onChange={handleSearchChange}
                    ></input>
                  </div>
                  <div className="GenderFilter">
                    <div
                      className={`Male ${
                        SelectedGender === "male" && "selected"
                      }`}
                      onClick={() => setSelectedGender("male")}
                    >
                      <span className="gender_type">Male</span>
                    </div>
                    <div className="devider" />
                    <div
                      className={`Female ${
                        SelectedGender === "female" && "selected"
                      }`}
                      onClick={() => setSelectedGender("female")}
                    >
                      <span className="gender_type">Female</span>
                    </div>
                    <div className="devider" />
                    <div
                      className={`All ${
                        SelectedGender === "All" && "selected"
                      }`}
                      onClick={() => setSelectedGender("All")}
                    >
                      <span className="gender_type">All</span>
                    </div>
                  </div>
                  
                  <button className="ToMeButton" onClick={scrollToMe}>
                    Me
                  </button>
                </div>
              </div>
            </div>

            <div className="Profiles_container">
              {isLoading || status === "pending" || !Users[0] ? (
                <div className="Skeletons">
                  {Array.from({ length: 15 }).map((_, key) => (
                    <Skeleton
                      animation={`${key % 2 ? "pulse" : "wave"}`}
                      variant="rectangular"
                      width="100%"
                      height="65px"
                      className="CardSkl"
                      key={key}
                      sx={{
                        bgcolor: 'rgba(44, 44, 48, 0.8)',
                        borderRadius: '8px',
                        marginBottom: '6px',
                        '&::after': {
                          background: 'linear-gradient(90deg, transparent, rgba(183, 251, 43, 0.1), transparent)',
                        }
                      }}
                    />
                  ))}
                </div>
              ) : Users ? (
                <>
                  {Users.map((User: any, key: number) => {
                    if (!User || !User.user) return null;
                    // if (User.Gender === "unknown") console.log(User);

                    return (
                      <EnhancedRankCard
                        id={User.user.id}
                        FullName={User.user.usual_full_name}
                        nickname={User.nickname}
                        Level={User.level}
                        Rank={User.originalRank}
                        UserName={User.user.login}
                        img={User.user.image.versions.small}
                        key={key}
                        setSelectedId={updateSelectedUserById}
                        IsUser={User.user.email === session?.user?.email}
                        ref={
                          User.user.email === session?.user?.email
                            ? loggedInUserCardRef
                            : null
                        }
                        is_even={!(key % 2)}
                        is_verified={User.verified}
                      />
                    );
                  })}
                  <span
                    ref={lastUserRef}
                    className={`FetchMore ${hasNextPage && "Animated"}`}
                  >
                    {hasNextPage ? "Fetching more ..." : "No More Users."}
                  </span>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="ProfileContainer">
          <Suspense fallback={<div style={{ height: '100px', background: 'rgba(33, 33, 37, 0.6)', borderRadius: '12px', marginBottom: '20px' }} />}>
            <Banner />
          </Suspense>
          {SelectedPromo !== null ? (
            <Profile
              Promo={Promos.find(promo => promo.id === SelectedPromo) || Promos[0]}
              list_is_loading={!Users[0]}
              StudentData={SelectedUser}
            />
          ) : (
            <div style={{ 
              padding: '30px', 
              color: 'rgba(255, 255, 255, 0.7)', 
              textAlign: 'center',
              background: 'rgba(33, 33, 37, 0.6)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '3px solid rgba(183, 251, 43, 0.3)',
                borderTop: '3px solid var(--main_color)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}></div>
              <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                Loading your personalized data...
              </span>
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          )}
          {/* <Profile
            Promo={Promos.find((promo) => promo.id === SelectedPromo)}
            list_is_loading={!Users[0]}
            StudentData={SelectedUser}
          /> */}
          {/* <Stats /> */}
          {/* <LevelCalculator user_level={Number(session?.user.user_level) || 0} /> */}
          {/* <Logtime /> */}
          {/* <div className="_13Hub">
            <h1 className="Header">
              join <img src="/13HUB.png" className="_13HubLogo" />
            </h1>
            <span>Meet others. Share the journey. Go further, together.</span>
            <button onClick={handleInvite}
             style={{
              cursor: 'pointer',
              zIndex: 2}}>
              <FaDiscord />
              Join
            </button>
          </div> */}
        </div>
      </div>
    </StyledRanking>
  );
};

export default Ranking;
