FROM node:20-bullseye
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN apt-get update && apt-get -y install \
    vim
RUN npm install express
RUN npm install
RUN npm install -g nodemon
COPY . .
EXPOSE 3333
CMD ["npm", "run", "dev"]
