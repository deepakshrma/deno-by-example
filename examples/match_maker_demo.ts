import { sprintf, printf } from "https://deno.land/std/fmt/printf.ts";
import { Logger } from "https://raw.githubusercontent.com/deepakshrma/deno_util/master/logger.ts";
import { message } from "./match_maker.ts";

const [name1 = "", name2 = ""] = Deno.args;
const { error } = new Logger();
error(message(name1, name2, Math.floor(Math.random() * 40 + 60)));
