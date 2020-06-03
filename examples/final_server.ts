import { serve } from "https://deno.land/std/http/server.ts";
import router from "./router.ts";
import { Logger } from "https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/logger.ts";

const logger = new Logger();

const PORT = 8080;
const server = serve({ port: PORT });

console.log(`🚀 Server is running on http://localhost:${PORT}`);

for await (const req of server) {
  logger.info("/%s:\t%s \t\t%s", req.method, req.url, new Date().toISOString());
  router(req);
}
