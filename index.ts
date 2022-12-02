import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import { getLinkFromShortURL } from "./queries";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());
app.use(express.json());

// root directory - form to make a link
app.get("/", (req: Request, res: Response) => {
  res.render("form");
});

// Accept POST from form to make a link
app.post("/makelink", (req: Request, res: Response) => {
  res.send(
    "Received post request to makelink with information: " +
      JSON.stringify(req.body)
  );
});

// specific for error
app.get("/error", (req: Request, res: Response) => {
  res.send("oh no there has been an error");
});

// redirect
app.get("/:id", async (req: Request, res: Response) => {
  const fullURL = await getLinkFromShortURL(req.params.id);

  if (fullURL !== undefined) {
    const regexp = RegExp("(http|https)?://");
    const url = fullURL.fulllink.match(regexp)
      ? fullURL.fulllink
      : "http://" + fullURL.fulllink;
    res.redirect(url);
    return;
  }
  res.send("no link matches that, maybe you would like to make one?");
});

// Start server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port} 🚀`);
});
