import React from "react";
import GetInTouchBg from "../../assets/images/homepage/getInTouchBg.jpg";
import GetInTouchLg from "../../assets/images/homepage/getInTouchLg.jpg";

const GetInTouch = () => {
  return (
    <div className="relative">
      <img src={GetInTouchBg} alt="contact us image" className="lg:hidden" />
      <img
        src={GetInTouchLg}
        alt="contact us image"
        className="hidden lg:block"
      />
      <div className="absolute z-10 top-6 w-full lg:-top-1/4 ">
        <div className="lg:flex items-end lg:max-w-7xl w-full mx-auto">
          <div className="relative max-w-7xl mx-auto w-full">
            <div className="mx-6 p-6  bg-white rounded-xl lg:w-1/2">
              <p className="text-midnight-velvet text-2xl font-bold">
                Get in Touch
              </p>
              <p className="text-midnight-velvet mt-6">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet
              </p>
              <form className="">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-medium text-midnight-velvet mt-6"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full mt-2 p-3 border border-black rounded-lg focus:outline-none focus:ring focus:ring-transparent"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-medium text-midnight-velvet mt-6"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full mt-2 p-3 border border-black rounded-lg focus:outline-none focus:ring focus:ring-transparent"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-medium text-midnight-velvet mt-6"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Write your message"
                    className="w-full mt-2 p-3 border border-black rounded-lg focus:outline-none focus:ring focus:ring-transparent"
                  ></textarea>
                </div>

                {/* Done Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full mt-6 bg-midnight-velvet text-white py-3 px-6 rounded-lg font-semibold "
                  >
                    Done
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mx-6 p-6 bg-poinciana rounded-xl mt-6 text-white">
            <p className="text-2xl font-bold">Subscribe to our news letter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
