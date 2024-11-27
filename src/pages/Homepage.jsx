import "../App.css";
import HomeHeader from "../components/homepage/HomeHeader";
import HomeGameCardGrid from "../components/homepage/HomeGameCardGrid";
import HomeCareer from "../components/homepage/HomeCareer";
import HomeBanner from "../components/homepage/HomeBanner";
import HomeAbout from "../components/homepage/HomeAbout";
import HomeOurGames from "../components/homepage/HomeOurGames";
import GetInTouch from "../components/homepage/GetInTouch";
import Footer  from "../components/common/Footer";

function Homepage() {
  return (
    <div className=" pb-12">
      <HomeBanner />
      <div className="max-w-7xl mx-6 lg:mx-auto lg:px-6">
        <HomeGameCardGrid />
        <HomeAbout/>
        <HomeOurGames/>
      </div>
      <div className="mt-10 lg:mt-52">
        <HomeCareer />
      </div>
      <GetInTouch/>
    </div>
  );
}

export default Homepage;

/*
  Todo
  1. Cross icon to be white
  2. Toggle visibility of header on scroll
*/
