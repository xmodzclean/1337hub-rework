"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
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
import LevelCalculator from "./compoents/LevelCalculator/LevelCalculator";
import { AdmissionProvider } from "@/contexts/AdmissionContext";

import _Tom from "../../../public/tom.png";
import Logtime from "./compoents/LogTime/Logtime";
import Stats from "./compoents/stats/Stats";
import { FaDiscord } from "react-icons/fa";
import Banner from "./compoents/Banner/Banner";

const Ranking: React.FC = () => {
  const { data: session } = useSession();
  const [Users, SetUsers] = useState<any[]>([]);
  const [SearchTerm, setSearchTerm] = useState<string>("");
  const [SelectedUser, SetSelectedUser] = useState<any>();
  // const [SelectedPromo, setSelectedPromo] = useState<number>(0);
  const [SelectedGender, setSelectedGender] = useState<string>("All");
  const [SelectedCampus, setSelectedCampus] = useState<number | null>(null);
  const [SelectedPromo, setSelectedPromo] = useState<number | null>(null);
  const [userDataLoaded, setUserDataLoaded] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useSessionEnd();

  const loggedInUserCardRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  // Create arrays with user's data first
  const orderedPromos = React.useMemo(() => {
    if (!userDataLoaded || SelectedPromo === null) return Promos;
    
    const userPromo = Promos.find(p => p.id === SelectedPromo);
    if (!userPromo) return Promos;
    
    const ordered = [userPromo, ...Promos.filter(p => p.id !== SelectedPromo)];
    console.log("Ordered promos:", ordered.map(p => p.Name));
    return ordered;
  }, [SelectedPromo, userDataLoaded]);

  const orderedCampuses = React.useMemo(() => {
    if (!userDataLoaded || SelectedCampus === null) return Campuses;
    
    const userCampus = Campuses.find(c => c.id === SelectedCampus);
    console.log("User campus found:", userCampus, "for SelectedCampus:", SelectedCampus);
    if (!userCampus) return Campuses;
    
    const ordered = [userCampus, ...Campuses.filter(c => c.id !== SelectedCampus)];
    console.log("Ordered campuses:", ordered.map(c => c.name));
    return ordered;
  }, [SelectedCampus, userDataLoaded]);

  // Set user's campus and year automatically when session loads
  useEffect(() => {
    if (session?.user && !userDataLoaded) {
      let campus = 75; // Default to Rabat
      let promo = 2; // Default to 2024
      
      // Set user's campus
      if (session.user.campus_id) {
        campus = session.user.campus_id;
        console.log("User campus_id from session:", session.user.campus_id);
      }
      
      // Set user's year based on start_year
      if (session.user.start_year) {
        const userYear = session.user.start_year;
        console.log("User start_year from session:", userYear);
        const matchingPromo = Promos.find(promo => 
          promo.Name === userYear || 
          promo.Name.includes(userYear) ||
          promo.start_date.includes(userYear)
        );
        
        if (matchingPromo) {
          promo = matchingPromo.id;
          console.log("Matched promo:", matchingPromo);
        }
      }
      
      console.log("Setting campus to:", campus, "and promo to:", promo);
      setSelectedCampus(campus);
      setSelectedPromo(promo);
      setUserDataLoaded(true);
    }
  }, [session, userDataLoaded]);


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
    console.log("handlePromoChange called with:", value);
    SetUsers([]);
    setSearchTerm("");
    setSelectedGender("All");
    const promoId = parseInt(value, 10);
    setSelectedPromo(promoId);
    setHasUserInteracted(true); // Mark that user has interacted
    console.log("Selected Promo:", promoId, "hasUserInteracted set to true");
    window.scrollTo(0, 0);
  };

  const fetchUsers = async ({ pageParam = 1 }) => {
    const promo = Promos.find((promo) => promo.id === SelectedPromo);
    console.log("🔥 fetchUsers called! SelectedPromo:", SelectedPromo, "Promo:", promo, "Campus:", SelectedCampus);
    
    // Check if this is a pool selection
    const isPool = promo?.Name?.includes("POOL");
    console.log("🔥 isPool:", isPool);
    
    if (isPool) {
      // For pool selections, use the poolers API
      console.log("🔥 Pool selection detected:", promo?.Name);
      
      // Map campus ID to campus name for poolers API
      const campusName = SelectedCampus === 75 ? 'rabat' : 
                        SelectedCampus === 21 ? 'benguerir' : 
                        SelectedCampus === 16 ? 'khouribga' : 
                        SelectedCampus === 55 ? 'tetouan' : 'benguerir';
      
      // Map pool name to pool number
      const poolNumber = promo?.Name?.includes("JULY") ? "7" : "8";
      
      const url = `/api/poolers?campus=${campusName}&pool=${poolNumber}`;
      console.log("🔥 Pool API URL:", url);
      
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch Pool Students.");
        }

        const data = await response.json();
        
        // Transform pool data to match regular student data structure
        const transformedData = data.map((pooler: any, index: number) => {
          // Split fullname into first_name and last_name
          const nameParts = pooler.fullname?.split(' ') || ['', ''];
          const firstName = nameParts[0] || '';
          const lastName = nameParts.slice(1).join(' ') || '';
          
          return {
            user: {
              id: pooler.login, // Use login as ID since pools might not have user ID
              login: pooler.login,
              first_name: firstName,
              last_name: lastName,
              email: pooler.email,
              usual_full_name: pooler.fullname,
              image: {
                versions: {
                  small: pooler.image || '/default-avatar.png'
                }
              }
            },
            level: pooler.level,
            originalRank: index + 1,
            Gender: 'unknown', // Pool data doesn't include gender
            verified: false,
            nickname: null,
            banner_url: null
          };
        });
        
        return {
          data: transformedData,
          nextPage: undefined, // Poolers API doesn't use pagination
        };
      } catch (error) {
        toast.error("Error fetching Pool Students, trying again...", { icon: false });
        throw error;
      }
    } else {
      // Regular student fetching for non-pool selections
      const url = `/api/students?started_date=${promo?.start_date}&campus_id=${SelectedCampus}&page=${pageParam}&alumni=true`;
      console.log("Regular API URL:", url);
      
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
    }
  };

  const handleInvite = () => {
    window.open("https://discord.gg/5cZfS8djyg");
  };

  const queryEnabled = session !== undefined &&
    SelectedPromo !== null &&
    SelectedCampus !== null &&
    userDataLoaded &&
    hasUserInteracted;

  // Add isPool to queryKey to ensure different cache for pool vs regular students
  const promo = Promos.find((p) => p.id === SelectedPromo);
  const isPool = promo?.Name?.includes("POOL");

  console.log("Query enabled:", queryEnabled, {
    session: !!session,
    SelectedPromo,
    SelectedCampus,
    userDataLoaded,
    hasUserInteracted,
    isPool
  });

  const { data, status, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useInfiniteQuery({
      queryKey: ["users", SelectedPromo, SelectedCampus, session?.accessToken, isPool ? "pool" : "regular"],
      queryFn: fetchUsers,
      getNextPageParam: (lastPage, allPages) => lastPage.nextPage,
      initialPageParam: 1,
      retry: 1,
      refetchOnWindowFocus: false,
      enabled: queryEnabled,
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
    <AdmissionProvider>
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
                    data={orderedPromos}
                    getValue={(item) => item.id.toString()}
                    renderItem={(item) => item.Name}
                    onChange={handlePromoChange}
                    disabled={!userDataLoaded}
                  />
                  <CustomDropDown
                    data={orderedCampuses}
                    getValue={(item) => item.id.toString()}
                    renderItem={(item) => item.name}
                    disabled={!userDataLoaded}
                    onChange={(value) => {
                      setSelectedCampus(Number(value));
                      SetUsers([]);
                      setSearchTerm("");
                      setSelectedGender("All");
                      setHasUserInteracted(true); // Mark that user has interacted
                      window.scrollTo(0, 0);
                    }}
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
              {!userDataLoaded || (!hasUserInteracted && userDataLoaded) ? (
                <div className="LoadingMessage" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '40px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '1.1rem'
                }}>
                  {!userDataLoaded && session ? (
                    <span>🔍 Loading your campus and year data...</span>
                  ) : !session ? (
                    <span>🔐 Please log in to view leaderboard</span>
                  ) : !hasUserInteracted ? (
                    <span>📊 Select a campus and year to view leaderboard</span>
                  ) : (
                    <span>🔄 Loading...</span>
                  )}
                </div>
              ) : isLoading || isFetching || status === "pending" || !Users[0] ? (
                <div className="LoadingMessage" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '40px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '1.1rem'
                }}>
                  {isFetching ? (
                    <span>🔄 Loading students...</span>
                  ) : (
                    <div className="Skeletons">
                      {Array.from({ length: 15 }).map((_, key) => (
                        <Skeleton
                          animation={`${key % 2 ? "pulse" : "wave"}`}
                          variant="rectangular"
                          width="100%"
                          height="65px"
                          className="CardSkl"
                          key={key}
                        />
                      ))}
                    </div>
                  )}
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
          <Banner /> 
          <Profile
            Promo={Promos.find((promo) => promo.id === SelectedPromo) || Promos[0]}
            list_is_loading={!Users[0]}
            StudentData={SelectedUser}
          />
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
    </AdmissionProvider>
  );
};

export default Ranking;
