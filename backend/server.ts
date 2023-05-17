import express, { Request, Response } from "express";
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const imagesAPI = require("./routes/images");
app.use(cors());
app.use(imagesAPI);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
