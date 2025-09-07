FROM node:23-slim AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package*.json /app
COPY pnpm-lock.yaml /app

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build
RUN pnpm prune --production

FROM nginx:1.28-alpine AS production

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8888

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]