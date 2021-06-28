FROM node:14-alpine

WORKDIR /src/frontend

ADD package.json /src/frontend


RUN npm i

ADD . /src/frontend

EXPOSE 3000

CMD npm start