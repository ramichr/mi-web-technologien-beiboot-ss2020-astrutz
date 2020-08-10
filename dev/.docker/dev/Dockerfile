FROM node:10

RUN npm install -g nodemon sass

COPY package*.json ./
RUN npm install

EXPOSE 4000
CMD ["npm", "run", "watch"]