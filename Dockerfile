FROM node:24.2-alpine AS deps
WORKDIR /app

# Use a smaller set of core dependencies install and caching
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps --no-audit --no-fund

FROM node:24.2-alpine AS builder
WORKDIR /app
ENV NEXT_IMAGE_UNOPTIMIZED=1
COPY . .
COPY --from=deps /app/node_modules ./node_modules

# Build the Next.js app (will emit .next)
RUN npm run build

FROM node:24.2-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN apk add --no-cache ca-certificates
ENV NEXT_IMAGE_UNOPTIMIZED=1

# Copy only what's necessary to run
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
