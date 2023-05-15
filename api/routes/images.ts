import express, { Request, Response, Router } from "express";
const router: Router = express.Router();
import axios, { AxiosResponse } from "axios";

router.get("/images", async (req: Request, res: Response) => {
  try {
    // Make an API request using Axios
    const baseUrl =
      "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736";

    const url = req.query.type ? `${baseUrl}&q=${req.query.type}` : baseUrl;
    const response: AxiosResponse = await axios.get(url);
    // Process the response data
    const data = response.data.hits;
    // Send the response
    res.json(data);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
