import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Serve the static files from the React app
app.use(express.static("ui/dist"));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
