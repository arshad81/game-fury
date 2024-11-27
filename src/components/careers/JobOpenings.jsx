import React from "react";
import JobCard from "./JobCard";
import jobs from "../../../public/data";

const JobOpenings = () => {
    return (
        <div className="bg-poinciana text-white text-center lg:text-start py-8 px-4">
            <h2 className="text-2xl lg:text-5xl font-bold font-suez lg:my-16 lg:text-center">Job Openings</h2>
            <div className="grid grid-cols-4 grid-flow-col gap-8 lg:px-10">
            {
                jobs.map(job => (
                    <JobCard key={job.position} job={job} />
                ))  
            }
            </div>
            
        </div>
    )
}

export default JobOpenings;