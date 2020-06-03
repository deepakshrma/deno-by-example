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
