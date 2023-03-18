FROM node:18.12.1

WORKDIR /var/www/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "server.js"]
