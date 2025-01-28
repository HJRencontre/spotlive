FROM node:lts-alpine AS base
WORKDIR /app/front
ENV PATH /app/front/node_modules/.bin:$PATH

FROM base AS dependencies
COPY ./front/package*.json ./
RUN npm install

FROM base AS build
COPY --from=dependencies /app/front/node_modules ./node_modules
COPY ./front ./

EXPOSE 5173
CMD ["npm", "run", "dev"]