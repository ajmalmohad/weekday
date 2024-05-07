import { Job } from "../store/search-job-slice";
import { JobCard } from "./jobcard";
import { useEffect, useRef } from "react";
import './css/joblists.css'

export default function JobLists({
    jobs,
    loading,
    fetchData,
}: {
    jobs: Job[];
    loading: boolean;
    fetchData: () => void;
}) {
    const loadMoreRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const first = entries[0];
            if (first.isIntersecting) {
                console.log("Intersecting");
                fetchData();
            }
        }, {});

        const currentRef = loadMoreRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [fetchData]);

    if (loading) {
        return (
            <div className="loading">
                <img src="src/assets/loading.gif" alt="loading" />
            </div>
        );
    }

    if (!jobs.length) {
        return (
            <div className="no-jobs">
                <p>No Jobs Found</p>
            </div>
        );
    }

    return (
        <div className="joblists">
            <div className="list">
                {jobs.map((job, idx) => (
                    <JobCard job={job} key={idx} />
                ))}
            </div>
            <div className="observer" ref={loadMoreRef}>Load More</div>
        </div>
    );
}