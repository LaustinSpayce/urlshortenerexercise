"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.send("Running on the front end woohooo");
});
app.post("/makelink", (req, res) => {
    res.send("Received post request to makelink with information: " + req.params);
});
app.get("/error", (req, res) => {
    res.send("oh no there has been an error");
});
app.get("/:id", (req, res) => {
    res.send("received a link to ID " + req.params.id);
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port} 🚀`);
});
