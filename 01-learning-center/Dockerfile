FROM node:20-bullseye
WORKDIR /code
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN apt-get update && apt-get install -y \
  nano \
  vim
RUN npm install
COPY . .
CMD ["node", "server.js"]
EXPOSE 3333
