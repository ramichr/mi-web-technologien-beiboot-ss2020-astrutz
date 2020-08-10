FROM node:10

USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
WORKDIR /home/node

RUN npm install -g nodemon node-sass

COPY package*.json ./
RUN npm install

EXPOSE 4000
CMD ["npm", "run", "watch"]