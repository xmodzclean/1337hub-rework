import React, { useEffect, useState } from "react";
import { StyledBanner, BannerTrack } from "./styled.banner";

const Banner = () => {
  const [isClient, setIsClient] = useState(false);

  const bannerItems = [
    { type: "image", src: "https://media.tenor.com/MKl7Mp_TuN4AAAAM/rocky-rocky-training.gif"},
    { type: "text", value: "ッ Welcome! Your memes, jokes, and quotes from Discord could slide right here. Let the games begin!" },
    { type: "image", src: "/lfokaha/kira.gif" },
    { type: "image", src: "/lfokaha/kiraskot.gif" },
    { type: "image", src: "/lfokaha/empty_mind.png" },
    // { type: "image", src: "/lfokaha/feedback.png" },
    { type: "image", src: "https://media1.tenor.com/m/MzB_8oSz67AAAAAC/mostad3afon-dance.gif"},
    { type: "image", src: "https://media.discordapp.net/attachments/1070659312705343548/1231275185953575133/image.png?ex=689cb860&is=689b66e0&hm=b855989e9085982bf028e440325e475e7404d5f58e2ff7dd9c53b15aa07aacbf&=&format=webp&quality=lossless"},
    { type: "image", src: "https://cdn.discordapp.com/attachments/1070659312705343548/1107014235353010206/IMG_2351.jpg?ex=689cdbd9&is=689b8a59&hm=9ccf6cd591169cca02a3a0c394c249cda9706340ac553fa2b90743cde47f606f&"},
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <StyledBanner>
      <BannerTrack>
        {[...bannerItems, ...bannerItems].map((item, idx) => (
          <div key={idx} className="banner-item">
            {item.type === "text" ? (
              <span>{item.value}</span>
            ) : (
              <img src={item.src} alt="" />
            )}
            <div className=""/>
          </div>
        ))}
      </BannerTrack>
    </StyledBanner>
  );
};

export default Banner;
