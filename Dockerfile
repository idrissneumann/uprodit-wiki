ARG NODE_VERSION=18.18.0-alpine
ARG NGINX_VERSION=1.15

# Stage build
FROM node:${NODE_VERSION} AS doc_builder

# Set shell and install pnpm
SHELL ["/bin/sh", "-c"]
ENV SHELL=/bin/sh
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH

RUN npm i -g pnpm && \
    mkdir -p $PNPM_HOME

WORKDIR /uprodit-wiki

# Copy package.json and install dependencies
COPY .docker/docusaurus/package.json .

RUN pnpm install

# Copy configuration files
COPY .docker/docusaurus/docusaurus.config.js .
COPY .docker/docusaurus/sidebars.js .
COPY img/uprodit_logo.png static/img/uprodit_logo.png
COPY img/favicon.png static/img/favicon.png
COPY .docker/docusaurus/custom.css src/css/custom.css
COPY .docker/docusaurus/index.js src/pages/index.js

# Create necessary directories
RUN mkdir -p docs/api

# Copy documentation content
COPY . docs/

# Process API documentation separately
RUN rm -rf docs/ci && \
    npm i -g api-spec-converter swagger-markdown && \
    # Convert WADL to Swagger
    api-spec-converter --from=wadl --to=swagger_2 --syntax=json --order=alpha https://api.uprodit.com > api_endpoints.json && \
    # Convert Swagger to markdown with proper frontmatter
    (echo "---"; \
     echo "id: api_endpoints"; \
     echo "title: API Endpoints Definitions"; \
     echo "sidebar_label: API Endpoints"; \
     echo "---"; \
     swagger-markdown -i api_endpoints.json) > docs/api/api_endpoints.md && \
    rm -rf api_endpoints.json

# Build the site
RUN pnpm run build

# Stage run
FROM nginx:${NGINX_VERSION} AS doc

COPY .docker/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY .docker/nginx/docker-entrypoint.sh /docker-entrypoint.sh

COPY --from=doc_builder /uprodit-wiki/build/ /usr/share/nginx/html

RUN chmod +x /docker-entrypoint.sh && \
    chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /usr/share/nginx/html

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD [ "nginx", "-g","daemon off;" ]
