FROM node:12

RUN npm install sass -g

COPY package*.json ./
RUN npm install

COPY . .
RUN sass --style=compressed --quiet src/css/style.scss:dist/style.min.css
RUN npx purgecss --css dist/style.min.css --content dist/*.html,dist/*.js --output dist/style.min.css
RUN npm run babel

EXPOSE 4000
CMD ["npm", "run", "start"]