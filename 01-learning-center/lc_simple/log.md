## Source
https://www.docker.com/blog/how-to-setup-your-local-node-js-development-environment-using-docker/#How-to-set-up-a-local-Node.js-dev-environment--Part-2

### 1. Dockerfile

### 2. Build Docker image
docker build -t node-lc-image .
#### Run image
docker run -it --rm --name lc_dev -v $(pwd):/code node-lc-image bash

### Test image
node -e 'console.log("hello from inside our container")'

### Use Compose to Develop locally

### Start application
docker compose -f docker-compose.lc.yml up --build
