FROM node:carbon-alpine AS build-env

# Upgrade OS dependencies
RUN apk update && apk upgrade

# Set the working directory to the location of our app
WORKDIR /opt/app

# Copy Node.js App dependency manifest
COPY package.json ./package.json
# Use exactly the same versions as in local environment
COPY package-lock.json ./package-lock.json
# Install Node.js dependencies
RUN npm install
# RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
# Copy our app from the hard drive to the working direcotry in the docker image
COPY ./ ./
# Build the App inside the image
RUN npm run build --prod

##################
# Production Build
FROM nginx:alpine

# Copy build files from npm
COPY --from=build-env /opt/app /usr/share/nginx/html
COPY docker/default.conf /etc/nginx/conf.d/default.conf
