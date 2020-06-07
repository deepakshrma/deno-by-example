---
id: lottery-game
title: Take input from user | Lottery Game
sidebar_label: Lottery Game
---

This tutorial we will build a CLI Lottery game app. For this we will use Deno's `readLines` and Logger that i have created. If you want to learn more about Logger implementation. Please visit: [advanced-logger](https://deepakshrma.github.io/deno-by-example/advanced-logger).

<img src="http://www.comparelotto.com/assets/Uploads/Articles/lottery-results2.jpg" width="800" />

## Taking input from user

To take input, We can use stdin stream from Deno as `Deno.stdin`. However, reading stream is very tough task [Read My Blog](https://deepakshrma.github.io/deno-by-example/advanced-readline). We can take help from readLines function. This will read stream of bytes and return whenever it found `new line chars \n`.

```ts title="lottery_game.ts" {4,5}
import { readLines } from "https://deno.land/std/io/mod.ts";

function main() {
  const data = readLines(Deno.stdin).next();
  console.log(data);
}

main();
```

**Run:**

```bash
deno run examples/lottery_game.ts
```

Type test and then **[ENTER]⏎**

**Output:**

```text
Promise { <pending> }
test
```

Here if you have noticed, `.next()` after readLines. readLines is async iterator. So to get the value you have to call `next()`. This will return promise. To get value form it, we need to `await` for it.

```ts {4}
import { readLines } from "https://deno.land/std/io/mod.ts";

async function main() {
  const { value: input } = await readLines(Deno.stdin).next();
  console.log("You have entered: " + input);
}

main();
```

Run again.
**Output:**

```text
test
You have entered: test
```

Let's use logger to print in color.

```ts title="lottery_game.ts"
import { readLines } from "https://deno.land/std/io/mod.ts";
import { Logger } from "https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/logger.ts";

async function main() {
  const logger = new Logger();
  const { value: input } = await readLines(Deno.stdin).next();
  logger.info("You have entered: " + input);
}

main();
```

You will see same output but in `cyan` color. Cool!

So in this lottery game, We will ask user to `enter a number`. If guessed number matches the lottery number then game will end. Else user has to enter `another number`. This game will run till user enter lottery number.

:::note Note:
To loop, We will use do-while loop.
:::

```ts title="lottery_game.ts" {12-13,15}
// rest of the code

async function main() {
  const logger = new Logger();
  let matched = false;
  do {
    logger.warn("Guess the number: [1-10]");

    const { value } = await readLines(Deno.stdin).next();
    logger.info("You have guessed: %d\n", value);

    const random = Math.ceil(Math.random() * 10);
    logger.info("Lottery number: %d\n", random);

    matched = Number(value) === random;
  } while (matched !== true);
}

main();
```

**Output:**

```text
Guess the number: [1-10]
3
You have guessed: 3
Lottery number: 2
Guess the number: [1-10]
4
You have guessed: 4
Lottery number: 4
```

**Breakdown:**

We are taking input from user. Same time we are generating number using `Math.random`. First time, when user enter number `3`. It does not match generated lottery number `2`. Game asks user to enter again. Soon user enter 4, it matches the newly generated number 4. Game exit.

Let's make it more interactive. We will add some virtual delay to show we are generating number. And user can exit game anytime while pressing `q`. We will do some error validation too. So that user should not enter something not expected.

```ts title="lottery_game.ts" {4,9,14-18,19-25,29-30,36-44}
import { readLines } from "https://deno.land/std/io/mod.ts";
import { Logger } from "https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/logger.ts";

const delay = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const logger = new Logger();
  let matched = false;
  let LIMIT = 10;
  do {
    logger.warn(`Guess the number: [1-${LIMIT}], Press 'q' to exit!`);
    let { value: guess } = await readLines(Deno.stdin).next();

    guess = guess.trim();
    if (guess === "q") {
      logger.info("Thanks for playing this game! xiè xie!");
      Deno.exit(0);
    }

    guess = Number(guess);
    if (!guess || guess < 0 || guess > LIMIT) {
      // check for NaN, repeat
      logger.error(`You have wrong number. Please enter number [1-${LIMIT}]\n`);
      continue;
    }

    logger.info("You have guessed: %d\n", guess);

    logger.warn("Generating a number...");
    await delay();

    const random = Math.ceil(Math.random() * LIMIT);
    // logger.info("Lottery number: %d\n", random);

    // hints
    const diff = guess - random;
    if (diff > 0) {
      logger.info("too high!!");
    } else if (diff < 0) {
      logger.info("too low!!");
    } else {
      matched = true;
      logger.warn("Bingo!! You have won Zoker Lottery! Enjoy!\n");
    }
  } while (matched !== true);
}

main();
```

Run, You will see output like.

![lottery_game](https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/lottery-game.png)

**Breakdown:**

1. `delay` is just a helping function to give delay
2. `guess = guess.trim();` to clean up number
3. `guess = Number(guess);` to convert in number and validate it
4. `await delay();` virtual delay for 1 second.
5. `too high!!` and `too low!!` to just give hint

I was lucky enough, I will lottery in `5-6 try`. Haha! You can make harder, by increasing LIMIT to higher number Or removing hint to the user.

Thanks! If you like this tutorial. Please follow me, subscribe and clap for me on [https://medium.com/@deepak_v](https://medium.com/@deepak_v)

### All working examples can be found in my Github

[https://github.com/deepakshrma/deno-by-example/tree/master/examples](https://github.com/deepakshrma/deno-by-example/tree/master/examples)
