FROM node:12.16.2

# Create app directory
WORKDIR /ss-interface-soap

# Install app dependencies
COPY package.json /ss-interface-soap
RUN npm install

# Bundle app source
COPY . /ss-interface-soap

EXPOSE  6060
CMD [ "node", "./src/soap_server/index.js"]