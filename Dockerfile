FROM node:alpine
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY gulpfile.js gulpfile.js
COPY src src
COPY public/index.html public/index.html
CMD npm start
