FROM node AS Server

ARG DATABASE_URL
ENV DATABASE_URL $DATABASE_URL

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install --save-prod
COPY . .
RUN npm run build

EXPOSE 8000

CMD ["sh", "-c", "npm start"]