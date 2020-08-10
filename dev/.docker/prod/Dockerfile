FROM node:12

USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
WORKDIR /home/node

RUN npm install -g node-sass

COPY package*.json ./
RUN npm install

COPY . .
USER root
RUN node-sass --output-style=compressed --quiet src/css/style.scss dist/style.min.css
RUN npm run babel

EXPOSE 4000
CMD ["npm", "run", "start"]