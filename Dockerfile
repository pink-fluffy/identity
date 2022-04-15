# Use Node v16 as the base image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9044

ARG IDENTITY_PORT
ARG IDENTITY_API_ROOT
ARG MONGODB_URI
ARG JWT_ACCESS_SECRET
ARG TESTING_TOKEN
ARG TESTING_EMAIL
# Run node
RUN npm start
CMD ["node", "dist/server.js"]
