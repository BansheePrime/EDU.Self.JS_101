## Node.js Docker Best Practices Guide
https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md

## Source
https://www.docker.com/blog/how-to-setup-your-local-node-js-development-environment-using-docker/#How-to-set-up-a-local-Node.js-dev-environment--Part-2

## 9 Tips for Containerizing Your Node.js Application
https://www.docker.com/blog/9-tips-for-containerizing-your-node-js-application/

## 01-learning-center build
cd 01-learning-center
docker build -t 01-learning-center .
docker run --rm -p 3333:3333 --name 01lc 01-learning-center
docker volume create lc_mongodb
docker volume create lc_mongodb_config
docker network create lc_mongodb

docker run -it --rm -d -v lc_mongodb:/data/db -v lc_mongodb_config:/data/configdb -p 27017:27017 --network lc_mongodb --name lc_mongodb mongo

## 
docker run \
-it --rm -d \
--network lc_mongodb \
--name 01lc \
-p 3333:3333 \
-e SERVER_PORT=3333 \
-e SERVER_PORT=3333 \
-e DATABASE_CONNECTIONSTRING=lc_mongodb://mongodb:27017/data \
01-learning-center

## Test database connection
curl --request POST \
--url http://localhost:3333/services/m/data \
  --header 'content-type: application/json' \
  --data '{
"name": "some name",
"text": "some text",
"owner": "user"
}'


### Enter the container
$ docker exec -it <container id> /bin/bash

###
docker build -t node-lc-image .

###
docker run -v $(pwd):/usr/src/app -p 3333:3333 -d --name node-code node-lc-image

### Решение ошибки: Error: Cannot find module 'express'
https://stackoverflow.com/questions/39419295/cannot-finde-module-express-node-app-with-docker
When you run your container with -v flag, which mean mount a directory from your Docker engine’s host into a container, will overwrite what you do in /home/Documents/node-app,such as npm install.
-v /home:/usr/src/app

### Решение ошибки с node_modules
Добавить в запуск контейнера еще один параметр:
-v /app/node_modules

### Предпочтительно перевести docker volume в режим Read Only
-v xx.yyy:/app:ro