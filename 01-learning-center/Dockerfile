FROM node:20-bullseye
RUN mkdir -p /code
RUN npm install -g nodemon
WORKDIR /code
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN apt-get update && apt-get install -y \
  nano \
  vim
RUN yarn install
RUN npm i -g nodemon npm
COPY . .
CMD ["node", "server.js"]
EXPOSE 3333
