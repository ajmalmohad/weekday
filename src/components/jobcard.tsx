import { Avatar } from "@mui/material";
import { Job } from "../store/search-job-slice";
import { getCurrencySymbol } from "../utils/currency";
import './css/jobcard.css'
import { useState } from "react";
import { MiniModal } from "./modal";

export const JobCard = ({ job }: {
    job: Job
}) => {
    const {
        companyName,
        jobRole,
        location,
        minExp,
        minJdSalary,
        maxJdSalary,
        jobDetailsFromCompany,
        jdLink,
        salaryCurrencyCode
    } = job;

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="job-card">
            <div className="job-card-header">
                <img className="job-logo" src={job.logoUrl} alt={`${companyName} Logo`} />
                <div className="job-card-title">
                    <h2 className="company">{companyName}</h2>
                    <h2 className="role">{jobRole}</h2>
                    <h3 className="location">{location}</h3>
                </div>
            </div>
            <div className="estimated-salary">
                <h3>
                    Estimated Salary:
                    {minJdSalary ? ` ${getCurrencySymbol(salaryCurrencyCode)}${minJdSalary}` : ' Not Provided'} -
                    {maxJdSalary ? ` ${maxJdSalary}` : ' Not Provided'} LPA ✅
                </h3>
            </div>
            <div className="job-card-body">
                <div className="content">
                    <h3 className="about-company">About Company: </h3>
                    <p className="job-description">
                        {jobDetailsFromCompany}
                    </p>
                </div>
                <p className="show-more" onClick={() => { setModalOpen(true) }}>
                    Show More
                </p>
            </div>
            <div className="job-card-footer">
                <div className="job-card-experience">
                    <h3>Minimum Experience </h3>
                    {
                        minExp ? <p>{minExp} years</p> : <p>Not Provided</p>
                    }
                </div>
                <a href={jdLink} target="_blank" rel="noreferrer">
                    <button className="easy-apply">
                        ⚡ Easy Apply
                    </button>
                </a>
                <a href={jdLink} target="_blank" rel="noreferrer">
                    <button className="unlock-referrals">
                        <span className="people">
                            <Avatar sx={{ height: 20, width: 20 }} className="avatar" alt="Remy Sharp" src="https://www.w3schools.com/howto/img_avatar.png" />
                            <Avatar sx={{ height: 20, width: 20 }} className="avatar" alt="Remy Sharp" src="https://www.w3schools.com/howto/img_avatar.png" />
                        </span>
                        <span className="text">Unlock Referral Asks</span>
                    </button>
                </a>
            </div>
            <MiniModal heading={"Job Description"} description={jobDetailsFromCompany} open={modalOpen} handleClose={() => setModalOpen(false)} />
        </div>
    );
};