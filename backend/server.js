import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js"

import authRoutes from "./routes/authRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";
dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());


// ✅ mount all routes
app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  console.log("hello");
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("listening");
});
    