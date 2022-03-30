FROM strapi/base

WORKDIR /my-app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV development

EXPOSE 80

CMD ["yarn", "develop"]