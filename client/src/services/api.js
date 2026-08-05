import axios from "axios";

export async function analyzeWebsite(url) {
  const response = await axios.post("http://localhost:5000/api/analyze", {
    url,
  });

  return response.data;
}
