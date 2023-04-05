# syntax=docker/dockerfile:1
FROM node:18-alpine

WORKDIR /app
COPY package.json package-lock.json* ./
RUN  npm ci
COPY . .
RUN npm run build && npm prune --production
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm","run","dev"]