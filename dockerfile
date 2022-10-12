FROM nginx:alpine
COPY . /usr/share/nginx/html
COPY ./site/ /usr/share/nginx/html/