FROM node:lts-alpine AS base
WORKDIR /app/api
ENV PATH /app/api/node_modules/.bin:$PATH

FROM base AS dependencies
COPY ./api/package*.json ./
RUN npm install
RUN npm install -g @nestjs/cli

FROM base AS build
COPY --from=dependencies /app/api/node_modules ./node_modules
COPY ./api ./

EXPOSE 3000
CMD ["npm", "run", "start:dev"]