import { Job } from "../store/search-job-slice";

export const jobParser = (jobs: unknown): Job[] => {
    if (!jobs || !Array.isArray(jobs)) {
        return [];
    }

    return jobs.map((job: any) => {
        return {
            jdUid: job.jd_uid || null,
            jdLink: job.jdLink || null,
            jobDetailsFromCompany: job.jobDetailsFromCompany || null,
            maxJdSalary: job.maxJdSalary || null,
            minJdSalary: job.minJdSalary || null,
            salaryCurrencyCode: job.salaryCurrencyCode || null,
            location: job.location || null,
            minExp: job.minExp || null,
            maxExp: job.maxExp || null,
            jobRole: job.jobRole || null,
            companyName: job.companyName || null,
            logoUrl: job.logoUrl || null,
        }
    });
};