FROM node:20-bullseye
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install -g nodemon
RUN npm install
RUN npm install express
COPY . ./
EXPOSE 3333
CMD ["npm", "run", "dev"]
