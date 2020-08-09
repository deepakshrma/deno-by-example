FROM frolvlad/alpine-glibc:alpine-3.11_glibc-2.31
RUN apk update && apk add curl
RUN curl -fsSL https://deno.land/x/install/install.sh | sh && mv /root/.deno/bin/deno /bin/deno
WORKDIR /app
EXPOSE 8080
# COPY ssr/ /app/
ENTRYPOINT ["deno"]
CMD ["run", "--allow-net", "--allow-read", "--unstable", "server.tsx", "-c", "tsconfig.json"]


# -v \${PWD}:/var/www/html deno
