import { Application, Router } from "https://deno.land/x/oak@v6.0.1/mod.ts";

import { React, ReactDOMServer } from "./dep.ts";

import App from "./app.tsx";

const app = new Application();

const router = new Router();
router.get("/", handlePage);

let todos: Map<number, any> = new Map();

function init() {
  todos.set(todos.size + 1, { id: Date.now(), task: "build an ssr deno app" });
  todos.set(todos.size + 1, {
    id: Date.now(),
    task: "write blogs on deno ssr",
  });
}
init();
router
  .get("/todos", (context: any) => {
    context.response.body = Array.from(todos.values());
  })
  .get("/todos/:id", (context: any) => {
    if (
      context.params &&
      context.params.id &&
      todos.has(Number(context.params.id))
    ) {
      context.response.body = todos.get(Number(context.params.id));
    } else {
      context.response.status = 404;
    }
  })
  .post("/todos", async (context: any) => {
    const body = context.request.body();
    if (body.type === "json") {
      const todo = await body.value;
      todos.set(Date.now(), todo);
    }
    context.response.body = { status: "OK" };
  });

const { files } = await Deno.emit("./client.tsx", { bundle: "module" });
const clientJS = files["deno:///bundle.js"] || "";

const serverrouter = new Router();
serverrouter.get("/static/client.js", (context: any) => {
  context.response.headers.set("Content-Type", "text/html");
  context.response.body = clientJS;
});
app.use(router.routes());
app.use(serverrouter.routes());

app.use(router.allowedMethods());

console.log("server is running on http://localhost:8000/");
await app.listen({ port: 8000 });

function handlePage(ctx: any) {
  try {
    const body = ReactDOMServer.renderToString(
      <App todos={[]} /> // change here to pass todos as props
    );
    ctx.response.body = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Document</title>
    <script>
      window.__INITIAL_STATE__ = {"todos": ${JSON.stringify(
        Array.from(todos.values())
      )}};
    </script>
  </head>
  <body >
    <div id="root">${body}</div>
    <script  src="http://localhost:8000/static/client.js" defer></script>
  </body>
  </html>`;
  } catch (error) {
    console.error(error);
  }
}
