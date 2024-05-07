import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { UserRouter } from "./routes/user.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://banao-frontend.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/auth", UserRouter);

mongoose.connect(
  "mongodb+srv://kartikagarwal20144:Lu61VNdlCfnOES68@cluster0.sg1wbgq.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
);

app.listen(process.env.PORT, () => {
  console.log("Server is running.");
});
