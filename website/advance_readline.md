---
id: advance_readline
title: Read Line by Line as Data Stream
sidebar_label: Read Line by Line
---

`Deno` provides multiple APIs to read files. You can read the entire file using `Deno.readAll` and `Deno.readTextFile`. However, reading line by line is still not available in std library. Here in this tutorial, I will explain, How you can read the entire file line by line(Stream).

<img scr="https://deepakshrma.github.io/deno-by-example/img/data_flow.png" width="800" />

Before going to actual code, Let's understand the standard library first with examples.

## Read Id[rid]

Deno provides `Deno.open` API to open a file. This is the async API. Meaning, you need to `await`. In return you will get `File` which contains `rid`.

### Sample: open file

```typescript
// examples/06_readfile_chunk.ts
async function main(name?: string) {
  if (name) {
    const file = await Deno.open(name);
    console.log(file);
  }
}
const [fileName] = Deno.args;
main(fileName);
```

[Run]

```bash
$ deno  run --allow-read  examples/06_readfile_chunk.ts examples/tom.json

## Output:
# File { rid: 3 }
```

You can see `rid` in return. Let's use this `rid` to get the chunk of data. Reading chunk requires API `Deno.read`

### Example: 1

```typescript
// examples/06_readfile_chunk.ts
async function main(name?: string) {
  if (name) {
    const file = await Deno.open(name);
    const decoder = new TextDecoder();
    let buf = new Uint8Array(100);
    const numOfByteRead = await Deno.read(file?.rid, buf);
    console.log(numOfByteRead);
    console.log(decoder.decode(buf));
  }
}
const [fileName] = Deno.args;
main(fileName);
```

[Run]

```bash
$ deno  run --allow-read  examples/06_readfile_chunk.ts examples/tom.json

# Output
# 100
# {
#   "id": 1,
#   "version": "1.0.1",
#   "contributors": [
#     "deepak",
#     "gary"
#   ],
#   "actor": {
```

Here, as you can see, Every time you call `Deno.read` it returns the number of bytes that have been read. If `numOfByteRead` is `null` meaning it is end of file[EOF].

`new Uint8Array(100);` is Uint8Array to be filled while calling read. The buffer size could be anything. The reader will read bytes until buffer size.

If you notice, the read file is not a complete file. You need to increase the buff size to read all files.

### Example: 2

```typescript
// examples/06_readfile_chunk.ts
async function main(name?: string) {
  if (name) {
    const file = await Deno.open(name);
    const decoder = new TextDecoder();
    let buf = new Uint8Array(1000); // 353
    const numOfByteRead = await Deno.read(file?.rid, buf);
    console.log(numOfByteRead);
    console.log(decoder.decode(buf));
  }
}
const [fileName] = Deno.args;
main(fileName);
```

[Run]

```bash
$ deno  run --allow-read  examples/06_readfile_chunk.ts examples/tom.json

# Output
# 353
## JSON here..
```

Here in this example, I have increased buffer size to 1000, which is more than 353. So I can read the entire JSON file.

**[NOTE]:** You should avoid large buffer sizes. Reading a big file can create memory issues. and at the same time it will be hard to predict actual size.

To read the entire file chunk by chunk, we can use recursion on `then`able API.

### Example: 3

```typescript
// examples/06_readfile_chunk.ts
async function main(name?: string) {
  if (name) {
    const file = await Deno.open(name);
    const decoder = new TextDecoder();
    let buf = new Uint8Array(100);
    let chunk = new Uint8Array(0);
    Deno.read(file?.rid, buf).then(function readByte(numOfByteRead) {
      if (numOfByteRead) {
        chunk = _append(chunk, buf, numOfByteRead);
        Deno.read(file?.rid, buf).then(readByte);
      } else {
        console.log(decoder.decode(chunk));
      }
    });
  }
}
const [fileName] = Deno.args;
main(fileName);
```

[Run]

```bash
$ deno  run --allow-read  examples/06_readfile_chunk.ts examples/tom.json

# Output
{
  "id": 1,
  "version": "1.0.1",
  "contributors": [
    "deepak",
    "gary"
  ],
  "actor": {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "movies": [
      "Top Gun",
      "Mission: Impossible",
      "Oblivion"
    ],
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}
```

#### [Breakdown]

Here in this code, when I call `Deno.read(file?.rid, buf).then`. It will trigger a named function `function readByte(numOfByteRead)`. This will internally check for `numOfByteRead` each time. You can either append text return after decode by `decoder.decode`. I am appending as Uint8Array. To appened Uint8Array arrays, I found a good sample on `StackOverflow`.

#### [_append]

```typescript
function _append(a: Uint8Array, b: Uint8Array, numOfByteRead: number) {
  var c = new Uint8Array(a.length + numOfByteRead);
  c.set(a, 0);
  c.set(b.slice(0, numOfByteRead), a.length);
  return c;
}
```

**[NOTE]:** If you don't pass `numOfByteRead`, you may garbage value read for last time.

Nice 🙂, all looks fine. However, still we are away from reading line by line. For that we will use an async iterator.

### Basic sample for Async Iterator

```typescript
let range = {
  from: 1,
  to: 5,
  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,
      async next() {
        const value = await new Promise<number>((resolve) =>
          setTimeout(() => {
            resolve(this.current++);
          }, 1000)
        );
        if (value <= this.last) {
          return { done: false, value };
        } else {
          return { done: true };
        }
      },
    };
  },
};
(async () => {
  for await (let value of range) {
    console.log(value); // 1,2,3,4,5
  }
})();
```

[output]: `1,2,3,4,5`

Just like `Symbol.iterator`, we can use `Symbol.asyncIterator` to create an async Iterator. Since typescript supports async iterator out of the box. We can use this API. To understand more, you can read [async-iterators-generators](https://javascript.info/async-iterators-generators).


To read line by line, I have created two utility methods `_readTillDone` and `readLine`.

```typescript
const _readTillDone = async (
  rid: number,
  text: string = ""
): Promise<[string, string, boolean]> => {
  let buf = new Uint8Array(100);
  let indexOfLine = text.indexOf("\n");
  if (indexOfLine === -1) {
    const num = await Deno.read(rid, buf);
    if (num) {
      text = text + decoder.decode(buf.slice(0, num));
      return _readTillDone(rid, text);
    } else {
      return [text, "", true];
    }
  } else {
    return [text.slice(0, indexOfLine), text.slice(indexOfLine + 1), false];
  }
};

const readLine = async (fileName: string) => {
  const file = await Deno.open(fileName);
  let text = "";
  let done = false;
  return {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          const [t, rest, d] = await _readTillDone(file?.rid, text);
          if (done) {
            return { done: true, value: t };
          } else {
            text = rest;
            done = d;
            return { done: false, value: t };
          }
        },
      };
    },
  };
};
```

#### [Breakdown]

`readLine` is very simple. On each async iterator call it will call `_readTillDone` and return the line. However, \_readTillDone is a little complex. I am using `file.rid` to keep track of the file read.

Whenever i call `_readTillDone` with `file?.rid, text`. It tries to split text with `newLine`. I could not be able to find newLine. It tries to read more lines till the end. `_readTillDone` returns three parameters `[t, rest, d]`. Here `t`, text read by line,`rest` is as buffer text and `d` return as done.

***Let's complete the tutorial.
Once we have these utils, the implementation is very simple.***

### Example: Final code

```typescript
// examples/06_readfile_chunk.ts
import { readLine } from "https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/file_reader.ts";

async function main(name?: string) {
  if (name) {
    // Example 6
    const reader = await readLine(name);
    for await (let value of reader) {
      console.log(value);
    }
  }
}
const [fileName] = Deno.args;
main(fileName);
```

[Run]

```bash
$ deno  run --allow-read  examples/06_readfile_chunk.ts examples/tom.json

# Output
{
  "id": 1,
  "version": "1.0.1",
  "contributors": [
    "deepak",
    "gary"
  ],
  "actor": {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "movies": [
      "Top Gun",
      "Mission: Impossible",
      "Oblivion"
    ],
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}
```

TaDa! 👏👏 Now you can read the entire file line by line.

I hope you like this tutorial. let me know your feedback in the comment. Please support(🙏🙏) by subscribing and clapping on [medium](https://medium.com/@deepak_v/).

All working examples can be found in my Github: [https://github.com/deepakshrma/deno-by-example/tree/master/examples](https://github.com/deepakshrma/deno-by-example/tree/master/examples)
