import React from "react";
import googlePlay from "../../assets/images/homepage/Google.png";

const Footer = () => {
  return (
    <div className=" px-4">
      <h1 className="bg-poinciana text-white font-cursive w-fit px-6 pb-3 pt-2 mx-auto mt-5 rounded-b-lg  text-3xl lg:-mt-16 relative z-10">
        Game Fury
      </h1>
      <p className="my-5 text-center text-xl lg:text-2xl font-semibold text-midnight-velvet">
        An Immersive Gaming Experience
      </p>
      <div className="h-px bg-midnight-velvet my-12 w-full"></div>
      <div className="lg:flex lg:justify-between">
        <div className="my-6">
          <p className="font-bold text-lg lg:text-xl my-1 text-midnight-velvet lg:mb-6">Contact</p>
          <p className="my-1 text-gray-500">info@mysite.com</p>
          <p className="my-1 text-gray-500">Tel:12345678</p>
          <p className="my-1 text-gray-500">500 terry street</p>
          <p className="my-1 text-gray-500">San Fransico, CA 862546</p>
        </div>
        <div className="mt-6 flex justify-start lg:justify-evenly lg:flex-grow gap-20">
          <div className="">
            <p className="font-bold text-lg lg:text-xl my-1 text-midnight-velvet lg:mb-6">
              Navigation
            </p>
            <p className="my-1 text-gray-500">Games</p>
            <p className="my-1 text-gray-500">Careers</p>
            <p className="my-1 text-gray-500">About</p>
            <p className="my-1 text-gray-500">Contacts</p>
          </div>
          <div className="">
            <p className="font-bold text-lg lg:text-xl my-1 text-midnight-velvet lg:mb-6">
              Social
            </p>
            <p className="my-1 text-gray-500">Instagram</p>
            <p className="my-1 text-gray-500">Twitter</p>
            <p className="my-1 text-gray-500">Facebook</p>
          </div>
        </div>
        <div className="mt-6">
          <p className="font-bold text-lg lg:text-xl my-1 text-midnight-velvet lg:mb-6">
            Find Us On
          </p>
          <img src={googlePlay} alt="" className="mt-3 pb-3" />
        </div>
      </div>
      <div className="h-px bg-midnight-velvet mt-12 w-full"></div>
    </div>
  );
};

export default Footer;
