FROM node:16-alpine

EXPOSE 3000

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn run buildandcompress
RUN yarn add global serve

CMD [ "npx", "serve", "build" ]
