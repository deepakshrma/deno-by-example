const { args } = Deno;

interface UserInput {
  name?: string;
}

function main({ name }: UserInput) {
  console.log(`Hello ${name ? name : "world"}`);
}
main({ name: args[0] });
