# Use an official Node.js runtime as a base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local Node.js server code to the container
COPY ./nodejs .

# Expose the port on which the Node.js server will run
EXPOSE 3000

# Start the Node.js server when the container launches
CMD ["node", "app.js"]
