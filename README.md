# Link shortener exercise

This is an exercise in making a simple link shortener.

Run from node and all dependencies.

If you have docker:
`bash launch_app.sh`

You need a postgres database named `shortener` in the `.env` is a basic user named "me" with the password "password" - can configure those to taste.

Populate the one table and a bit of dummy data with /sql/seed.sql

Run the server with `npm run` and the site should be accessible. Have fun shortening links.

It'll shorten any text, not validating links exist or are valid.

There's no check for duplication of the shortened URL because it's very very unlikely there'll be any overlap.
