import express, { Request, Response, Router } from "express";
const router: Router = express.Router();
import axios, { AxiosResponse } from "axios";
import { Image } from "../../client/src/Types";

router.get("/images", async (req: Request, res: Response) => {
  try {
    // Make an API request using Axios
    const baseUrl =
      "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&per_page=9";

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

//sort function by id
const sortArrayById = (data: Image[]): Image[] => {
  return data.sort((a, b) => a.id - b.id);
};

router.get("/sort", async (req: Request, res: Response) => {
  try {
    // prepare the base url
    const baseUrl =
      "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736";
    // add type for the url if selected in client
    const url = req.query.type ? `${baseUrl}&q=${req.query.type}` : baseUrl;
    //make the api call with axios
    const response: AxiosResponse = await axios.get(url, {
      transformResponse: [
        (responseData) => sortArrayById(JSON.parse(responseData).hits), //manipulate the response with the sort function
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
    const response: AxiosResponse = await axios.get(
      "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736",
      {
        params: {
          //send query params
          q: req.query.type,
          page: req.query.page,
          per_page: 9,
        },
      }
    );
    // Send the response
    res.json(response.data.hits);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
