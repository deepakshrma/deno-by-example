import { parse } from "https://deno.land/std/flags/mod.ts";
import { walk } from "https://deno.land/std/fs/mod.ts";
import { resolve } from "https://deno.land/std/path/mod.ts";
import { Logger } from "https://deno.land/x/deno_util/logger.ts";
const usesFormat = `Uses:\n\n  minifind %s`;
const logger = new Logger();

function printHelp(command: string) {
  logger.info(`Welcome to minifind [v%s]`, "1.0.0");
  logger.warn(usesFormat, command);
}

async function main(args: string[]) {
  const {
    type,
    name,
    not,
    help,
    _: [dir = "."],
  } = parse(args);

  if (help) {
    printHelp(`--type=f --name=".*logger.*" --help examples`);
    Deno.exit(0);
  }
  const dirFullPath = resolve(Deno.cwd(), String(dir));
  let includeFiles = true;
  let includeDirs = true;
  let types = type ? (Array.isArray(type) ? type : [type]) : ["f", "d"];
  if (!types.includes("f")) {
    includeFiles = false;
  }
  if (!types.includes("d")) {
    includeDirs = false;
  }
  let matchRegexps: RegExp[] | undefined = name
    ? (Array.isArray(name) ? name : [name]).map(
        (reg: string) => new RegExp(reg)
      )
    : undefined;
  const options = {
    maxDepth: 2,
    includeFiles,
    includeDirs,
    followSymlinks: false,
    match: matchRegexps,
    skip: [/node_modules/g],
  };
  for await (const entry of walk(dirFullPath, options)) {
    logger.inverse(entry.path);
  }
}
main(Deno.args);
