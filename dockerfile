# ---------- Builder ----------
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN node run ./scripts/busts.js
RUN node run ./scripts/fetchBadges.js
RUN npm run build
   
# Remove dev dependencies
RUN npm prune --omit=dev


# ---------- Runner ----------
FROM node:22-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Security best practice
#RUN addgroup -S nodejs && adduser -S nodejs -G nodejs --it is not needed as this is runing in docker and already containerized

COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

#USER nodejs

EXPOSE 3000

CMD ["node", "build"]

