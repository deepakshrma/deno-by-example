import safeEval from "https://gist.githubusercontent.com/deepakshrma/325d734d55f44060fdab2d16d28aac11/raw/517c9dd145c3df4b0d5585ecce4f8b35954cd1e3/safe_eval.ts";
const stdinContent = await Deno.readAll(Deno.stdin);
const response = new TextDecoder().decode(stdinContent);

const [key = ""] = Deno.args;
try {
  console.log(safeEval(key, JSON.parse(response)));
} catch (err) {
  console.log(response);
}
