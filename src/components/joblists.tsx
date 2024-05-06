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
      }, [fetchData, jobs]);

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
        <div className="joblists">
            {jobs.map((job, idx) => (
                <JobCard job={job} key={idx} />
            ))}
            <div ref={loadMoreRef}></div>
        </div>
    );
}