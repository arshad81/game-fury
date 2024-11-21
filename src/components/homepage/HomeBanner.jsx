import React from "react";
import { useState, useEffect } from "react";
import Banner from "../../assets/images/banner.jpg";
import BannerDesktop from "../../assets/images/banner-desktop.jpg";

const HomeBanner = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const horizontalOffset = scrollPosition * 0.3;
  return (
    <div className="relative h-80 lg:h-screen ">
      <img
        src={Banner}
        alt="Banner"
        className="absolute w-full h-full object-cover lg:hidden lg:h-auto"
      />
      <img
        src={BannerDesktop}
        alt="Banner"
        className="absolute w-full object-none hidden lg:block h-full"
        style={{ objectPosition: `${-horizontalOffset}px` }}
      />
      <div className="absolute top-1/2 -translate-y-1/2 start-5 max-w-7xl lg:px-6 lg:start-1/2 lg:-translate-x-1/2 lg:max-w-7xl lg:w-full">
        <p className="text-5xl lg:text-7xl font-bold font-suez text-midnight-velvet ">
          Made to Be Played
        </p>
        <p className="mt-5 lg:text-2xl lg:mt-3">
          The very best in mobile gaming
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
