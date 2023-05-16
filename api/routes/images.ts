import express, { Request, Response, Router } from "express";
const router: Router = express.Router();
import axios, { AxiosResponse } from "axios";
import { Image } from "../../client/src/Types";

router.get("/images", async (req: Request, res: Response) => {
  try {
    // Make an API request using Axios
    const baseUrl = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&per_page=9&page=1`;

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

const sortArrayById = (data: Image[]): Image[] => {
  return data.sort((a, b) => a.id - b.id);
};

router.get("/sort", async (req: Request, res: Response) => {
  try {
    // Make an API request using Axios
    const baseUrl =
      "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736";

    const url = req.query.type ? `${baseUrl}&q=${req.query.type}` : baseUrl;
    const response: AxiosResponse = await axios.get(url, {
      transformResponse: [
        (responseData) => sortArrayById(JSON.parse(responseData).hits),
      ],
    });
    // Send the response
    res.json(response.data);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: "An error occurred" });
  }
});

router.get("/paginate", async (req: Request, res: Response) => {
  try {
    // Make an API request using Axios
    const baseUrl = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&per_page=9&page=${req.query.page}`;

    const url = req.query.type ? `${baseUrl}&q=${req.query.type}` : baseUrl;
    const response: AxiosResponse = await axios.get(url);
    // Send the response
    res.json(response.data);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
