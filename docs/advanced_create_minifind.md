---
id: advanced-cli-minifind
title: Build a CLI tool | Deno CLI minifind
sidebar_label: Build MiniFind CLI
description: Deno CLI clone of Mac/Unix find
keywords:
  - advanced
  - cli
  - tool
  - grep
  - regex
image: https://source.unsplash.com/d9ILr-dbEdg/800x450
---

![find](https://source.unsplash.com/d9ILr-dbEdg/800x450)

We have seen how to create a [Greeting CLI](/02-greet-from-cli) in another tutorial. Now we will extend our knowledge and create a `full-fledged` CLI which will be partially clone of Mac/Unix `find`.

Creating CLI required below mentioned features:

1. Input command arguments parser
2. Traverse files and directory trees
3. Filter files/directory based on the arguments
4. Logger, better logging information

<img src="https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/minifind.png" width="800" />

## 1. Input command arguments parser

Taking arguments in `Deno` is very easy. Every process has `Deno.args`, which returns arguments passed to the program.

```ts title="examples/minifind.ts" {4}
async function main(args: string[]) {
  console.log(args);
}
main(Deno.args);
```

**Run:**

```bash
deno run examples/minifind.ts param1 param2
```

**Output:**

> [ "param1", "param2" ]

`Deno.args` returns array of the string passed to the program(examples/minifind.ts).

Our CLI expects params like `type`, `name`, and `help`. To get the value of these parameters. We need to parse arguments. Deno has `flags` [module](https://deno.land/std/flags/mod.ts) which help to parse and collect parameters. Let's add `parser`.

```ts title="examples/minifind.ts" {10}
import { parse } from "https://deno.land/std/flags/mod.ts";

async function main(args: string[]) {
  const {
    type,
    name,
    not,
    help,
    _: [dir = "."],
  } = parse(args);

  console.log({
    type,
    name,
    not,
    help,
    dir,
  });
}
main(Deno.args);
```

**Run:**

```bash
deno run examples/minifind.ts --help --type=f --type=d --name=".*\.ts" examples
```

**Output:**

```ts
{ type: [ "f", "d" ], name: ".*\.ts", not: undefined, help: true, dir: "examples" }
```

When you run the program with a given example, You will see the output as above. Deno parse helps you to collect all the arguments.

I have used the ES6 de-structuring feature to assign default values.

:::info
Deno parse automatically tries to collect and combine params based on patterns. Any argument pass as prefixing `--`, considered as arguments with value. If you don't pass value next to it. It will become boolean.
:::

**example1:**

```ts
console.log(parse(["--test", "t"])); // { _: [], test: "t" }
console.log(parse(["--test"])); // { _: [], test: true }
```

:::note
Things to be noted: If you pass an argument with the same param more then once. `parse` combine them in `array`. In the above example type is passed twice. That is why, `type` has value `[ "f", "d" ]`.
:::

**example2:**

```ts
console.log(parse(["--test", "t", "--test", "t2"])); // { _: [], test: [ "t", "t2" ] }
```

:::note
underscore(`_`) here is like a collection of rest params. If arguments do not follow the standard `--` or `-` prefix. All arguments collected in `_` as an array of data. We are extracting `dir` as the directory name from rest `_`.
:::

**example3:**

```ts
const { _ } = parse(["--test", "t", "examples"]);
console.log(_); // _ == [ "examples" ]
const [dir = "."] = _;
console.log(dir); // examples
```

**For more info read:** [https://deno.land/std/flags](https://deno.land/std/flags)

## 2. Traverse files and directory trees

Since now we have arguments parsed, let's add some logic to read the directory.

The first thing we can do, We can resolve the `path` or `directory` where files need to be searched. We can use the resolve method from [path module](https://deno.land/std/path).

```ts title="examples/minifind.ts"
import { parse } from "https://deno.land/std/flags/mod.ts";
import { resolve } from "https://deno.land/std/path/mod.ts";

async function main(args: string[]) {
  const {
    type,
    name,
    not,
    help,
    _: [dir = "."],
  } = parse(args);
  const dirFullPath = resolve(Deno.cwd(), String(dir));
  console.log(dirFullPath);
}
main(Deno.args);
```

**Run:**

```bash
deno run -A examples/minifind.ts examples
```

**Output:**

> /Users/xdeepakv/github/deno-by-example/examples

:::note
`resolve` require `--allow-read` permission. For the time being, I have given all permission passing flag `-A`. you can read more about [permissions](https://deno.land/manual/getting_started/permissions)
:::

`Deno.cwd()` is used to get current running path. We had to convert `dir` as a string. Since `parse` can convert it to `string | number` based on the input type.

Reading a directory can be done using `Deno.readDir`. But we are traversing the entire tree of directories and files. Writing the traverse method can be tricky. You can try by yourself.

Here, I will take the help of `walk` function from [https://deno.land/std/fs/mod.ts](https://deno.land/std/fs/mod.ts).

```ts title="examples/minifind.ts"
import { parse } from "https://deno.land/std/flags/mod.ts";
import { resolve } from "https://deno.land/std/path/mod.ts";
import { walk } from "https://deno.land/std/fs/mod.ts";

async function main(args: string[]) {
  const {
    type,
    name,
    not,
    help,
    _: [dir = "."],
  } = parse(args);
  const dirFullPath = resolve(Deno.cwd(), String(dir));
  for await (let entry of walk(dirFullPath)) {
    console.log(entry);
  }
}
main(Deno.args);
```

**Run:**

```bash
deno run -A --unstable examples/minifind.ts examples
```

**Output:**

```js
{
  path: "/Users/xdeepakv/github/deno-by-example/examples/sample_employee.csv",
  name: "sample_employee.csv",
  isFile: true,
  isDirectory: false,
  isSymlink: false
}
{
  path: "/Users/xdeepakv/github/deno-by-example/examples/06_readfile_chunk.ts",
  name: "06_readfile_chunk.ts",
  isFile: true,
  isDirectory: false,
  isSymlink: false
}
```

:::note
Since `walk` function is not a stable function. We have to use `--unstable` flag while running the example.
:::

Walk function returns an async generator of `entries`. Each entries have `name` and `path` along with other flags like `isDirectory` and `isFile`.

Nice: The toughest part has been done. Now we can read entire directories along with files in it.

### 3. Filter files/directory based on the arguments

Walk function accepts `WalkOptions` as the second argument. We can use this option to add our logic.

**Interface:**

```ts title="WalkOptions"
export interface WalkOptions {
  maxDepth?: number;
  includeFiles?: boolean;
  includeDirs?: boolean;
  followSymlinks?: boolean;
  exts?: string[];
  match?: RegExp[];
  skip?: RegExp[];
}
```

```ts title="examples/minifind.ts"
// rest of the code
async function main(args: string[]) {
  // rest of the code
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
  const options = {
    maxDepth: 2,
    includeFiles,
    includeDirs,
    followSymlinks: false,
    skip: [/node_modules/g],
  };
  for await (const entry of walk(dirFullPath, options)) {
    console.log(entry.path);
  }
}
main(Deno.args);
```

**Run:**

```bash
deno run -A --unstable examples/minifind.ts examples
```

**Output:**

```text
/Users/xdeepakv/github/deno-by-example/examples
/Users/xdeepakv/github/deno-by-example/examples/subfolder
/Users/xdeepakv/github/deno-by-example/examples/subfolder/dummy.ts
```

The default type would include both `file` and `dir` ["f","d"] . Users can pass flag -`-type=f` and `--type=d` to override behavior.

**Run- Dirs only:**

```bash
deno run -A --unstable examples/minifind.ts --type=d examples
```

**Run- Files only:**

```bash
deno run -A --unstable examples/minifind.ts --type=f examples
```

`WalkOptions` supports regexp to include and exclude patterns. We can use this to filter entries by name.

```ts title="examples/minifind.ts" {6-10,16}
/// rest of the code

async function main(args: string[]) {
  /// rest of the code

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
    console.log(entry.path);
  }
}
main(Deno.args);
```

**Run- Get all file name has logger in it:**

```bash
deno run -A --unstable examples/minifind.ts --type=f --name=".*logger.*" examples
```

Now we have working `minifind`. **Noice**!

## 4. Logger, better logging information

The last missing piece is to tell your user about your CLI. For that, we have add helping messages for users. I am using `logger-util` created by me. You can read more here[https://deno.land/x/deno_util](https://deno.land/x/deno_util).

```ts title="examples/minifind.ts" {6-10,16}
/// rest of the code
import { Logger } from "https://deno.land/x/deno_util/logger.ts";

const usesFormat = `Uses:\n\n  minifind %s`;
const logger = new Logger();

function printHelp(command: string) {
  logger.info(`Welcome to minifind [v%s]`, "1.0.0");
  logger.warn(usesFormat, command);
}
async function main(args: string[]) {
  /// rest of the code

  if (help) {
    printHelp(`--type=f --name=".*logger.*" --help examples`);
    Deno.exit(0);
  }

  /// rest of the code

  for await (const entry of walk(dirFullPath, options)) {
    logger.inverse(entry.path);
  }
}
main(Deno.args);
```

**Run with help:**

```bash
deno run -A --unstable examples/minifind.ts --help
```

**Output:**

![minifind 1](https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/minifind_1.png)

**Run with other options:**

```bash
deno run -A --unstable examples/minifind.ts --help
```

**Output:**

![minifind 1](https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/minifind_2.png)

TaDa! 👏👏 Now you know how to create a CLI.

## Bonus

Now we have working `minifind` CLI. However, we had to use `deno run` and `filename` to run the command, which is not intended/feasible. Deno provides `install` command. We can convert any program to an `executable` tool.

Let's convert our minifind to `executable`. It is very simple.

```bash
deno install -f --allow-read --unstable examples/minifind.ts
```

Once you run above command you will see output like:

```bash
Add /Users/xdeepakv/.deno/bin to PATH
    export PATH="/Users/xdeepakv/.deno/bin:$PATH"
```

If you see that, Just add `export PATH="/Users/xdeepakv/.deno/bin:$PATH"` this line to you `.bashrc` or `.bash_profile`(Depending upon your OS type). Once you add `.deno/bin` in PATH. Open a new terminal and try below mention command.

```bash
minifind --type=f --name=".*logger.*" examples
```

Now your minifind is ready to use product. :-)

_I hope you like this tutorial. let me know your feedback in the comment. Please support(🙏🙏) by subscribing and clapping on [https://deepak-v.medium.com/](https://deepak-v.medium.com/)._

All working examples can be found in my Github: [https://github.com/deepakshrma/deno-by-example/tree/master/examples](https://github.com/deepakshrma/deno-by-example/tree/master/examples)
