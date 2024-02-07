# syntax=docker/dockerfile:1
FROM node:18-alpine

WORKDIR /client
COPY package.json package-lock.json* ./
RUN  npm ci
COPY . ./
ENV NODE_ENV development
ENV NEXT_TELEMETRY_DISABLED 1
EXPOSE 3000

CMD ["npm","run","dev"]