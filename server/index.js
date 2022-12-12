import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import transactionRoutes from "./routes/Transaction.js";
import { db_connect } from "./database/connect.js";

// Middlewares
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

// DB Connection
await db_connect();

// Routes Middlewares
app.use("/api/transaction", transactionRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
