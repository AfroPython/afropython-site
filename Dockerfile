FROM library/node:10.13-alpine

ARG UID=1000

ENV APP=/home/node/site
ENV NODE_ENV=development
ENV PORT=8080

RUN apk --update upgrade \
  && apk add --no-cache \
    shadow

RUN apk add --no-cache tzdata \
  && cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime \
  && echo "America/Sao_Paulo" > /etc/timezone \
  && apk del tzdata

RUN usermod -u ${UID:-1000} node \
  && mkdir -p ${APP} \
  && chown -R node:node ${APP}

USER node

WORKDIR ${APP}

EXPOSE ${PORT}

CMD ["tail", "-f", "/dev/null"]
