import {
  readLines,
  readStringDelim,
  StringReader,
  BufWriter,
  BufReader,
} from "https://deno.land/std/io/mod.ts";
import * as pkg from 'https://cdn.pika.dev/redux@^4.0.5';
// import { bodyReader } from "https://deno.land/std/http/_io.ts";
// import { ServerRequest, Response } from "https://deno.land/std/http/server.ts";
import { parse } from "https://deno.land/std/encoding/csv.ts";

console.log(pkg)

const response = await fetch(
  "https://gist.githubusercontent.com/deepakshrma/7bfd6870ca2fcf7e9121811bfb0acca9/raw/29b742e1f0540aae873cdb334426b62ccec98b34/sample_employee.csv"
);
const csvText = await response.text();
console.log(await parse(csvText, { header: true }));

const response2 = await fetch(
  "https://gist.githubusercontent.com/deepakshrma/7bfd6870ca2fcf7e9121811bfb0acca9/raw/29b742e1f0540aae873cdb334426b62ccec98b34/sample_employee.csv"
);
function responseBodyReader(response: Response): Deno.Reader {
  const buffer = new Deno.Buffer(new Uint8Array(1024));
  const streamReader = response.body!.getReader();
  return {
    async read(b: Uint8Array): Promise<number | null> {
      if (buffer.empty()) {
        const { done, value } = await streamReader.read();
        if (done) {
          return null;
        }
        buffer.grow(value!.length);
        await Deno.writeAll(buffer, value!);
      }
      return buffer.read(b);
    }
  };
}
for await (let line of readLines(responseBodyReader(response2))) {
  console.log(line);
}