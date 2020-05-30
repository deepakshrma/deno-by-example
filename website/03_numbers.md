---
id: 03-numbers
title: Numbers
sidebar_label: Numbers
---

Since deno is supporting Typescript which is super-set of the JavaScript. It support all the syntax from the JavaScript. However, Deno is a more then that. It also support APIs for file reading and network and etc.

Here below are some examples, that explains how numbers behave in Deno[Javascript].

There are some Gotcha in Number as it is in JavaScript.

Sample:

```typescript
function main() {
  const num = 10;
  const num2: number = 20; // same as above but declarative

  let num3: number;
  num3 = num + num2;
  console.log(num3);

  // num3 = num + "20" // Error, Type 'string' is not assignable to type 'number'
  num3 = num + Number("20"); // No error, cast string to number
  console.log(num3);

  num3 = num + parseInt("20", 10); // same as above

  console.log(num3);

  let flt = 10.0;

  console.log(flt === 10); // true

  console.log(flt === 10.1); // false

  console.log(typeof flt, typeof 10); //number number

  console.log(typeof NaN, typeof Infinity, typeof -Infinity); // number number number

  console.log(NaN === NaN); // false

  console.log(1.2 + 1.8); // 3 NOT 3.0

  console.log(1.2 + 1.8 === 3); // true
}
main();
```

Things to be noted as in JS, deno also has same number for int and float number. NaN, Infinity are some special NaN.

More:

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

How to run example:

```bash
deno run examples/03_numbers.ts
```
