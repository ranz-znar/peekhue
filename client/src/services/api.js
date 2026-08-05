import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function analyzeWebsite(url) {
  const response = await axios.post(`${API_URL}/api/analyze`, { url });

  return response.data;
}
