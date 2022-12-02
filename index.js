"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const queries_1 = require("./queries");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.set("view engine", "pug");
app.set("views", path_1.default.join(__dirname, "views"));
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.render("form");
});
app.post("/makelink", (req, res) => {
    res.send("Received post request to makelink with information: " +
        JSON.stringify(req.body));
});
app.get("/error", (req, res) => {
    res.send("oh no there has been an error");
});
app.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fullURL = yield (0, queries_1.getLinkFromShortURL)(req.params.id);
    if (fullURL !== undefined) {
        const regexp = RegExp("(http|https)?://");
        const url = fullURL.fulllink.match(regexp)
            ? fullURL.fulllink
            : "http://" + fullURL.fulllink;
        res.redirect(url);
        return;
    }
    res.send("no link matches that, maybe you would like to make one?");
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port} 🚀`);
});
