# Link shortener exercise

This is a simple exercise, creating a link shortener.

The requirements are that you can input a URL, and receive a shortened one back.

If you have docker, run the script:

`bash launch_app.sh`

And docker containers with compose will be launched together.

You can then access the application at http://localhost:8000/

It'll shorten any text, not validating that a link already exists or is valid.

There's no check for duplication of the shortened URL because it's very very unlikely there would be any overlap.
