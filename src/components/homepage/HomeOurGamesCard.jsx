import React from "react";
import thumbnail from "../../assets/images/homepage/kipon-thumbnail.jpg";

const HomeOurGamesCard = () => {
  return (
    <div className="bg-white max-w-96 rounded-3xl p-6 lg:p-12 shadow-xl shadow-poinciana/10">
      <div className="flex justify-start items-center gap-6">
        <img src={thumbnail} alt="Kipon" className="rounded-3xl border-white border-8 shadow-sm"/>
        <div>
          <p className="font-bold text-xl">Kipon</p>
          <p>casual-free</p>
        </div>
      </div>
      <p className="my-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quos.
        At, exercitationem. Odio nostrum quibusdam voluptas sunt optio veniam
        non magnam nobis? Repudiandae atque iste eius harum velit illum eaque!
      </p>
    </div>
  );
};

export default HomeOurGamesCard;
