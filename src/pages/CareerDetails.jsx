import React from "react";
import { useParams } from "react-router-dom";
import jobs from "../../public/data";
import bg from "../assets/images/career/qa-bg.jpg";

const CareerDetail = () => {
  const { jobRole } = useParams();
  const job = jobs.find((job) => job.position === jobRole); // Find the job that matches the role
  return (
    <div>
      <div className="relative">
        <img src={bg} alt="banner" />
        <div className="absolute top-1/4 -translate-y-1/4 start-5 max-w-7xl lg:px-6 lg:start-1/2 lg:-translate-x-1/2 lg:max-w-7xl lg:w-full text-white">
          <p className="text-xl font-bold">Careers</p>
          <p className="text-5xl font-bold uppercase my-8 font-suez">{job.position}</p>
          <div>
            <p className="text-xl">Location: {job.location}</p>
            <p className="text-xl">Employment Type: {job.employment_type}</p>
          </div>
          <button className="my-8 py-4 px-8 bg-vanilla-pudding rounded-lg text-black">Apply Now</button>
        </div>
      </div>
      <div className="max-w-7xl lg:mx-auto pb-16 -mt-80 relative z-10">
        <div className="flex justify-center items-stretch">
          <div className="w-1/2 bg-poinciana p-24 text-white">
            <p className="text-3xl font-bold">What you will do</p>
            <p className="mt-4 text-lg">{job.responsibilities}{job.short_description}</p>
          </div>
          <div className="w-1/2 bg-white p-24 ">
            <p className="text-3xl font-bold">What you will do</p>
            <p className="mt-4 text-lg">{job.who_you_are}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;
