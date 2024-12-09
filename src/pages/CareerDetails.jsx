import React from "react";
import { useParams } from "react-router-dom";
import jobs from "../../public/data";
import bg from "../assets/images/career/qa-bg.jpg";
import bgMobile from "../assets/images/career/careerBgMobile.jpg";

const CareerDetail = () => {
  const { jobRole } = useParams();
  const job = jobs.find((job) => job.position === jobRole); // Find the job that matches the role
  return (
    <div>
      <div className="relative pt-14 lg:pt-0">
        <img className="hidden lg:block" src={bg} alt="banner" />
        <img className="lg:hidden w-full " src={bgMobile} alt="banner" />

        <div className="absolute top-1/2 -translate-y-1/2 lg:top-1/4 lg:-translate-y-1/4 start-5 max-w-7xl lg:px-6 lg:start-1/2 lg:-translate-x-1/2 lg:max-w-7xl lg:w-full text-white">
          <p className="text-xl font-bold">Careers</p>
          <p className="text-3xl lg:text-5xl font-bold uppercase my-8 font-suez">
            {job.position}
          </p>
          <div>
            <p className="text-xl">Location: {job.location}</p>
            <p className="text-xl">Employment Type: {job.employment_type}</p>
          </div>
          <button className="my-8 py-4 px-8 bg-vanilla-pudding rounded-lg text-black">
            Apply Now
          </button>
        </div>
      </div>
      <div className="max-w-7xl lg:mx-auto pb-16 lg:-mt-80 relative z-10">
        <div className="lg:flex justify-center items-stretch">
          <div className="w-full lg:w-1/2 bg-poinciana px-6 py-12 lg:p-24 text-white">
            <p className="text-3xl font-bold">What you will do</p>
            <p className="mt-4 text-lg">
              {job.responsibilities}
              {job.short_description}
            </p>
          </div>
          <div className="w-full lg:w-1/2 bg-white px-6 py-12 lg:p-24 ">
            <p className="text-3xl font-bold">What you will do</p>
            <p className="mt-4 text-lg">{job.who_you_are}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;
