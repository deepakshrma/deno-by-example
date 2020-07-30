import { Client } from "https://deno.land/x/mysql/mod.ts";
async function main() {
  const client = await new Client().connect({
    hostname: "127.0.0.1",
    username: "deepak",
    // db: "deepakv",
    poolSize: 3, // connection limit
    password: "password",
    port:3306,
  });
  await client.execute(`CREATE DATABASE IF NOT EXISTS deepakv`);
  await client.execute(`USE deepakv`);

//   await client.execute(`DROP TABLE IF EXISTS users`);
//   await client.execute(`
//     CREATE TABLE users (
//         id int(11) NOT NULL AUTO_INCREMENT,
//         name varchar(100) NOT NULL,
//         created_at timestamp not null default current_timestamp,
//         PRIMARY KEY (id)
//     ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
// `);
  // let result = await client.execute(`INSERT INTO users(name) values(?)`, [
  //   "deepak",
  // ]);
  await client.execute(`INSERT INTO users(name) values(?)`, [
    "deepak2",
  ]);
  // console.log(result);
}
main();
