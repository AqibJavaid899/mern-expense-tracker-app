import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import passport from "passport";

import transactionRoutes from "./routes/Transaction.js";
import authenticationRoutes from "./routes/Authentication.js";
import passportConfiguration from "./config/passport.js";

import { db_connect } from "./database/connect.js";

// Middlewares
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
passportConfiguration(passport);

// DB Connection
await db_connect();

// Routes Middlewares
app.use("/api/transaction", transactionRoutes);
app.use("/api/authentication", authenticationRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
