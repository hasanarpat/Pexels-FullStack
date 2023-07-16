import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

//SAMPLE PHOTOS FOR REGISTER PAGE BACKGROUND
app.get("/register", async (req, res) => {
  const config = {
    headers: {
      Authorization: process.env.APIKEY,
    },
  };
  await axios
    .get("https://api.pexels.com/v1/curated?per_page=21", config)
    .then((response) => {
      res.status(200).json(response.data);
    });
  //console.log(result);
});

//CURATED PHOTOS ON HOME PAGE
app.get("/curated", async (req, res) => {
  const config = {
    headers: {
      Authorization: process.env.APIKEY,
    },
  };
  await axios
    .get("https://api.pexels.com/v1/curated?page=1&per_page=40", config)
    .then((response) => {
      res.status(200).json(response.data);
    });
  //console.log(result);
});

app.listen(3000, () => {
  console.log("Server has started at port:3000!");
});
