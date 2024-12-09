import React from "react";
import { useParams } from "react-router-dom";
import gameData from "../../public/gameData";
import image from "../assets/images/games/kipon/kiponBannerMobile.jpg";

const Games = () => {
  const { gameTitle } = useParams();
  const game = gameData.find((gameData) => gameData.name === gameTitle);
  console.log(gameTitle);

  return (
    <div className="relative mb-16">
      <img className="w-full md:hidden" src={game.banner} alt="" />
      <img className="w-full hidden md:block" src={game.bannerDesktop} alt="" />
      <div className="text-center max-w-7xl mx-6 lg:mx-auto lg:px-6">
        <div className="bg-white shadow-md shadow-poinciana/10 rounded-xl text-start p-8 -mt-20 relative z-10 lg:absolute lg:top-64 lg:max-w-2xl">
          <div className="flex justify-start items-center gap-4">
            <img
              className="rounded-2xl border-4 shadow w-20"
              src={game.thumbnail}
              alt=""
            />
            <div>
              <p className="text-lg font-bold ">{game.name}</p>
              <p>{game.genre}</p>
            </div>
          </div>
          <p className="text-xl font-bold mb-4 lg:text-5xl text-midnight-velvet font-suez lg:my-12">{game.oneLineDescription}</p>
          <p>{game.detail}</p>
        </div>
        <div>
          <p className="my-10 text-2xl md:text-4xl text-midnight-velvet font-bold font-suez md:text-start md:my-20">Screenshots</p>
          <div className="flex justify-between gap-10">
          {game.screenshots.map((screenshot) => {
            return <img className="rounded-3xl my-1 w-1/2" src={screenshot} alt="" />;
          })}
          </div>
          
        </div>
        <div>
          <div className="md:flex items-center md:my-10 gap-6">
            <p className="my-10 text-3xl md:text-5xl font-suez font-bold md:order-2 text-midnight-velvet">
              Reviews
            </p>
            <div className="bg-white shadow shadow-poinciana/10 rounded-3xl py-6 px-12  mx-6">
              <div className="bg-poinciana flex items-center gap-3 ps-3 shadow rounded-full w-fit mx-auto p-1">
                <svg
                  fill="white"
                  preserveAspectRatio="none"
                  data-bbox="19 20.5 162 159.001"
                  viewBox="19 20.5 162 159.001"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="shape"
                  role="presentation"
                  aria-hidden="true"
                >
                  <g>
                    <path d="M169.256 69.284h-36.377c-5.085 0-9.591-3.268-11.154-8.09L111.154 28.59c-3.498-10.786-18.811-10.787-22.307 0L78.274 61.195a11.72 11.72 0 0 1-11.154 8.09H30.744c-11.255 0-16.041 14.273-7.048 21.017l27.002 20.248a11.657 11.657 0 0 1 4.073 13.026l-13.536 40.502c-3.527 10.552 8.338 19.58 17.623 13.411l34.637-23.013a11.755 11.755 0 0 1 13.004 0l34.637 23.013c9.285 6.17 21.15-2.86 17.623-13.411l-13.536-40.502a11.658 11.658 0 0 1 4.074-13.026l27.002-20.248c8.999-6.747 4.213-21.018-7.043-21.018z"></path>
                  </g>
                </svg>
                <p className="bg-white py-2 px-6 rounded-full">4.1 Rating</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
            {game.reviews.map((review) => {
              return (
                <div className=" border-t md:border md:grow md:text-center md:p-24  border-black pt-10 text-start ">
                  <p className="">{review.comment}</p>
                  <p className="font-bold text-xl mt-4">{review.user}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white shadow rounded-3xl py-6 px-12  mx-6 lg:max-w-xl lg:mx-auto">
            <p className="text-3xl font-bold font-suez lg:text-5xl text-midnight-velvet">Play Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
