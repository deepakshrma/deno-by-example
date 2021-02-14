---
id: advanced-run-on-docker
title: Run Deno Application on docker | Continuous Integration and Deployment
sidebar_label: Run Deno Application on docker
description: Run Deno Application on docker | Continuous Integration and Deployment
keywords:
  - advanced
  - docker
  - data
  - cicd
  - tools
  - devops
image: https://source.unsplash.com/qX2ENCIxquA/800x450
---

## Overview

Before starting code, Lets understand the concept of CICD in brief. This will give us motive to read this blog further.

> By- ThoughtWorks’ definition for CI

```text
Continuous Integration (CI) is a development practice that requires developers to integrate code
into a shared repository several times a day. Each check-in is then
verified by an automated build, allowing teams to detect problems early.
```

**Read more:** [https://www.thoughtworks.com/es/continuous-integration](https://www.thoughtworks.com/es/continuous-integration)

> By- Jez Humble’s site

```text
Continuous Delivery is the ability to get changes of all types—including new features,
configuration changes, bug fixes and experiments—into production, or into
the hands of users, safely and quickly in a sustainable way.
```

**Read more:** [https://continuousdelivery.com/](https://continuousdelivery.com/)

As we can see, There are many reason why we should follow the **CICD** in our project development cycle. The one of reason why i follow CICD in daily work. Its **ease** my work and I get a **consistant environment** for my development work. So that i can focus on more good things rather than _debuging_ Binary **breaking issue**.

If you want to read more on CICD, You can read this [article](https://stackify.com/what-is-cicd-whats-important-and-how-to-get-it-right/).

![p](https://source.unsplash.com/qX2ENCIxquA/800x450)

_In this tutorial, I will mainly focus on how you can setup Simple Deno Web Application just using some docker commands. In next tuitor, I will explain how to setup a FullStack Deno Application._

## 1. Create a simple Deno WebApp

To show working example, We need to create a sample Application. Since the focus of this tutorial is not to create WebApp. I will recoomend you to checkout my tutorial [here](advanced_react_ssr.md) or [medium](https://deepak-v.medium.com//build-an-isomorphic-application-using-deno-and-react-without-webpack-deno-by-example-6c748abb3243?source=friends_link&sk=335ff7c133a790bb977d0077a322f3cd).

The given app is a SSR app, has only some basic functionality. You can checkout source in [/examples/ssr](https://github.com/deepakshrma/deno-by-example/tree/master/examples/ssr) folder. Once you run app, Open [http://localhost:8000/](http://localhost:8000/) on browser. You will see Web as given below.

![todo gif](https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/todo_demo.gif)

```bash
cd examples/ssr

deno run --allow-net --allow-read --unstable server.tsx -c tsconfig.json
```

## 2. Create a `Dockerfile`

App looks good! Let's now create a Dockerfile to startwith.

```bash
md docker-app && touch Dockerfile
```

To test our docker is working fine, Let's add some **Hello World** program.

```docker title="Dockerfile"
FROM alpine

RUN echo "Hello Stanger!"
```

**Build and Run:**

```bash
docker build -t chucknorris .
docker run -it chucknorris
```

**Explaination:** Here in above _Dockerfile_, First We are pulling the lightest linux base OS. Once pull done, We are trying to Run _echo command_. If all good, you will see below output.

```text
 ---> Running in 5215187d3d6a
Hello Stanger!
Removing intermediate container 5215187d3d6a
```

The above output tell us, things are OK.

## 3. Install Deno Using docker

By default, Alpine image does not have any external software. This is the one of the thinest Linux client. To install Deno, We need to curl Deno binary. You can read all the details on [Deno WebSite](https://deno.land/#installation).

Let's add _curl_ using Dockerfile.

```docker title="Dockerfile" {3-5}
FROM alpine

RUN apk update && apk add curl
ENTRYPOINT ["curl"]
CMD [ "curl", "https://api.chucknorris.io/jokes/random" ]
```

**Build and Run:**

```bash
docker build -t chucknorris .
docker run -it chucknorris
```

Once you run you will see output along with _chucknorris_ joke. I got mine joke as _"Chuck Norris once threw a 'block party'. The city of Detroit filed for bankruptcy the next day"_. If your are lucky, You may get more funnier joke.

**Download Deno Binary:**
Now time to _install/download_ **pre-compile** version of Deno binary

```docker title="Dockerfile" {5}
FROM alpine

RUN apk update && apk add curl

RUN curl -fsSL https://deno.land/x/install/install.sh | sh && mv /root/.deno/bin/deno /bin/deno

ENTRYPOINT ["dono"]

CMD ["run", "--allow-net", "https://deno.land/std/examples/welcome.ts"]
```

**Build and Run:**

```bash
docker build -t deno-app .
docker run -it deno-app
```

:::caution Issue
There are some compiled libraries missing on **Alpine image**. So when you try to run Deno you may can see error like **standard_init_linux.go:211: exec user process caused**. To fix above error, We will you modified version of Alpine Image.
:::

Let's update our docker file.

```docker title="Dockerfile" {1}
FROM frolvlad/alpine-glibc:alpine-3.11_glibc-2.31

RUN apk update && apk add curl

RUN curl -fsSL https://deno.land/x/install/install.sh | sh && mv /root/.deno/bin/deno /bin/deno

ENTRYPOINT ["deno"]

CMD ["run", "--allow-net", "https://deno.land/std/examples/welcome.ts"]
```

**Explaination:** Once we pulled the image, We used curl to get the _installation script_ from Deno website and download _Deno binary_. Since default path of deno binary is not _bin_. So we need to copy binary to bin. You can find better way to setup path.
_ENTRYPOINT_ is to tell docker what command to use when we run docker run command. _CMD_ is the command to run.

If all OK, you will see bellow output.

```text
❯ docker run -it deno-app
Download https://deno.land/std/examples/welcome.ts
Warning Implicitly using latest version (0.64.0) for https://deno.land/std/examples/welcome.ts
Download https://deno.land/std@0.64.0/examples/welcome.ts
Check https://deno.land/std@0.64.0/examples/welcome.ts

Welcome to Deno 🦕
```

## 4. Running Todo App

We have completed our 90% job. Let's run our _todo-app_. For that, we need to copy all the required files to the docker image. We can do either using _COPY_ command or mount volume. I will show both way of doing it. However, recoomended is to use `COPY`. This is to decouple your sytem from Docker.

**Using COPY:**

:::info Forbidden path outside the build context
Since docker does not allow file to be coppied from out of the foder. We have to copy files from [/examples/ssr](https://github.com/deepakshrma/deno-by-example/tree/master/examples/ssr/) folder to [examples/docker-app](https://github.com/deepakshrma/deno-by-example/tree/master/examples/docker-app).
:::

```bash {3}
pwd
#something/examples/docker-app
cp -r ../ssr ./ssr
```

Update Dockerfile to copy files.

```docker title="Dockerfile" {6,7}
FROM frolvlad/alpine-glibc:alpine-3.11_glibc-2.31
RUN apk update && apk add curl
RUN curl -fsSL https://deno.land/x/install/install.sh | sh && mv /root/.deno/bin/deno /bin/deno
WORKDIR /app
COPY ssr/ /app/
ENTRYPOINT ["deno"]
CMD ["run", "--allow-net", "--allow-read", "--unstable", "server.tsx", "-c", "tsconfig.json"]
```

**Build and Run:**

```bash {2,9}
docker build -t deno-app .
docker run -d deno-app

## output
# f75f6e55675b1f8558fcfe2c34cd25f366aacc4b0f6b5df7d7982bf3cea3c46d

## Note down the output of last command

docker logs f75f6e55675b

```

:::note
If you notice, for first time we have run docker in **detteched** mode ie. `docker run -d`. Since we are running a **long running server**, We should dettached the Docket image from our sytem.
:::

**Explaination:** Since we are running docker container in detteched mode. We have to grab **container-id** to see logs of the last docker run.

```bash
docker ps | grep todo-app

docker logs f75f6e55675b
```

You can see output like _server is running on http://localhost:8000/_. However, when you try to access [http://localhost:8000/](http://localhost:8000/) on browser. You cant access it. This is becuase docker runs container in _isolation_. It does not _implecite_ expose ports out of the container. To do so, We have to _expose port_ in docker file and same time need _bind to_ external port while running command.

```docker title="Dockerfile" {3-5}
## rest of the command

WORKDIR /app
EXPOSE 8080
COPY ssr/ /app/

## rest of the command
```

**Build and run with port binding:**

```bash
docker build -t deno-app .
docker run -d -p8000:8000 deno-app
```

Open [http://localhost:8000/](http://localhost:8000/) in browser, You can see running todo app.

## Bonus

I told you, That you can run file without COPY command using valume mount. For that lets remove COPY commad from Dockerfile.

```docker title="Dockerfile" {3-5}
FROM frolvlad/alpine-glibc:alpine-3.11_glibc-2.31
RUN apk update && apk add curl
RUN curl -fsSL https://deno.land/x/install/install.sh | sh && mv /root/.deno/bin/deno /bin/deno
WORKDIR /app
EXPOSE 8080
ENTRYPOINT ["deno"]
CMD ["run", "--allow-net", "--allow-read", "--unstable", "server.tsx", "-c", "tsconfig.json"]
```

```bash
docker build -t deno-app .
docker run -d -p8000:8000 -v ${PWD}/ssr:/app  deno-app
```

**Hope you like this tutorial. Please follow me and clap for me on medium:** [https://deepak-v.medium.com/](https://deepak-v.medium.com//)

## Some Usefull Docker Commands

:::tip Docker
Docker Images: `docker images ls`

Running Process: `docker ps`

Stop container: `docker stop container-id`

Stop all container time before: `docker ps | grep " minutes ago" | awk '{print $1}' | xargs docker stop`

Remove images: `docker rmi -f id1 id2 id3`

Logs: `docker logs f75f6e55675b`
:::

**Source:**

You can get all source code on GitHub.
[examples/docker-app](https://github.com/deepakshrma/deno-by-example/tree/master/examples/docker-app)
