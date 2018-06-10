FROM nginx:alpine

# Copy build files from npm
COPY www /usr/share/nginx/html
COPY docker/default.conf /etc/nginx/conf.d/default.conf
