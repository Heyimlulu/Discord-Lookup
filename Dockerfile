FROM node:16-alpine

EXPOSE 3000

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn run buildandcompress
RUN yarn add global serve

ENV NODE_ENV production
ENV REACT_APP_GOOGLE_ANALYTICS_ID UA-000000-01

CMD [ "npx", "serve", "build" ]
