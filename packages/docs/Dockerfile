FROM yurikrupnik/client-apps_lerna AS builder

COPY . ./packages
RUN npm run pi
RUN npx lerna run build --scope @krupnik/fe-docs

FROM node:12-alpine

ARG port=6002
ENV PORT=$port

WORKDIR /usr/src/app
COPY --from=builder /app/packages/docs/dist .
RUN npm install --only=production

EXPOSE 6002
CMD ["npm", "start"]
