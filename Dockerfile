# # FROM nginx:1.17.1-alpine
# FROM php:7.2-apache
# # FROM node:12.18.1
# # COPY package.json .
# # COPY package-lock.json .
# RUN apt-get update && apt-get upgrade -y && apt-get install -y nodejs npm
# # RUN apk add --update nodejs npm
# # RUN npm install
# RUN npm build
# RUN npm i --save-dev supertest mocha chai @babel/cli @babel/core @babel/node @babel/register @babel/preset-env
# # COPY . /usr/share/nginx/html
# COPY . /usr/local/apache2/htdocs


FROM nginxinc/nginx-unprivileged
EXPOSE 8080
RUN apt-get update && apt-get upgrade -y && apt-get install -y nodejs npm
# RUN apk add --update nodejs npm
RUN npm install
RUN npm build
RUN npm i --save-dev supertest mocha chai @babel/cli @babel/core @babel/node @babel/register @babel/preset-env
COPY . /usr/share/nginx/html

