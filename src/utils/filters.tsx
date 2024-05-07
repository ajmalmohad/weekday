import { Job, JobFilters } from "../store/search-job-slice";

interface FilterOption {
    name: string;
    options: string[];
    mode: 'multiple' | 'single';
}

export const filterOptions: FilterOption[] = [
    {
        name: "Roles",
        options: ["Backend", "Frontend", "Fullstack", "IOS", "Flutter", "React Native",
            "Dev-Ops", "Android", "Tech Lead", "Data Science", "Data Engineer", "NLP",
            "Computer Vision", "Deep Learning", "Web 3"],
        mode: "multiple"
    },
    {
        name: "Experience",
        options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        mode: "single"
    },
    {
        name: "Remote",
        options: ["remote", "onsite", "hybrid"],
        mode: "multiple"
    },
    {
        name: "Min Base Salary",
        options: ["0 LPA", "10 LPA", "20 LPA", "30 LPA", "40 LPA",
            "50 LPA", "60 LPA", "70 LPA"],
        mode: "single"
    },
    {
        name: "Location",
        options: ["India", "USA", "UK", "Canada", "Australia"],
        mode: "multiple"
    },
];

export const applyRolesFilter = (jobs: Job[], roles: string[]): Job[] => {
    if (!roles.length) return jobs;
    return jobs.filter((job) => roles.includes(job.jobRole));;
}

export const applyExperienceFilter = (jobs: Job[], minExp: number | null): Job[] => {
    if (!minExp) return jobs;
    return jobs.filter((job) => job.minExp && job.minExp <= minExp);
}

export const applyRemoteFilter = (jobs: Job[], remote: string[]): Job[] => {
    if (!remote.length) return jobs;
    if (remote.includes("onsite") && remote.includes("remote")) {
        return jobs;
    } else if (remote.includes("onsite")) {
        return jobs.filter((job) => job.location !== "remote");
    } else {
        return jobs.filter((job) => remote.includes(job.location));
    }
}

export const applyMinJdSalaryFilter = (jobs: Job[], minJdSalary: number | null): Job[] => {
    if (!minJdSalary) return jobs;
    return jobs.filter((job) => job.minJdSalary && job.minJdSalary >= minJdSalary);
}

export const applyLocationFilter = (jobs: Job[], location: string[]): Job[] => {
    if (!location.length) return jobs;
    return jobs.filter((job) => location.includes(job.location));
}

export const applyCompanyNameFilter = (jobs: Job[], companyName: string | null): Job[] => {
    if (!companyName) return jobs;
    return jobs.filter((job) => job.companyName.toLowerCase().startsWith(companyName));
}

export const applyFilters = (jobs: Job[], filters: JobFilters): Job[] => {
    let filteredJobs = jobs;
    filteredJobs = applyRolesFilter(filteredJobs, filters.jobRole);
    filteredJobs = applyExperienceFilter(filteredJobs, filters.minExp);
    filteredJobs = applyRemoteFilter(filteredJobs, filters.remote);
    filteredJobs = applyMinJdSalaryFilter(filteredJobs, filters.minJdSalary);
    filteredJobs = applyLocationFilter(filteredJobs, filters.location);
    filteredJobs = applyCompanyNameFilter(filteredJobs, filters.companyName);
    return filteredJobs;
}