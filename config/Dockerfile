FROM manusiaiseng/strapi

WORKDIR /my-app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV production

RUN yarn build

EXPOSE 80

CMD ["yarn", "start"]