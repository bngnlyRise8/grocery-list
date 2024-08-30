#!/bin/sh

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# Start the Next.js application
npm run start
