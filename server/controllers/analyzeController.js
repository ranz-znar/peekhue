import { analyze } from "../services/analyzer.js";

export async function analyzeWebsite(req, res) {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        message: "URL is required",
      });
    }

    const result = await analyze(url);

    res.json(result);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to analyze website.",
    });
  }
}
