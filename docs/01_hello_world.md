---
id: 01-hello-world
title: Hello World
description: Hello World Program, Run your first Deno Server
keywords:
  - beginner
  - helloworld
  - server
image: https://source.unsplash.com/iY6QMkP66mI/800x450
---

## Introduction

Deno is design to keeping web in mind. As Deno team mentioned. Deno is to

- Provide Secure Defaults
- Browser compatible
- Be able to serve HTTP efficiently

![hello](https://source.unsplash.com/iY6QMkP66mI/800x450)

Deno provide standard package `std/http` for working with http/https server. This includes an HTTP client and an HTTP server. In this example i will show how simple it is, to create a webserver.

### Import serve from http module

```typescript
import { serve } from "https://deno.land/std/http/server.ts";
```

### Create a server instance to listen on port 8080

```typescript {3}
import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 8080 });
```

### Create request handler

```typescript title="examples/01_hello_world.ts" {7-9}
import { serve } from "https://deno.land/std/http/server.ts";

const PORT = 8080;
const server = serve({ port: PORT });
console.log(`Your server is running on http://localhost:${PORT}/`);

for await (const req of server) {
  req.respond({ body: "Hello World\n" });
}
```

**Run App:**

```bash
denorun examples/01_hello_world.ts

#OR

deno run --allow-net --allow-read examples/01_hello_world.ts
```

:::note
In my first command i am using `denorun`. It is alias, created for dev environment. If you have't read my get started tutorial, I will recommend you to read it [getting-started](/deno-by-example/getting-started)
:::

Open browser at [http://localhost:8080/](http://localhost:8080/). You will see `hello world`.

**Breakdown:**

When you create an instance of serve. It return an [async generator](https://davidwalsh.name/async-generators) server. We can wait forever client to connect using for-await loop. And respond to client using `req.respond` method. `respond` expects `Response` object.

`for await (const req of server)`

You can read more about async generator [here](https://javascript.info/async-iterators-generators).

:::note allow-net
As mentioned earlier, Deno is build for security. By default network access is not allowed. You need to pass `--allow-net` as argument.
:::

### Respond a JSON

When you respond a request, by default no header is assign to response. You need to set header to response a JSON object. Let's see in example.

```typescript title="examples/01_hello_world.ts" {6,8-9,11,13,15}
import { serve, Response } from "https://deno.land/std/http/server.ts";

const PORT = 8080;
const server = serve({ port: PORT });
for await (const req of server) {
  const response: Response = {}; // Create a Response instance, init with {}

  response.headers = new Headers(); // Create Headers object and assign to response
  response.headers.set("content-type", "application/json"); // set header as json

  const body = { message: "hello world" }; // Create response body

  response.body = JSON.stringify(body); // Serialize to string bytes.

  req.respond(response); // respond response
}
```

**Run App:**

```bash
denorun examples/01_hello_world.ts

#OR

deno run --allow-net --allow-read examples/01_hello_world.ts
```

Open browser at [http://localhost:8080/](http://localhost:8080/). You will see `{"message":"hello world"}`.

**Breakdown:**
The Response interface look like as below.

```typescript
export interface Response {
  status?: number;
  headers?: Headers;
  body?: Uint8Array | Reader | string;
  trailers?: () => Promise<Headers> | Headers;
}
```

`body` can only accept `Uint8Array | Reader | string`. So we need to serialize the object to jSON string.

:::note Read More:
You can go to https://deno.land/std/http to read more about `http` module
:::

:::info Examples:
You can find all example at https://github.com/deepakshrma/deno-by-example/blob/master/examples/
:::
