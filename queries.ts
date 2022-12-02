import { Pool, Client } from "pg";
import { nanoid } from "nanoid";
import { stringify } from "querystring";

const pool = new Pool();

export const getLinkFromShortURL = async (shortURL: String) => {
  const client = await pool.connect();
  try {
    const res = await client.query(
      "SELECT fulllink FROM links WHERE short = $1",
      [shortURL]
    );
    return res.rows[0];
  } catch (err) {
    console.log(err);
    console.log("whoops");
  } finally {
    client.release;
  }
};

export const addLinkToDB = async (url: String) => {
  // TODO: Check it's a valid URL.
  const client = await pool.connect();
  try {
    const shortURL = nanoid(Number(process.env.SHORTLENGTH));
    const res = await client.query(
      `INSERT INTO "links" ("short", "fullURL") VALUES ($1, $2)`,
      [shortURL, url]
    );
    return res.rows[0];
  } catch (err) {
    console.log(err);
    return err;
  } finally {
    client.release;
  }
};
