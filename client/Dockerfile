# syntax=docker/dockerfile:1
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json .
RUN npm install next
RUN npm install --save-dev typescript @types/react @types/node
RUN npm install
COPY . .

RUN npm run build && npm prune --production

EXPOSE 3000

CMD ["npm", "run", "dev"]