# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.154.0/containers/typescript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 14, 12, 10
# ARG VARIANT="14-buster"
# FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

FROM node:lts-alpine


RUN npm install
RUN npm run build


# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 PORT=3001

EXPOSE ${PORT}
CMD [ "node", "." ]



# Check out https://hub.docker.com/_/node to select a new base image
# FROM node:lts-slim

# RUN npm -g install typescript

# Set to a non-root built-in user `node`
# USER node

# Create app directory (with user `node`)
# RUN mkdir -p /home/node/app

# WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY --chown=node package*.json ./

# Bundle app source code
# COPY --chown=node . .

# RUN npm run build







# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# RUN sudo -u node npm install -g <your-package-list -here>
