## Builder ##
FROM node:22.13.0-alpine3.21 as builder

WORKDIR /temp

COPY .yarn .yarn/
COPY .yarnrc.yml tsconfig.json package.json tsup.config.ts ./
COPY src/ ./src/


RUN yarn install --immutable && \
	yarn build

## App ##
FROM node:22.13.0-alpine3.21 as app

ENV NODE_ENV=production

WORKDIR /app

RUN apk add -q --update && \
	addgroup --system --gid 1001 nodejs && \
	adduser --system --uid 1001 nodejs

USER nodejs

COPY --from=builder /temp/node_modules node_modules/
COPY --from=builder /temp/apps/bot/dist dist/
COPY --from=builder /temp/apps/bot/package.json ./

CMD yarn start
