FROM node:10
WORKDIR /dist

COPY package.json /dist

RUN npm install

COPY . /dist

VOLUME /dist/files
EXPOSE 3000

CMD [ "npm", "run", "start" ]