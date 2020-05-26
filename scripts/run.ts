const [command] = Deno.args;

if (command === "g") {
  Deno.writeFileSync(
    Deno.cwd() + "/website/0x_xxxx.md",
    new TextEncoder().encode(`---
id: 0x_xxxx
title: 0x_xxxx
sidebar_label: 0x_xxxx
---

## Code
`)
  );
  Deno.writeFileSync(
    Deno.cwd() + "/examples/0x_xxxx.ts",
    new TextEncoder().encode(`\r
function main() {
  console.log("Hello world");
}
main();

export const run = main;
`)
  );
}
