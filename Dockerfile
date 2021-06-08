FROM node:12

WORKDIR /app
COPY package.json .
RUN npm install --production --registry=http://r.cnpmjs.org/ --verbose
COPY demo.js .
CMD ["node", "demo.js"]