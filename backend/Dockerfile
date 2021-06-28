FROM node:14-alpine

WORKDIR /src/backend

ADD package.json /src/backend

ENV GENERATE_SOURCEMAP false

RUN npm i --silent

ADD . /src/backend

EXPOSE 3600

CMD npm start