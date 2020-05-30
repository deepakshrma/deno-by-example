import { Logger } from "https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/logger.ts";

import { printf } from "https://deno.land/std/fmt/printf.ts";
// import { Logger } from "./logger.ts";

const person = { name: "deepak", salary: 2000.2 };
printf(`Person Name: "%s" and Salary: %d\n`, person.name, person.salary);

// Person Name: "deepak" and Salary: 2000.2

// Width and Precision
printf(`Person Name: "%s" and Salary: %9.2f\n`, person.name, person.salary);

// Person Name: "deepak" and Salary:   2000.20

// Dynamic Width and Precision

printf("%*.*f\n", 9, 8, 456.0);

// 456.00000000

// Padding Zero

printf(`Salary: %09.2f\n`, person.salary);

// Salary: 002000.20

const r = 5,
  g = 255,
  b = 100;
printf("RGB TO HEX: #%02x%02x%02x\n", r, g, b);

// RGB TO HEX: #05ff64

//More Complex: Use index of vargs values
printf(
  "Person has salary %d, which(%[1]d) is less than average salary %d\n",
  person.salary,
  4000
);

// Person has salary 2000.2, which(2000.2) is less than average salary 4000

const logger = new Logger({ level: 0, format: "Logger: %s" });
logger.log("This is log message");
logger.info("This is info message");

logger.error("This is error message");

/// Custom formatter
logger.info("My name is %s and my salary is: %d", "Deepak", 2000);
logger.warn("My name is %s and my salary is: %d", "Deepak", 2000);
logger.error("My name is %s and my salary is: %d", "Deepak", 2000);

// Change level
logger.level = 2;

// This will not print
logger.info("My name is %s and my salary is: %d", "Deepak", 2000);

// This will print
logger.warn("My name is %s and my salary is: %d", "Deepak", 2000);

// Set logger.level to not accepted value, // Error

// logger.level = 5; // Error

// Change default format
logger.level = 1;
logger.format = "This is something new version: v%s";

logger.info("1.0.1");
logger.warn("1.0.2");

logger.log("This is log message");
logger.warn("This is warn");

logger.warn(
  "Overridden Info- Method: //%s %s [response time]: %05f ms",
  "POST",
  "https://www.google.com",
  100
);
logger.error(
  "Overridden Error- Error: //%s",
  new Error("This is error").message
);

// Change level

logger.level = 2;

logger.log(
  "Overridden Info- Method: //%s %s [response time]: %05f ms",
  "POST",
  "https://www.google.com",
  100
);
logger.error(
  "Overridden Error- Error: //%s",
  new Error("This is error").message
);

// Change default format
logger.level = 1;

logger.format = "This is something new version: v%s";

logger.info("1.0.1");
logger.warn("1.0.2");
