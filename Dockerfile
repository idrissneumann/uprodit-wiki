ARG NODE_VERSION=18.18.0-alpine
ARG NGINX_VERSION=1.15

# Stage build
FROM node:${NODE_VERSION} AS doc_builder

RUN npx create-docusaurus@2.4.3 uprodit-wiki classic

WORKDIR /uprodit-wiki

RUN rm -rf docs/* && rm -rf blog/*

COPY .docker/docusaurus/docusaurus.config.js .
COPY img/uprodit_logo.png static/img/uprodit_logo.png
COPY img/favicon.png static/img/favicon.png
COPY .docker/docusaurus/custom.css src/css/custom.css
COPY .docker/docusaurus/index.js src/pages/index.js

COPY . docs/

RUN rm -rf docs/ci && \
    npm i -g api-spec-converter && \
    api-spec-converter --from=wadl --to=swagger_2 --syntax=json --order=alpha https://api.uprodit.com > api_endpoints.json && \
    npx swagger-markdown -i api_endpoints.json && \
    rm -rf api_endpoints.json && \
    mv api_endpoints.md docs/api/api_endpoints.md && \
    sed -i "1 s/^\#/\# API endpoints definitions/" docs/api/api_endpoints.md && \
    npm i && \
    npm i --save docusaurus-lunr-search@2.1.15 && \
    npm i --save docusaurus-plugin-matomo && \
    npm run build

# Stage run
FROM nginx:${NGINX_VERSION} AS doc

COPY .docker/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY .docker/nginx/docker-entrypoint.sh /docker-entrypoint.sh

COPY --from=doc_builder /uprodit-wiki/build/ /usr/share/nginx/html

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD [ "nginx", "-g","daemon off;" ]
