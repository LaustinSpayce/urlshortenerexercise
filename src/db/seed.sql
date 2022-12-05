CREATE TABLE IF NOT EXISTS links (
  ID SERIAL PRIMARY KEY,
  short VARCHAR(12) UNIQUE,
  fulllink VARCHAR(2048)
);
INSERT INTO links (short, fulllink)
VALUES ('1234567', 'www.google.com'),
  ('ABCDEFG', 'https://www.palo-it.com/en/');