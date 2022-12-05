import pkg from "pg";
import { nanoid } from "nanoid";

const { Pool } = pkg;
const pool = new Pool();

export const getLinkFromShortURL = async (shortURL) => {
  try {
    const res = await pool.query(
      "SELECT fulllink FROM links WHERE short = $1",
      [shortURL]
    );
    return res.rows[0];
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const addLinkToDB = async (url) => {
  try {
    const shortURL = nanoid(Number(process.env.SHORTLENGTH));
    const res = await pool.query(
      `INSERT INTO "links" ("short", "fulllink") VALUES ($1, $2) RETURNING "short"`,
      [shortURL, url]
    );
    return res.rows[0];
  } catch (err) {
    console.log(err);
    return err;
  }
};
