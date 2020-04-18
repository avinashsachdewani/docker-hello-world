FROM node:10
LABEL MAINTAINER Avinash Sachdewani <avinash.sachdewani@gmail.com>
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -g pm2 && npm install -f
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]