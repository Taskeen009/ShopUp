import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js"
dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("hello");
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("listening");
});
    