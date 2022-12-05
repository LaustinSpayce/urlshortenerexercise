FROM node AS Server

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install --save-prod
COPY . .

EXPOSE 8000

CMD ["sh", "-c", "npm start"]