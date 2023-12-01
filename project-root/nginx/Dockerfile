# Use an official NGINX runtime as a base image
FROM nginx:latest

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the local HTML, CSS, and JS files to the container
COPY ./html /usr/share/nginx/html

# Expose the port on which NGINX will run
EXPOSE 80

# Start NGINX when the container launches
CMD ["nginx", "-g", "daemon off;"]
