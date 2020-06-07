import { readLines } from "https://deno.land/std/io/mod.ts";
import { Logger } from "https://raw.githubusercontent.com/deepakshrma/deno_util/master/logger.ts";

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
