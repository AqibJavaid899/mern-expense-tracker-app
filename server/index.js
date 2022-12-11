import express from "express";
import dotenv from "dotenv";

import { db_connect } from "./database/connect.js";

// Middlewares
const app = express();
dotenv.config();

// DB Connection
await db_connect();

app.get("/", (req, res) => {
  res.send("Hey There!");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
