# Use the official Node.js image
FROM node:alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Set default environment variable
ENV PORT=3000

# Expose the port (default is 3000)
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]
