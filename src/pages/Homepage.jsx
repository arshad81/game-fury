import "../App.css";
import HomeHeader from "../components/homepage/HomeHeader";
import HomeGameCardGrid from "../components/homepage/HomeGameCardGrid";
import HomeCareer from "../components/homepage/HomeCareer";
import HomeBanner from "../components/homepage/HomeBanner";
import HomeAbout from "../components/homepage/HomeAbout";

function Homepage() {
  return (
    <>
      <HomeHeader />
      <HomeBanner />
      <div className="max-w-7xl mx-6 lg:mx-auto lg:px-6">
        <HomeGameCardGrid />
        <HomeAbout/>
      </div>
      <HomeCareer />
      <div style={{ height: "1000px" }}></div>
    </>
  );
}

export default Homepage;

/*
  Todo
  1. Cross icon to be white
  2. Toggle visibility of header on scroll
*/
