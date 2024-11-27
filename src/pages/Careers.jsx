import React from "react";
import JobOpenings from "../components/careers/JobOpenings";
import GetInTouch from "../components/careers/GetInTouch";

const Career = () => {
  return (
    <>
      <div className="max-w-7xl lg:mx-auto pt-16">
        <div className="my-12 mx-6 lg:my-24 text-midnight-velvet lg:w-2/3">
          <p className="text-lg lg:text-xl font-bold">Help Us change the Way People Play</p>
          <p className="my-4 lg:my-8 text-3xl lg:text-5xl font-bold font-suez">We're Hiring</p>
          <p className="text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            distinctio consequuntur nesciunt, ex aut tempore fuga dignissimos
            eius quae officiis beatae. Aliquid at voluptatem excepturi
            perferendis aspernatur facere dignissimos harum?
          </p>
        </div>
        <JobOpenings/>
        <GetInTouch/>
      </div>
    </>
  );
};

export default Career;
