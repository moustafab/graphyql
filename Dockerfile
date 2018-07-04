FROM node:carbon-alpine as build

WORKDIR graphyql

# copy the source files
COPY . .

# install dev dependencies
RUN npm install
RUN npm run build

FROM node:carbon-alpine

ENV HOME=/opt/graphyql
ENV DEVELOPMENT=false
ENV LOG_LEVEL=0

WORKDIR ${HOME}

# install the application
COPY --from=build graphyql/lib/* lib/
COPY --from=build graphyql/index.js .
COPY --from=build graphyql/package.json .
COPY --from=build graphyql/package-lock.json .

# install the dependencies
RUN npm install --only=production

EXPOSE 4000

CMD ["node", "index.js"]