CREATE TABLE links (
  ID SERIAL PRIMARY KEY,
  short VARCHAR(12),
  fulllink VARCHAR(2048)
);
INSERT INTO links (short, fulllink)
VALUES (123456, www.google.com),
  (ABCDEFG, https: / / www.palo - it.com / en /);