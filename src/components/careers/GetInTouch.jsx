import React from "react";
import GetInTouchBg from "../../assets/images/career/getInTouchBg.jpg";

const GetInTouch = () => {
    return(
        <div className="relative text-center text-white">
            <img className="h-72 object-cover lg:h-auto lg:w-full" src={GetInTouchBg} alt="" />
            <div className="absolute z-10 w-full px-4 top-1/2 start-1/2 -translate-x-1/2 lg:start-0 lg:translate-x-0 -translate-y-1/2 lg:text-start lg:ps-24">
                <p className="text-xl lg:text-2xl lg:font-bold">Didn’t Find the Position You’re Looking For? </p>
                <p className="text-2xl lg:text-5xl font-suez font-bold my-4 lg:my-8">Send Us Your CV</p>\
                <button className="bg-vanilla-pudding px-6 py-3 text-black rounded-lg">Apply Now</button>
            </div>
        </div>
    )
}

export default GetInTouch;