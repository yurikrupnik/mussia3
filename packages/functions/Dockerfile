FROM yurikrupnik/client-apps_lerna AS builder

COPY . ./packages/functions

RUN npm i
RUN npm run pi
RUN npm run build

EXPOSE 3333 3334

CMD ["npm", "run", "fucntion"]
