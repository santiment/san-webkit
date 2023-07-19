FROM node:16

ARG GQL_SERVER_URL
ARG GIT_HEAD
RUN GIT_HEAD=$GIT_HEAD

RUN npm install -g pnpm

WORKDIR /app

COPY ./ /app

RUN pnpm i
RUN pnpm build:storybook
