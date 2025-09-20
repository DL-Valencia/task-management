# =========================================
# Stage 1: Build the Angular Application
# =========================================
ARG NODE_VERSION=18-alpine
FROM node:${NODE_VERSION} AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package-related files first to leverage Docker's caching mechanism
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm ci

# Copy the rest of the application source code into the container
COPY . .

# Build the Angular application
RUN npm run build -- --output-path=dist

# =========================================
# Stage 2: Serve the Application with NGINX
# =========================================
FROM nginx:alpine AS runner

# Copy the build output from the builder stage to NGINX's default HTML directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the application
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
