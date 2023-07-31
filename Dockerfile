# Use a Node.js base image
FROM node:14

# Set the working directory inside the container
WORKDIR /

# Copy your Node.js app's package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy your entire Node.js app to the container
COPY . .

# Set the port number that your Node.js app will listen on
ENV PORT 5050

# Expose the port to the external world
EXPOSE 5050

# Start your Node.js application
CMD ["node", "index.js"]  