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
    req.respond({ body: "USER NOT FOUND" });
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
