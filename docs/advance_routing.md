---
id: advanced-routing
title: Creating Routing/Controller in Deno Server(From Scratch)
sidebar_label: Routing From Scratch
description: How to create Route and Controller in Deno Server(From Scratch)
keywords:
  - beginner
  - started
  - route
  - controller
  - server
image: https://source.unsplash.com/Bdv1dYP6V9g/800x450
---

## Introduction

Deno provides a standard package `std/http` for working with `http/https` server. However, the routing request to different Control is not supported out-of-box. Demo model is same as NodeJs. Saying that, Deno insist you to use module like `oak`. I will also recommend you to use this module.
Here in this tutorial, I will explain how you can build Super cool Router from scratch.

:::note 💡Learn More:
https://github.com/oakserver/oak
:::

![routing](https://source.unsplash.com/Bdv1dYP6V9g/800x450)

Before creating a routing, lets create a basic server.

```typescript title="examples/basic_server.ts"
import { serve, Response } from "https://deno.land/std/http/server.ts";

const PORT = 8080;
const server = serve({ port: PORT });
for await (const req of server) {
  req.respond({ body: "hello world" }); // respond response
}
```

Run this `deno run examples/basic_server.ts`

Open browser at [http://localhost:8080/](http://localhost:8080/). You will see `hello world`.

:::info 🔥Fact:
If you have not read my [hello-world](https://decipher.dev/deno-by-example/01-hello-world) Article. I will recommend you to please read it.
:::

**Breakdown:**

Here, whenever you request anything to server. It will return you `hello world` in response. Adding route will be done inside `for-each` loop. Let's add first route.

```typescript title="examples/basic_server.ts" {8-14}
import { serve, Response } from "https://deno.land/std/http/server.ts";

const PORT = 8080;
const server = serve({ port: PORT });
console.log(`🚀 Server is running on http://localhost:${PORT}`);

for await (const req of server) {
  switch (req.url) {
    case "/users":
      req.respond({ body: "Hello Mr. Unknown" });
      break;
    default:
      req.respond({ body: "404! Page Not Found!" }); // respond response
  }
}
```

Run this `deno run examples/basic_server.ts`

Open browser at [http://localhost:8080/](http://localhost:8080/users). You will see `Hello Mr. Unknown`. If you try some other URL, you will see `404! Page Not Found!`.

**Breakdown:**

1. Get the current request URL using `req.url`
2. Switch between url `/users` and respond accordingly.

We can do something like this. The only issue with this approach. We can't have dynamic route like `/users/1234` where is `1234` is the id of user.

As solution, Instead of directly matching one to one. We can use `regex` to match `URL` and get the `id` of user.

```typescript title="examples/basic_server.ts" {10-20}
import { serve, Response } from "https://deno.land/std/http/server.ts";

const PORT = 8080;
const server = serve({ port: PORT });

const users = [{ name: "deepak" }, { name: "Sam" }, { name: "Britney" }];

console.log(`🚀 Server is running on http://localhost:${PORT}`);
for await (const req of server) {
  const userRegex = /^\/users\/(\d+)/;
  const match = userRegex.exec(req.url);

  if (match) {
    const userId = Number(match[1]);

    if (users[userId]) {
      req.respond({ body: JSON.stringify(users[userId]) });
    } else {
      req.respond({ body: "USER NOT FOUND" });
    }
  } else {
    req.respond({ body: "404! Page Not Found!" }); // respond response
  }
}
```

Run this `deno run examples/basic_server.ts`

Open browser at [http://localhost:8080/](http://localhost:8080/users/1). You will see `{"name":"Sam"}`. If you try URL with `id 5`, you will see `USER NOT FOUND`.

**Breakdown:**
Using regex match we achieve what we had needed. However, writing regex of complex pattern could be an issue. Let's use our first library as file. We will use `path-to-regexp` from `pillarjs`. This is the same library used by `express server` in nodejs.

```typescript title="examples/basic_server.ts" {2}
import { serve, Response } from "https://deno.land/std/http/server.ts";
import { pathToRegexp } from "https://raw.githubusercontent.com/pillarjs/path-to-regexp/master/src/index.ts";

const PORT = 8080;
const server = serve({ port: PORT });

const users = [{ name: "deepak" }, { name: "Sam" }, { name: "Britney" }];

console.log(`🚀 Server is running on http://localhost:${PORT}`);
for await (const req of server) {
  const userRegex = pathToRegexp("/users/:id");
  const match = userRegex.exec(req.url);

  /// rest of the code
}
```

Re-run app again. You will see no difference. Nice!

Here adding too much business logic in same `for-each` loop can leads to many issue. The major concern is maintenance. So let's move to `controller/handler`.

```typescript title="examples/basic_server.ts" {15-21}
import { serve, ServerRequest } from "https://deno.land/std/http/server.ts";

// Rest of the code

for await (const req of server) {
  const userRegex = pathToRegexp("/users/:id");
  const match = userRegex.exec(req.url);
  if (match) {
    handleUsers(req, match);
  } else {
    req.respond({ body: "404! Page Not Found!" }); // respond response
  }
}

function handleUsers(req: ServerRequest, match: RegExpExecArray) {
  const userId = Number(match[1]);
  if (users[userId]) {
    req.respond({ body: JSON.stringify(users[userId]) });
  } else {
    req.respond({ body: "USER NOT FOUND" });
  }
}
```

If you run app and request app with same input as previous. You will see same output. We just move the User logic to separate `handleUsers` function.

Nice! All good. However, managing these many route path and regex is tough task and hard to maintain as well.

As solution we can create a list/array of routes. The interface for `Route` could be

```typescript title="interface Route"
interface Route {
  name: string; // name of the route, just for tracking
  path: string; // path pattern for handler
  handler: (req: ServerRequest, match: RegExpExecArray) => void; // handler to handle request
}
```

Let's create two handler. One for users, another one for posts.

:::note Note:
For time being, I am using static data from [users.ts](https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/users.ts) and [posts.ts](https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/posts.ts)
:::

```typescript title="handleUsers"
function handleUsers(req: ServerRequest, match: RegExpExecArray) {
  const userId = Number(match[1]);
  if (users[userId]) {
    req.respond({ body: JSON.stringify(users[userId]) });
  } else {
    req.respond({ body: "USER NOT FOUND" });
  }
}
```

```typescript title="handlePosts"
function handlePosts(req: ServerRequest, match: RegExpExecArray) {
  const postId = Number(match[1]);
  if (posts[postId]) {
    req.respond({ body: JSON.stringify(posts[postId]) });
  } else {
    req.respond({ body: "POST NOT FOUND" });
  }
}
```

```typescript title="Routes"
const routes: Route[] = [
  { name: "posts", path: "/posts/:id", handler: handlePosts },
  { name: "users", path: "/users/:id", handler: handleUsers },
];
```

Create a handler for `Page Not Found`.

```typescript title="Page Not Handler"
function routeNotFound(req: ServerRequest) {
  req.respond({ body: "404! Page Not Found!" });
}
```

To match `URL pattern`, We can loop over all the routes and call the respective handler.

```typescript title="router"
function router(req: ServerRequest) {
  for (let route of routes) {
    const reg = pathToRegexp(route.path);
    const match = reg.exec(req.url);
    if (match) return route.handler(req, match);
  }
  return routeNotFound(req);
}
```

The complete code will be like

```typescript title="examples/basic_server.ts"
import { serve, ServerRequest } from "https://deno.land/std/http/server.ts";
import { pathToRegexp } from "https://raw.githubusercontent.com/pillarjs/path-to-regexp/master/src/index.ts";
import users from "./users.ts";
import posts from "./posts.ts";

const PORT = 8080;
const server = serve({ port: PORT });

console.log(`🚀 Server is running on http://localhost:${PORT}`);

interface Route {
  name: string; // name of the route, just for tracking
  path: string; // path pattern for handler
  handler: (req: ServerRequest, match: RegExpExecArray) => void; // handler to handle request
}

const routes: Route[] = [
  { name: "posts", path: "/posts/:id", handler: handlePosts },
  { name: "users", path: "/users/:id", handler: handleUsers },
];

for await (const req of server) {
  router(req);
}

function handleUsers(req: ServerRequest, match: RegExpExecArray) {
  const userId = Number(match[1]);
  if (users[userId]) {
    req.respond({ body: JSON.stringify(users[userId]) });
  } else {
    req.respond({ body: "USER NOT FOUND" });
  }
}
function handlePosts(req: ServerRequest, match: RegExpExecArray) {
  const postId = Number(match[1]);
  if (posts[postId]) {
    req.respond({ body: JSON.stringify(posts[postId]) });
  } else {
    req.respond({ body: "POST NOT FOUND" });
  }
}

function router(req: ServerRequest) {
  for (let route of routes) {
    const reg = pathToRegexp(route.path);
    const match = reg.exec(req.url);
    if (match) return route.handler(req, match);
  }
  return routeNotFound(req);
}

function routeNotFound(req: ServerRequest) {
  req.respond({ body: "404! Page Not Found!" });
}
```

**Don't worry, We will further break down the entire code and do required clean up.**

**Breakdown:**

1. In above sample, The `router` function will be called on each request.
2. This router function will loop on each `Route` from `routes` and try to match.
3. Once match found, it will call respective handler.

:::info Code:
Code can be found at [examples/basic_server.ts](https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/basic_server.ts)
:::

**Let's give final touch and break into files.**

Create a [controllers.ts](https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/controllers.ts) file

```typescript title="examples/controllers.ts"
import { ServerRequest } from "https://deno.land/std/http/server.ts";
import { getUserById } from "./users.ts";
import { getPostById } from "./posts.ts";
const fromRoot = (str: string) => Deno.cwd() + "/static/" + str;

export const findUserById = (req: ServerRequest, match: RegExpExecArray) => {
  const id = Number(match[1]);
  const user = getUserById(id);
  if (user) {
    req.respond({ body: JSON.stringify(user) });
  } else {
    req.respond({ body: "POST NOT FOUND" });
  }
};

export const findPostById = (req: ServerRequest, match: RegExpExecArray) => {
  const id = Number(match[1]);
  const post = getPostById(id);
  if (post) {
    req.respond({ body: JSON.stringify(post) });
  } else {
    req.respond({ body: "POST NOT FOUND" });
  }
};

export async function staticFile(req: ServerRequest, match: RegExpExecArray) {
  // handle files
  if (match) {
    const filename = match[1];
    const strPath = fromRoot(filename);
    try {
      req.respond({ body: await Deno.open(strPath) });
    } catch (err) {
      routeNotFound(req);
    }
  } else {
    return routeNotFound(req);
  }
}
export function routeNotFound(req: ServerRequest) {
  req.respond({ body: "404! Page Not Found!" });
}
```

:::note Bonus:
I have added static page `handler[staticFile]` for static assets.
:::

Move all router logic in [router.ts](https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/router.ts) file

```typescript title="examples/router.ts"
import { ServerRequest } from "https://deno.land/std/http/server.ts";
import { pathToRegexp } from "https://raw.githubusercontent.com/pillarjs/path-to-regexp/master/src/index.ts";
import { findUserById, findPostById, routeNotFound } from "./controllers.ts";

interface Route {
  name: string; // name of the route, just for tracking
  path: string; // path pattern for handler
  handler: (req: ServerRequest, match: RegExpExecArray) => void; // handler to handle request
}

const routes: Route[] = [
  { name: "static", path: "/static/:page*", handler: staticFile },
  { name: "posts", path: "/posts/:id", handler: findUserById },
  { name: "users", path: "/users/:id", handler: findPostById },
];

function router(req: ServerRequest) {
  for (let route of routes) {
    const reg = pathToRegexp(route.path);
    const match = reg.exec(req.url);
    if (match) return route.handler(req, match);
  }
  return routeNotFound(req);
}

export default router;
```

**Finally the main server with request logger:** [final_server.ts](https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/controllers.ts)

```typescript title="examples/final_server.ts"
import { serve } from "https://deno.land/std/http/server.ts";
import router from "./router.ts";
import { Logger } from "https://raw.githubusercontent.com/deepakshrma/deno_util/master/logger.ts";

const logger = new Logger();

const PORT = 8080;
const server = serve({ port: PORT });

console.log(`🚀 Server is running on http://localhost:${PORT}`);

for await (const req of server) {
  logger.info("/%s:\t%s \t\t%s", req.method, req.url, new Date().toISOString());
  router(req);
}
```

Run this `deno run examples/final_server.ts`

Open browser at [http://localhost:8080/static/home.html](http://localhost:8080/static/home.html). You will see `Magic`.

![magic_server](https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/final_server.png)

Good Job! Thanks for support in advance. Please do follow me, subscribing and clapping on [https://deepak-v.medium.com/](https://deepak-v.medium.com/)

### All working examples can be found in my Github

[https://github.com/deepakshrma/deno-by-example/tree/master/examples](https://github.com/deepakshrma/deno-by-example/tree/master/examples)
