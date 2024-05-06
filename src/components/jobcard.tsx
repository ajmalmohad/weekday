import { Job } from "../store/search-job-slice";

export function JobCard({
    job
}: {
    job: Job;
}) {
    return (
        <div>
            <h1>{job.jobRole}</h1>
            <h2>{job.companyName}</h2>
            <h3>{job.location}</h3>
            <h4>{job.minJdSalary}</h4>
        </div>
    );
}