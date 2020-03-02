FROM yurikrupnik/client-apps_lerna AS builder

#ARG distFolder=src
#ARG modulePath=.
#ARG port=8080
#ENV PORT=$port
#ENV MODULE_PATH=$modulePath

#COPY . ./packages/functions/rollup.config
COPY . ./packages/functions
#COPY . ./packages/functions/func2
#COPY . .$MODULE_PATH

RUN npm i
RUN npm run pi
RUN npm run build
RUN echo $PWD
RUN echo $pwd
#RUN cd app/packages/functions/func1

#FROM node:12-alpine
#
#ARG distFolder=dist
#ARG modulePath=.
#ENV DIST_FOLDER=$distFolder
#ENV MODULE_PATH=$modulePath
#WORKDIR /usr/src/app
#COPY --from=builder /app$MODULE_PATH/$DIST_FOLDER .
#RUN npm install --only=production
#
EXPOSE 3333 3334

CMD ["npm", "run", "fucntion"]
