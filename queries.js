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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLinkToDB = exports.getLinkFromShortURL = void 0;
const pg_1 = require("pg");
const nanoid_1 = require("nanoid");
const pool = new pg_1.Pool();
const getLinkFromShortURL = (shortURL) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield pool.connect();
    try {
        const res = yield client.query("SELECT fulllink FROM links WHERE short = $1", [shortURL]);
        return res.rows[0];
    }
    catch (err) {
        console.log(err);
        console.log("whoops");
    }
    finally {
        client.release;
    }
});
exports.getLinkFromShortURL = getLinkFromShortURL;
const addLinkToDB = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield pool.connect();
    try {
        const shortURL = (0, nanoid_1.nanoid)(Number(process.env.SHORTLENGTH));
        const res = yield client.query(`INSERT INTO "links" ("short", "fulllink") VALUES ($1, $2) RETURNING "short"`, [shortURL, url]);
        console.log(res);
        return res.rows[0];
    }
    catch (err) {
        console.log(err);
        return err;
    }
    finally {
        client.release;
    }
});
exports.addLinkToDB = addLinkToDB;
