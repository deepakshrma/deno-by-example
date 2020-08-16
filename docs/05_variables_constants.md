---
id: 05-variables-constants
title: Variables and Constants
description: Constants and Variables in Deno
keywords:
  - beginner
  - variables
  - constants
image: https://source.unsplash.com/FMAVXJXIdP8/800x450
---

![variables](https://source.unsplash.com/FMAVXJXIdP8/800x450)

Constant can be created using `const` and variable can be created using `let`.

Sample:

```typescript
function main() {
  const constant = 10;
  // constant = 12 // Error, Cannot assign to 'constant' because it is a constant.
  console.log(constant);
  const object = {
    name: "deepak",
  };
  object.name = "updated"; // No Error in updating property

  // object = {} // Error, Cannot assign to 'object' because it is a constant.
  // Cant change reference

  // Same for Array

  const array = [10, 12];
  array[0] = 12;

  // array = [] // Error
  // Cant change reference

  let variable = 10;
  variable = 12; // No issue

  let arrVar = [12];
  arrVar = [];
}
main();
```

More:

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

How to run example:

```bash
deno run examples/05_variables_constants.ts
```
