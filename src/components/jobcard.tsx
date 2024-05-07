import { Job } from "../store/search-job-slice";
import './css/jobcard.css'

export const JobCard = ({ job }: {
    job: Job
}) => {
    const {
        companyName,
        jobRole,
        location,
        minExp,
        maxExp,
        minJdSalary,
        maxJdSalary,
        jobDetailsFromCompany,
        jdLink,
    } = job;

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
                    {minJdSalary ? ` $${minJdSalary}` : ' Not Provided'} -
                    {maxJdSalary ? ` ${maxJdSalary}` : ' Not Provided'} LPA ✅
                </h3>
            </div>
            <div className="job-card-body">
                <h3 className="about-company">About Company: </h3>
                <p className="job-description">{jobDetailsFromCompany}</p>
            </div>
            <div className="job-card-footer">
                <div className="job-card-experience">
                    <span>
                        {minExp || maxExp ? (
                            `${minExp || 'No min exp'} - ${maxExp || 'No max exp'} years exp`
                        ) : (
                            'Exp. not provided'
                        )}
                    </span>
                </div>
                <a href={jdLink} className="job-card-view-more">
                    View Job
                </a>
            </div>
        </div>
    );
};