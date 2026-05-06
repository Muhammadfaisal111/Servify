import app from "./app";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config";
import { connect } from "node:http2";

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Auth service is running on port ${PORT}`);
});
