FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY src src
COPY public public
COPY tsconfig.json .

ENV NODE_ENV production

EXPOSE 5000

CMD ["bun", "src/index.ts"]
