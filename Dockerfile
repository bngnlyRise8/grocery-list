# Stage 1: Build the Next.js app
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Copy the rest of the application files
COPY . .

# Install dependencies
RUN npm install

# Generate Prisma Client and run migrations
# RUN npx prisma generate
# RUN npx prisma migrate deploy

# Build the Next.js app
RUN npm run build

# Stage 2: Serve the Next.js app
FROM node:18-alpine AS runner

# Set environment variables
ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm install --omit=dev

# Expose the port that Next.js will run on
EXPOSE 3000

#Run the required prisma commands and then start the Next.js server
# CMD ["sh", "-c", "npx prisma generate && npx prisma migrate deploy && npm run start"]
# CMD ["npm", "run", "start"]
CMD ["sh", "./start.sh"]