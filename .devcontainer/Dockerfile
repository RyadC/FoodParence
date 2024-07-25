# We use an officiel image of node named node:20-alpine. This image is based on alpine linux which is known for its lightness
FROM node:20-alpine

# The user to use for the upcomming commands (this user was created in the node image)
USER node

# The working directory to use inside the container. All of the actions will be executed from this folder
WORKDIR /home/node/code

# We copy the package files in the working directory.
COPY --chown=node:node package.json package-lock.json ./

# We execute this command in the shell
RUN npm i

# We declare the PORT to expose of the container to connect or host machine
EXPOSE 3080

# We execute a finally command
CMD [ "node", "dev" ]