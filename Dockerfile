FROM nginx:1.21.1-alpine
COPY /dist/cryptoAngular /usr/share/nginx/html
EXPOSE 80
