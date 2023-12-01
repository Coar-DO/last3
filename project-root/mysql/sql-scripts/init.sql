# Use an official MySQL runtime as a base image
FROM mysql:latest

# Set the root password for MySQL
ENV MYSQL_ROOT_PASSWORD=password

# Create a database and table
ENV MYSQL_DATABASE=numbers
COPY ./sql-scripts/ /docker-entrypoint-initdb.d/
