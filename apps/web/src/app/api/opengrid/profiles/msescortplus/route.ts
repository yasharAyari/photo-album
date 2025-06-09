import { BASE_URL, PROFILE_URL } from "@libs/constants";

export async function GET() {
  console.log("GET request received", `${BASE_URL}${PROFILE_URL}`);
  try {
    const response = await fetch(`${BASE_URL}${PROFILE_URL}`, {
      method: "GET",
    });

    // Check if the response is ok (status in range 200-299)
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();

    // Return the fetched data as the response
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response(
      JSON.stringify({ error: 'Server error', message: error }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
