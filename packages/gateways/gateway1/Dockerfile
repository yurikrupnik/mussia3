FROM yurikrupnik/client-apps_lerna AS builder

#ARG distFolder=lib
ARG modulePath=.
ENV MODULE_PATH=$modulePath

ARG port=8080
ENV PORT=$port

COPY . .$MODULE_PATH
RUN npm run pi
RUN npm run build




FROM node:12-alpine

WORKDIR /usr/src/app

ARG port=8080
ENV PORT=$port

ARG distFolder=dist
ENV DIST_FOLDER=$distFolder

ARG modulePath=.
ENV MODULE_PATH=$modulePath

COPY --from=builder /app$MODULE_PATH/$DIST_FOLDER .
RUN npm install --only=production

EXPOSE ${PORT}

CMD ["npm", "start"]
