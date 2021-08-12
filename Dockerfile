FROM node:14-alpine
WORKDIR /
COPY . .
RUN yarn install --production
CMD ["node", "app.js"]