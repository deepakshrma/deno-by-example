---
id: 02-greet-from-cli
title: Greet From CLI
description: Take user input as command line arguments
keywords:
  - beginner
  - helloworld
  - CLI
image: https://source.unsplash.com/46T6nVjRc2w/800x450
---

Taking user input can be difficult task. You can take user input as command line argument or you can read `input stream(STDIN)`

![command line arguments](https://source.unsplash.com/46T6nVjRc2w/800x450)

## Take user input as command line arguments

Create file examples/02_greet_from_cli.ts

```typescript
const { args } = Deno;

interface UserInput {
  name?: string;
}

function main({ name }: UserInput) {
  console.log(`Hello ${name ? name : "world"}`);
}
main({ name: args[0] });
```

Run Using deno run by passing name

```bash
$ deno run examples/02_greet_from_cli.ts Deepak
#[Output] Hello Deepak

$ deno run examples/02_greet_from_cli.ts
#[Output] Hello World
```
