export async function getAvailableJobs(limit: number, offset: number) {
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
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
