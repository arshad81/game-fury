import React from "react";
import careerBg from "../../assets/images/career-bg.jpg"
import joinOurTeam from "../../assets/images/homepage/joinOurTeam.png"

const Career = () =>{
    return(
        <div className="relative text-white">
            <img src={careerBg} alt="" className="h-96 lg:h-full w-full object-cover"/>
            <div className="absolute h-full top-0 z-10 flex flex-col justify-evenly items-start px-4 py-6 lg:max-w-7xl lg:w-full lg:h-auto lg:start-1/2 lg:-translate-x-1/2 lg:top-20">
                <p className="text-xl font-bold">Join Our Team</p>
                <p className="text-3xl lg:text-5xl font-bold my-9 lg:w-1/2">It takes the world's best talent to change the game.</p>
                <button className="bg-vanilla-pudding px-6 py-3 rounded-xl text-black">Explore Careers</button>
            </div>
            <div className="relative lg:max-w-7xl mx-auto">
                <img src={joinOurTeam} alt="" className="absolute bottom-0 lg:end-0 w-1/2 lg:w-1/4"/>
            </div>
        </div>
    )
}

export default Career;