import { walk, walkSync } from "https://deno.land/std/fs/mod.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";
// import minimatch from "https://cdn.pika.dev/minimatch@^3.0.4";

async function main(args: string[]) {
  const { type, t, name, not, ...rest } = parse(Deno.args);
  console.log({ type, t, name, not, ...rest });
  // console.log(minimatch("bar.foo", "*.foo", {}));
  // const files = await Deno.readDir(".");
  // for await (let file of files) console.log(file);

  async function printFilesNames() {
    for await (const entry of walk("./", {
      maxDepth: 2,
      includeFiles: true,
      includeDirs: true,
      followSymlinks: false,
      // exts: ["md"],
      match: [/.*\.ts/],
      // skip: [/node_modules/g],
    })) {
      console.log(entry.path);
    }
  }

  printFilesNames().then(() => console.log("Done!"));
  // console.log(`Hello ${name ? name : "world"}`);
}
main(Deno.args);
