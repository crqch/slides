# 1. Base Stage
FROM oven/bun:1-alpine AS base
WORKDIR /app

FROM base AS deps
COPY . .

RUN bun install --frozen-lockfile

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bun run prepare
RUN bun run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json


EXPOSE 3000
CMD ["bun", "run", "build/index.js"]
