import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Running on the front end woohooo");
});

app.post("/makelink", (req: Request, res: Response) => {
  res.send("Received post request to makelink with information: " + req.params);
});

app.get("/error", (req: Request, res: Response) => {
  res.send("oh no there has been an error");
});

app.get("/:id", (req: Request, res: Response) => {
  res.send("received a link to ID " + req.params.id);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port} 🚀`);
});
