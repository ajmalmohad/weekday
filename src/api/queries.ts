import { Job } from "../store/search-job-slice";
import { jobParser } from "../utils/parser";

type JobResult = {
  data: {
    jobs: Job[];
    total: number;
  };
  error: null;
} | {
  data: null;
  error: Error;
};

export async function getAvailableJobs(limit: number, offset: number): Promise<JobResult> {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: limit,
    offset: offset,
  });

  const requestOptions = {
    method: "POST",
    headers: headers,
    body,
  };

  try {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (!data || !data.jdList || !data.totalCount) {
      throw new Error("Invalid response from server");
    }

    return {
      data: {
        jobs: jobParser(data.jdList as unknown[]),
        total: data.totalCount as number,
      },
      error: null,
    };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}
