FROM node:carbon-alpine

ENV HOME=/opt/graphyql

WORKDIR ${HOME}

# install the application
COPY lib/* lib/
COPY index.js .

# install the dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install --only=production

CMD ["node", "index.js"]