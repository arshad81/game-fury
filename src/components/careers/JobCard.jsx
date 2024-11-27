import React from "react";
import careerA from "../../assets/images/career/careerA.jpg"
import { Link } from "react-router-dom";
const JobCard = ({job}) => {
    const { position, location, short_description } = job; // Destructure job prop
    return(
        <div className="mt-4 mb-32 flex flex-col items-stretch ">
            <img src={careerA} alt="" className="rounded-xl lg:rounded-3xl" />
            <div className="flex-grow">
            <p className="mt-4 text-lg font-bold">{position}</p>
            <p>{location}</p>
            <p className="mt-6">{short_description}</p>
            </div>
            <Link to={`/career/${position}`}>
            <button className="mt-10 bg-midnight-velvet px-20 py-2 rounded-lg">Apply</button>
            
            </Link>
        </div>
    )
}

export default JobCard;