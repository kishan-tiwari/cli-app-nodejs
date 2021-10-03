FROM node:14.3.0-alpine3.10

WORKDIR /usr/share/app

COPY package*.json ./

RUN npm install 

COPY . .

RUN ln -sf /dev/stdout /usr/share/app/logs/express.log  && \
    ln -sf /dev/stderr /usr/share/app/logs/express.log

EXPOSE 3000

CMD [ "npm", "start" ]