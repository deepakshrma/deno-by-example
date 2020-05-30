import { sprintf } from "https://deno.land/std/fmt/printf.ts";
import { red, yellow, gray, cyan } from "https://deno.land/std/fmt/colors.ts";

// Copyright 2018-2020 https://github.com/deepakshrma. All rights reserved. MIT license.

/**
 * LogLevel: Enum => 0 | 1 | 2 | 3
 */
type LogLevel = 0 | 1 | 2 | 3;

interface LoggerOptions {
  level: LogLevel;
  format?: string;
}

/**
 * Example: How to use
 *
 *
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

 */

/**
 * Default option:
 * initialOptions = { level: 0, format: "%s\n" };
 */

const initialOptions = { level: 0, format: "%s\n" };

/**
 * Logger
 *
 */
class Logger {
  /**
   * #_level: LogLevel
   */
  private _level: LogLevel;
  /**
   * #_format: string
   */
  private _format: string;
  /**
   * constructor() // Default value { level: 0, format: "%s\n" }
   *
   * @param options : LoggerOptions
   */
  constructor(options: LoggerOptions = initialOptions as LoggerOptions) {
    const { level, format } = { ...initialOptions, ...options };
    this._level = level;
    this._format = format;
  }
  /**
   * getter for _level
   */
  get level(): LogLevel {
    return this._level;
  }
  /**
   * setter for _level
   */
  set level(_l: LogLevel) {
    this._level = _l;
  }
  /**
   * getter for _format
   */
  get format(): string {
    return this._format;
  }
  /**
   * setter for _format
   */
  set format(_f: string) {
    this._format = _f;
  }
  /**
   * log: Prints log when log level is 0 with gray color
   *
   * @param format override default format or use as message
   * @param messages accepts vargs any as printf/scanf
   */
  log(format: string, ...messages: unknown[]) {
    if (this.level > 0) return;
    if (messages.length === 0) {
      messages = [format];
      format = this.format;
    }
    console.log(gray(sprintf(format, ...messages)));
  }
  /**
   * info: Prints log when log level is 0 with cyan color
   *
   * @param format override default format or use as message
   * @param messages accepts vargs any as printf/scanf
   */
  info(format: string, ...messages: unknown[]) {
    if (this.level > 1) return;
    if (messages.length === 0) {
      messages = [format];
      format = this.format;
    }
    console.log(cyan(sprintf(format, ...messages)));
  }
  /**
   * warn: Prints log when log level is 0 with yellow color
   *
   * @param format override default format or use as message
   * @param messages accepts vargs any as printf/scanf
   */
  warn(format: string, ...messages: unknown[]) {
    if (this.level > 2) return;
    if (messages.length === 0) {
      messages = [format];
      format = this.format;
    }
    console.log(yellow(sprintf(format, ...messages)));
  }
  /**
   * error: Prints log when log level is 0 with red color
   *
   * @param format override default format or use as message
   * @param messages accepts vargs any as printf/scanf
   */
  error(format: string, ...messages: unknown[]) {
    if (messages.length === 0) {
      messages = [format];
      format = this.format;
    }
    console.log(red(sprintf(format, ...messages)));
  }
}

export { Logger };
