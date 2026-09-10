FROM node:22-alpine AS builder

ARG BACKEND_URL
ARG GQL_SERVER_URL
ARG GIT_HEAD

RUN apk add git
RUN npm install -g pnpm@8

WORKDIR /app

COPY ./ /app

RUN pnpm i --frozen-lockfile
RUN pnpm build-storybook

FROM node:22-alpine

COPY --from=builder /app/storybook-static /app/storybook-static

CMD npx serve /app/storybook-static -p 4000
