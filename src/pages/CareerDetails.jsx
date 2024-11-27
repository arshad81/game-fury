import React from "react";
import { useParams } from "react-router-dom";
import jobs from "../../public/data";
const CareerDetail = () => {
    const {jobRole} = useParams()
    const job = jobs.find(job => job.position === jobRole); // Find the job that matches the role
    return(
        <div>
            <p>{job.location}</p>
            <p>{job.position}</p>
        </div>
    )
}

export default CareerDetail;