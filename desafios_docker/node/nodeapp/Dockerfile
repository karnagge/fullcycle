# Dockerfile
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Exponha a nova porta
EXPOSE 3001

CMD [ "npm", "start" ]
