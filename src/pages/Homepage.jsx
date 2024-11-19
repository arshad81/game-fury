import "../App.css";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Banner from "../assets/images/banner.jpg";
import BannerDesktop from "../assets/images/banner-desktop.jpg";

function Homepage() {
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

  const horizontalOffset = scrollPosition * 0.3; // Adjust speed by changing multiplier

  return (
    <>
      <Header />
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
        <div className="absolute top-1/2 -translate-y-1/2 start-5 max-w-7xl w-full lg:start-1/2 lg:-translate-x-1/2">
          <p className="text-5xl lg:text-7xl font-bold font-suez text-midnight-velvet ">
            Made to Be Played
          </p>
          <p className="mt-5 lg:text-2xl lg:mt-3">
            The very best in mobile gaming
          </p>
        </div>
      </div>
      <div style={{ height: "1000px" }}></div>
    </>
  );
}

export default Homepage;
