import { Job } from "../store/search-job-slice";

export default function JobLists({
    jobs,
    loading
}: {
    jobs: Job[];
    loading: boolean;
}) {

    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if (!jobs.length) {
        return (
            <div>
                <h1>No Jobs Found</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>Job Lists</h1>
        </div>
    );
}