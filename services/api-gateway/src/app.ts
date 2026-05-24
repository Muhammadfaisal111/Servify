import express, { Application } from "express";
import proxy from "express-http-proxy";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/auth", proxy("http://localhost:3001"));

export default app;
