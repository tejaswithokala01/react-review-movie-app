# Use an official Node runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Set the environment variable to development
ENV NODE_ENV=development

# Expose the app's port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
