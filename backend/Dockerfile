FROM node:18-alpine

WORKDIR /app

# Install OpenSSL (Prisma needs it)
RUN apk add --no-cache openssl

# Copy package files first (better cache)
COPY package.json yarn.lock ./

RUN yarn install

# Copy project
COPY . .

# Generate Prisma Client
RUN npx prisma generate

EXPOSE 3333

CMD ["yarn", "dev"]
