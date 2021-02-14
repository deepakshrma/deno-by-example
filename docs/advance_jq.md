---
id: advanced-jq
title: Implementing JQ equivalent in Deno
sidebar_label: Implementing JQ
description: Implementing JQ equivalent in Deno
keywords:
  - advanced
  - JQ
  - grep
  - JSON
  - parser
image: https://source.unsplash.com/SYTO3xs06fU/800x450
---

jq is like `sed` for JSON data, you can use it to slice and filter and map and transform structured data

`-- https://stedolan.github.io/jq/`

I am not going to create the entire library here. Instead, I will just give a small demo how you can read STDIN data using Deno and parse it.

![parser](https://source.unsplash.com/SYTO3xs06fU/800x450)

STDIN [Standard input Stream](<https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)>), Standard input is a stream from which a program reads its input data.

## How to create a stdin

Passing data as stdin is very easy. You can use `<` to pipe data to any program.

**Example:**

```bash
deno run program.ts < file_name.txt
deno run programe.ts < echo "data here"
```

You can also pass the output of any program to the other program using pipe`(|)`.
**Example:**

```bash
cat file_name.txt | deno run program.ts
echo "data here" | deno run programe.ts
```

## How to read stdin in Deno.

Reading stdin is very similar to reding and stream in Deno. Deno provides core API like `Deno.read` and `Deno.readAll`

```typescript
// examples/advance_jq.ts

const stdinContent = await Deno.readAll(Deno.stdin);
console.log(stdinContent);
```

**Run:**

```bash
deno run examples/advance_jq.ts < examples/advance_jq.ts
```

When you run this program, This will print some numbers (`Uint8Array`). Like other languages, stream data is buffer data encoded in buffer. To convert we need `TextDecoder`.

```typescript
// examples/advance_jq.ts

const stdinContent = await Deno.readAll(Deno.stdin);
const response = new TextDecoder().decode(stdinContent);
console.log(response);
```

**Run:**

```bash
deno run examples/advance_jq.ts < examples/advance_jq.ts
```

You can see you file data as output

## Parsing JSON

Parsing JSON and extracting value is a very tedious task. I have written a basic Extract value from an object based on key provided. Code look as below:

```typescript
const evalReg = /(\.)|(\[(\d)\])/;
const safeEval = (key: string, obj: any) => {
  let lastKey;
  let match;
  do {
    if (lastKey) {
      if (match && match[2]) {
        obj = obj[lastKey][match[3]];
      } else {
        obj = obj[lastKey];
      }
    }
    match = evalReg.exec(key);
    if (!match) {
      lastKey = key;
      break;
    } else {
      lastKey = key.substr(0, match.index);
      key = key.slice(!match[3] ? match.index + 1 : match.index + 3);
    }
  } while (match);
  if (lastKey) {
    obj = obj[lastKey];
  }
  return obj;
};
```

Here i am using `RegExp.exec`[more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) method to parse the key and extract tokens. This is a very rough sample of what JQ can do. So `safeEvel` code is also small 😁.

**How this method works:**

```typescript
const obj = {
  id: 1,
  version: "1.0.1",
  contributors: ["deepak", "gary"],
  actor: {
    name: "Tom Cruise",
    age: 56,
    "Born At": "Syracuse, NY",
    Birthdate: "July 3 1962",
    movies: ["Top Gun", "Mission: Impossible", "Oblivion"],
    photo: "https://jsonformatter.org/img/tom-cruise.jpg",
  },
};
console.log(JSON.stringify(obj, null, 2));
console.log(safeEval("id", obj));
console.log(safeEval("contributors", obj));
console.log(safeEval("contributors[1]", obj));
console.log(safeEval("actor.movies[2]", obj));
```

**OUTPUT:**

```bash
1
[ "deepak", "gary" ]
gary
Oblivion
```

As you can see, this is very much what we need. Let's complete the actual demo.

**[Note:]** Thanks to Deno `import`, now i can use this file from github directly. I don't need to create another file to import. You can do that. However, I will use network to `import`.

```typescript
import safeEval from "https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/safe_eval.ts";
const stdinContent = await Deno.readAll(Deno.stdin);
const response = new TextDecoder().decode(stdinContent);

try {
  console.log(safeEval(key, JSON.parse(response)));
} catch (err) {
  console.log(response);
}
```

But wait, from where we will get missing key ??

![alt text](https://images.unsplash.com/photo-1529247833802-700f53170380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&q=80)

(c) Photo by Paolo Nicolello on Unsplash

Deno provides direct access to arguments passed to programs using CLI. We can use `Deno.args` to get all the arguments passed to programs as an Array. Let's use it.

```typescript
import safeEval from "https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/safe_eval.ts";
const stdinContent = await Deno.readAll(Deno.stdin);
const response = new TextDecoder().decode(stdinContent);

const [key = ""] = Deno.args;
try {
  console.log(safeEval(key, JSON.parse(response)));
} catch (err) {
  console.log(response);
}
```

You can create a json(tom.json) and tryout.

```json
/* tom.json */
{
  "id": 1,
  "version": "1.0.1",
  "contributors": ["deepak", "gary"],
  "actor": {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "movies": ["Top Gun", "Mission: Impossible", "Oblivion"],
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}
```

**Run:**

```bash
$ deno run examples/advance_jq.ts "id" < examples/tom.json
## 1

$ deno run examples/advance_jq.ts "actor.name" < examples/tom.json
## Tom Cruise
```

Perfect: Let's try with curl

```bash
curl -s -k https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/tom.json | deno run  examples/advance_jq.ts "actor.movies[1]"
```

Output: Mission: Impossible

Nice! Mission: I am possible

_I hope you like this tutorial. let me know your feedback in the comment. Please support(🙏🙏) by subscribing and clapping on [https://deepak-v.medium.com/](https://deepak-v.medium.com/)._

Read More: [Deno.readAll](https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts#Deno.readAll)
