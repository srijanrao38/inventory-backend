require("dotenv").config();
console.log("MONGO_URI:", process.env.MONGO_URI); 

const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server is running...");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
