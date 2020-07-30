import { serve, Response } from "https://deno.land/std/http/server.ts";

const PORT = 8080;
const server = serve({ port: PORT });
for await (const req of server) {

  // req.respond({ body: "Hello World\n" });

  const response: Response = {}; // Create a Response instance, init with {}
  
  response.headers = new Headers(); // Create Headers object and assign to response
  response.headers.set("content-type", "application/json"); // set header as json

  const body = { message: "hello world" }; // Create response body

  // req.respond(body) // Error, cant assign object to body

  response.body = JSON.stringify(body); // Serialize to string bytes.

  req.respond(response); // respond response
}