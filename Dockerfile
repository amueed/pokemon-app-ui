FROM node:14-slim as build

WORKDIR /usr/local/app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/local/app/build /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80