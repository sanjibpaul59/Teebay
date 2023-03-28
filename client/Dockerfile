# syntax=docker/dockerfile:1
FROM node:18-alpine

WORKDIR /app
COPY package*.json .
COPY . .
RUN npm install

RUN npm run build && npm prune --production

EXPOSE 3000

CMD ["npm", "run", "dev"]

# FROM node:18-alpine AS build

# WORKDIR /app
# COPY package*.json .
# RUN npm install next
# RUN npm install --save-dev typescript @types/react @types/node
# RUN npm install
# COPY . .

# RUN npm run build && npm prune --production

# FROM node:18-alpine
# WORKDIR /app
# COPY --from=build /app/package*.json /app/
# COPY --from=build /app/.next /app/.next
# COPY --from=build /app/public /app/public
# COPY --from=build /app/node_modules /app/node_modules

# EXPOSE 3000

# CMD ["npm", "run", "dev"]
