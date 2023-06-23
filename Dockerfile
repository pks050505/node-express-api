# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory means /usr/src/app
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code host directory to docker directory
COPY . .

# Expose the port that the application will listen on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
