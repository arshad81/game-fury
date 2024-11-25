import React from "react";
import ourGamesImage from "../../assets/images/homepage/homepage-our-games.png";
import HomeOurGamesCard from "./HomeOurGamesCard";
import ourImages from "../../assets/images/homepage/our-games.png";

const HomeOurGames = () => {
  return (
    <div className="mt-48">
      <p className="font-suez text-3xl lg:text-5xl my-8 lg:leading-[4rem] text-center">
        Our Games
      </p>
      <div className="relative mt-10">
        <img src={ourGamesImage} alt="" />
        <div className="relative lg:absolute top-0">
            <HomeOurGamesCard/>
        </div>
        <div className="relative lg:absolute top-0 end-0 my-6 lg:my-0">
            <HomeOurGamesCard/>
        </div>
        <div className="relative lg:absolute bottom-0">
            <HomeOurGamesCard/>
        </div>
        <img src={ourImages} alt="" className="mx-auto my-6 lg:absolute lg:bottom-0 lg:end-0 lg:my-0" />
      </div>
    </div>
  );
};

export default HomeOurGames;
