import safeEval from "https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/safe_eval.ts";
const stdinContent = await Deno.readAll(Deno.stdin);
const response = new TextDecoder().decode(stdinContent);

const [key = ""] = Deno.args;
try {
  console.log(safeEval(key, JSON.parse(response)));
} catch (err) {
  console.log(response);
}
