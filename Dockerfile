FROM node:13.8.0-alpine3.11

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN chown -R node:node /app

USER node

EXPOSE 3000

CMD [ "yarn", "start" ]
