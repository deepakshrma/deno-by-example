---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.
>
> --Deno Team

:::note Note
This document mainly copied content from official site. However, there is some enhancement to minimize the content of valuable assets.
:::

## Download and install

**Using Shell (macOS and Linux):**

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Using Homebrew (macOS):

```bash
brew install deno
```

:::note More:
https://deno.land/manual/getting_started/installation
:::

## Setup your environment

**VS CODE:**

The beta version of [vscode_deno](https://github.com/denoland/vscode_deno) is published on the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno). Please report any issues.

**Using command line interface:**

```bash
code --install-extension denoland.vscode-deno
```

:::note More:
https://deno.land/manual/getting_started/setup_your_environment
:::

### Create Alias for `deno run`

```bash title="~/.bash_profile"
alias denorun="deno run -A"
```

**This will help and ease the running application in local.**

:::danger AVOID IN PROD
Please don't use in actual enviroment.
:::

### Hello World Program

```typescript title="examples/01_hello_world.ts" {2}
function main() {
  console.log(`Hello "world"`);
}
main();
```

**How to run example:**

```bash
denorun examples/01_hello_world.ts
## OR
deno run examples/01_hello_world.ts
```
