// backend/index.js
require("dotenv").config();
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");


const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://payment-client-tawny.vercel.app"
  ],

  credentials: true
}));
app.use(express.json());

app.use("/api/v1", rootRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
