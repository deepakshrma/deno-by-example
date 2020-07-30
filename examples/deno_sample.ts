import { Application, Middleware } from "https://deno.land/x/oak/mod.ts";
import {
  Logger,
  LoggerOptions,
} from "https://deno.land/x/deno_util/logger.ts";

const app = new Application();
const parseToken = (request: any, response: any, tokenString = "") => {
  const tokens = tokenString.split(" ").reduce((tokens: any, token: string) => {
    switch (token) {
      case ":method":
        tokens[token] = request.method.toString();
        break;
      case ":remote-addr":
        tokens[token] = request.headers.get("host");
        break;
      case ":referrer":
      case ":referer":
        tokens[token] = request.headers.get("referer");
        break;
      case ":user-agent":
        tokens[token] = request.headers.get("user-agent");
        break;
      case ":url":
        tokens[token] = request.url.pathname;
        break;
      case ":status":
        tokens[token] = response.status.toString();
        break;
      case ":content-length":
        tokens[token] = response.body?.toString().length.toString() || "0";
        break;
    }
    return tokens;
  }, {});
  return tokens;
};
export const requestTraceMiddleware = (
  {
    type = "tiny",
    loggerOptions = {},
  }: {
    type?: "combined" | "common" | "dev" | "short" | "tiny";
    loggerOptions?: LoggerOptions;
  } = { type: "tiny" }
): Middleware => {
  const logger = new Logger(loggerOptions);
  return async function (ctx, next) {
    let formatString;
    switch (type) {
      case "short":
        formatString =
          ":remote-addr :method :url :status :content-length :response-time";
        break;
      case "dev":
        formatString = ":method :url :status :response-time - :content-length";
        break;
      case "common":
        formatString = ":remote-addr - :method :url :status :content-length";
        break;
      case "combined":
        formatString =
          ":remote-addr - :method :url :status :content-length :referrer :user-agent";
        break;
      default:
        formatString = ":method :url :status :content-length :response-time";
        break;
    }
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    const { request, response } = ctx;
    let tokens = parseToken(request, response, formatString);
    tokens[":response-time"] = "- " + ms.toString() + "ms";

    logger.info(
      formatString.replace(/(:[\w-]+)/g, (_: any, matched: any) => {
        return tokens[matched] + " ";
      })
    );
  };
};
app.use(requestTraceMiddleware());
app.use(requestTraceMiddleware({ type: "combined" }));
app.use(requestTraceMiddleware({ type: "common" }));
app.use(requestTraceMiddleware({ type: "dev" }));
app.use(requestTraceMiddleware({ type: "short" }));

app.use((ctx) => {
  ctx.response.body = "Hello world!";
});

await app.listen(":8080");
