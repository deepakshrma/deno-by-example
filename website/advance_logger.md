---
id: advance_logger
title: Building A Super Cool Colorful Logger with Deno fmt module
sidebar_label: Implementing Logger
---

Logging trace is one of the basic needs of a any `programming language`. It does not matter how good your code is, unless it is not `traceable` and `debugable`. For debugging, Logging one of the best tool. It is `fast` and `easy` to follow. If you are working on `local system` This could be your best mate while `debugging`.

> NICE QUOTE:
>
> **LOG WELL, LIVE WELL**

![image ](https://cdn-media-1.freecodecamp.org/images/EMv0ZRmR82v5oUZ4ZNllx29LNYgqZoUwjua-)

Here in this tutorial, I will explain. How you can build a super cool logger with just minimal code(few line of the code). That is also without using any third party tool.

## Prerequisites

1. Deno: Install Deno if you don't have it [installation](https://deno.land/#installation)
2. Basic Typescript: [basic-types](https://www.typescriptlang.org/docs/handbook/basic-types.html)

Just like Nodejs/JavaScript. Logging can be done using `console.log`

```js
console.log("Hello World");
```

Nice! However formatting log message is big pain is javascript. `console.log` partially implement function like `printf` from `c++` or `java`. But doesn't not support all the features. So how we should log formatted message.

### Formatted Log in JS

> Using String template.

```js
const name = "Deepak";
const salary = 2000;
console.log(`My name is ${name} and my salary is ${salary}$`);

// My name is Deepak and my salary is 2000$
```

Cool! But we can see for each parameter in template, we have to you a constant/variable. It will be hard to create variables just to log something.

> Using Vargs in `console.log`.

```js
const name = "Deepak";
const salary = 2000;
console.log(`My name and salary are `, name, salary);

// My name and salary are  Deepak 2000

const person = { name: "deepak", salary: 2000 };
console.log(`Info: `, person);
// Info:  { name: 'deepak', salary: 2000 }
```

The above statement also valid in javascript. We can pass any number of vargs to `console.log` However, we can't arrange the message with variables. This is very useful to print anything just by separating value from comma. But this can not be use for logging something useful.

### Issues with `vargs`

1. Unpredicted implementation
2. Error-prone

**Let's see in example:**

```js
const person = { name: "deepak", salary: 2000 };
const address = { street: "221B baker street london", zip: 20000 };
console.log("Person info: " + person + " Address: " + address);
// Person info: [object Object] Address: [object Object]
```

If you try to append the object with string it convert to string which is [object Object] for object and appended.

**_Solution_**

```js
const person = { name: "deepak", salary: 2000 };
const address = { street: "221B baker street london", zip: 20000 };
console.log(
  "Person info: " +
    JSON.stringify(person) +
    " Address: " +
    JSON.stringify(address)
);
// Person info: {"name":"deepak","salary":2000} Address: {"street":"221B baker street london","zip":20000}

// Or

console.log("Person info: ", person, " Address: ", address);
// Person info:  { name: 'deepak', salary: 2000 }  Address:  { street: '221B baker street london', zip: 20000 }
```

> Using Partial printf like feature in `console.log`.

```js
const person = { name: "deepak", salary: 2000 };
const address = { street: "221B baker street london", zip: 20000 };
console.log(
  "Person info: name: %s salary: %d and Address: street: %s ",
  person.name,
  person.salary,
  address.street
);
// Person info: name: deepak salary: 2000 and Address: street: 221B baker street london
```

Here you can see, `console.log` does support few `printf` like function. However that is limited till `%s` [string], `%d` [number]. Mozilla does support Precision formatting something like `%.2f`.

### Introduction to PrintF

Deno is highly inspired by Go. Just like Go, Deno also has `fmt` module in standard library. This module/package is combination of multiple sub-modules like `printf`.

> **Note:** fmt module is still in work-in-progress status according to developers.

**Importing printf:**

```typescript
import { printf } from "https://deno.land/std/fmt/printf.ts";
```

**Definition of printf:**

```typescript
export function printf(format: string, ...args: unknown[]): void {
  const s = sprintf(format, ...args);
  Deno.stdout.writeSync(new TextEncoder().encode(s));
}
```

`printf` takes string and `vars` of unknown. Format is to define how the format of the string will look like. args could be anything according to to format you wanted.

**Sample of printf:**

```typescript
const person = { name: "deepak", salary: 2000 };
printf(`Person Name: "%s" and Salary: %d\n`, person.name, person.salary);

// Person Name: "deepak" and Salary: 2000
```

According to Deno docs:
**_The other formats(Verbs) are:_**

The following verbs are supported:

| Verb  | Meaning                                                        |
| ----- | -------------------------------------------------------------- |
| `%`   | print a literal percent                                        |
| `t`   | evaluate arg as boolean, print `true` or `false`               |
| `b`   | eval as number, print binary                                   |
| `c`   | eval as number, print character corresponding to the codePoint |
| `o`   | eval as number, print octal                                    |
| `x X` | print as hex (ff FF), treat string as list of bytes            |
| `e E` | print number in scientific/exponent format 1.123123e+01        |
| `f F` | print number as float with decimal point and no exponent       |
| `g G` | use %e %E or %f %F depending on size of argument               |
| `s`   | interpolate string                                             |
| `T`   | type of arg, as returned by `typeof`                           |
| `v`   | value of argument in 'default' format (see below)              |
| `j`   | argument as formatted by `JSON.stringify`                      |

**_Verbs with Width and Precision_**

    %9f    width 9, default precision
    %.9f   default width, precision 9
    %8.9f  width 8, precision 9
    %8.f   width 9, precision 0

**Sample of Width and Precision:**

```typescript
const person = { name: "deepak", salary: 2000.2 };
printf(`Person Name: "%s" and Salary: %9.2f\n`, person.name, person.salary);

// Person Name: "deepak" and Salary:   2000.20
```

You can write more complex example like padding and get the value the `vargs` passed to printf function.

**Sample of Padding:**

```typescript
const person = { name: "deepak", salary: 2000.2 };

// Padding Zero

printf(`Salary: %09.2f\n`, person.salary);

// Salary: 002000.20
```

The conversion of rgb to hex color is so simple.

```typescript
const r = 5,
  g = 255,
  b = 100;
printf("RGB TO HEX: #%02x%02x%02x\n", r, g, b);

// RGB TO HEX: #05ff64
```

**More Complex- Use index of `vargs` values:**

```typescript
const person = { name: "deepak", salary: 2000.2 };

printf(
  "Person has salary %d, which(%[1]d) is less than average salary %d\n",
  person.salary,
  4000
);

// Person has salary 2000.2, which(2000.2) is less than average salary 4000
```

Read More: https://deno.land/std/fmt

### Colors in Log

> THE DOOR IS RED HERE THE WRITER USES THE COLOR TO EXPRESS HIS ANGER

![colors](https://pics.me.me/the-door-is-red-here-the-writer-uses-the-color-38911952.png)

The another issue with `console.log`, It does not support colors out of box. We end-up adding library like [colors](https://www.npmjs.com/package/colors) in NodeJs. Browser has some additional support for `css` console.log. But that will not work in NodeJs

More: https://developer.mozilla.org/en-US/docs/Web/API/console

Thanks to Deno's Colors module. Now we can easily color our life.

**Importing colors:**

```typescript
import { red, yellow, gray, cyan } from "https://deno.land/std/fmt/colors.ts";
```

> Note: Color module also support rgb colors

```typescript
import { rgb8, bgRgb8, rgb24 } from "https://deno.land/std/fmt/colors.ts";
```

**From Deno source:**

```typescript
/** Set background color using paletted 8bit colors.
 * https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit */
export function bgRgb8(str: string, color: number): string {
  return run(str, code([48, 5, clampAndTruncate(color)], 49));
}
```

> ### Now, We have all basic tool. Let's finish the Logger implementation.

![Finish IT](https://www.memesmonkey.com/images/memesmonkey/19/19d6564114a19af49a8e40e3338adb46.jpeg)

### Create a Basic Logger Class

**Define interfaces:**

```typescript
import { sprintf } from "https://deno.land/std/fmt/printf.ts";
import { red, yellow, gray, cyan } from "https://deno.land/std/fmt/colors.ts";

type LogLevel = 0 | 1 | 2 | 3;
interface LoggerOptions {
  level: LogLevel;
  format?: string;
}
```

**Define default values for log level and formatter:**

```typescript
const initialOptions = { level: 0, format: "%s\n" };
class Logger {
  private _level: LogLevel;
  private _format: string;
  constructor(options: LoggerOptions = initialOptions as LoggerOptions) {
    const { level, format } = { ...initialOptions, ...options };
    this._level = level;
    this._format = format;
  }
}
```

**Define getter setter for level and format:**

```typescript
const initialOptions = { level: 0, format: "%s\n" };
class Logger {
  private _level: LogLevel;
  private _format: string;
  /// rest of the code
  get level(): LogLevel {
    return this._level;
  }
  set level(_l: LogLevel) {
    this._level = _l;
  }
  get format(): string {
    return this._format;
  }
  set format(_f: string) {
    this._format = _f;
  }
}
```

> Note: This is to hide the definition. You can remove setter if you don't want user to modify the values.

**Add basic methods:**

```typescript
const initialOptions = { level: 0, format: "%s\n" };
class Logger {
  private _level: LogLevel;
  private _format: string;
  /// rest of the code
  log(...messages: unknown[]) {
    console.log(gray(sprintf(this.format, ...messages)));
  }
  info(...messages: unknown[]) {
    console.log(cyan(sprintf(this.format, ...messages)));
  }
  warn(...messages: unknown[]) {
    console.log(yellow(sprintf(this.format, ...messages)));
  }
  error(...messages: unknown[]) {
    console.log(red(sprintf(this.format, ...messages)));
  }
}
```

**Sample Run:**

```typescript
import { Logger } from "./logger.ts";

const logger = new Logger({ level: 0, format: "Logger: %s" });
logger.log("This is log message");
logger.info("This is info");
logger.warn("This is warn");
logger.error("This is error");
```

**Output:**

<img src="https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/logger_sample_01.png" width="800" height="400" />

If you notice, i am using `sprintf` instead of `printf`. Since i want the full control on the printing message like adding colors and use dynamic formatter. I have to use sprintf instead of printf.

**Let's allow user to modify format on runtime:**

```typescript
const initialOptions = { level: 0, format: "%s\n" };
class Logger {
  private _level: LogLevel;
  private _format: string;
  /// rest of the code
  log(format: string, ...messages: unknown[]) {
    if (messages.length === 0) {
      messages = [format];
      format = this.format;
    }
    console.log(gray(sprintf(format, ...messages)));
  }
  info(format: string, ...messages: unknown[]) {
    if (messages.length === 0) {
      messages = [format];
      format = this.format;
    }
    console.log(cyan(sprintf(format, ...messages)));
  }
  warn(format: string, ...messages: unknown[]) {
    if (messages.length === 0) {
      messages = [format];
      format = this.format;
    }
    console.log(yellow(sprintf(format, ...messages)));
  }
  error(format: string, ...messages: unknown[]) {
    if (messages.length === 0) {
      messages = [format];
      format = this.format;
    }
    console.log(red(sprintf(format, ...messages)));
  }
}
```

**Sample Run2:**

```typescript
import { Logger } from "./logger.ts";

const logger = new Logger({ level: 0, format: "Logger: %s" });
logger.log("This is log message");
logger.warn("This is warn");

logger.log("Overridden Info- Method: //%s %s [response time]: %05f ms" , "POST", "https://www.google.com", 100);
logger.error("Overridden Error- Error: //%s" , new Error("This is error").message);
```

**Output:**

<img src="https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/logger_sample_02.png" width="800" height="400" />

#### Final Touch: Use of log levels

```typescript
const initialOptions = { level: 0, format: "%s\n" };
class Logger {
  private _level: LogLevel;
  private _format: string;
  /// rest of the code
  log(format: string, ...messages: unknown[]) {
    if (this.level > 0) return;
    if (messages.length === 0) {
      messages = [format];
      format = this.format;
    }
    console.log(gray(sprintf(format, ...messages)));
  }
  /// rest of the code
}
```

**Final Run:**

```typescript
import { Logger } from "./logger.ts";

const logger = new Logger({ level: 0, format: "Logger: %s" });
logger.log("This is log message");
logger.warn("This is warn");

logger.log("Overridden Info- Method: //%s %s [response time]: %05f ms" , "POST", "https://www.google.com", 100);
logger.error("Overridden Error- Error: //%s" , new Error("This is error").message);

// Change level

logger.level = 2;

// This will not print
logger.log("Overridden Info- Method: //%s %s [response time]: %05f ms" , "POST", "https://www.google.com", 100);

// This will print
logger.error("Overridden Error- Error: //%s" , new Error("This is error").message);

// Change default format
logger.level = 1;

logger.format = "This is something new version: v%s";

logger.info("1.0.1");
logger.info("1.0.2");
```

**Output:**

<img src="https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/logger_sample_03.png" width="800" height="400" />

> <Nice! Good Job. We have done it!!>

![good job](https://sayingimages.com/wp-content/uploads/you-did-good-job-meme.jpg)

#### The entire implementation of `Logger class` can be found in

[examples/logger.ts](https://github.com/deepakshrma/deno-by-example/blob/master/examples/logger.ts)

#### How to use sample can be found in

[examples/advance_logger.ts](https://github.com/deepakshrma/deno-by-example/blob/master/examples/advance_logger.ts)

> For more example, visit:
<https://deepakshrma.github.io/deno-by-example/>

*I hope you like this tutorial. let me know your feedback in the comment. Please support(🙏🙏) by subscribing and clapping on [https://medium.com/@deepak_v](https://medium.com/@deepak_v).*
