FROM library/node:8-alpine as dependencies

COPY package.json package-lock.json ./
RUN npm config set progress=false && npm config set depth 0 \
 && npm install \
 && mkdir /opt/app \
 && cp -R ./node_modules /opt/app

FROM dependencies as builder

WORKDIR /opt/app
COPY . .
RUN npm run build

FROM library/nginx:1.13.12-alpine as runtime

COPY nginx.conf /etc/nginx/conf.d/
RUN rm -r /usr/share/nginx/html/*
COPY --from=builder /opt/app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx","-g","daemon off;"]
