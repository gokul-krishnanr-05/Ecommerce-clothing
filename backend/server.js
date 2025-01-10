import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.error(err));

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.listen(port, () => console.log(`running on ${port}`));
