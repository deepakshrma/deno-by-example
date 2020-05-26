import { readChunk, readLine } from "./file_reader.ts";

function _append(a: Uint8Array, b: Uint8Array, numOfByteRead: number) {
  var c = new Uint8Array(a.length + numOfByteRead);
  c.set(a, 0);
  c.set(b.slice(0, numOfByteRead), a.length);
  return c;
}

async function main(name?: string) {
  if (name) {
    const file = await Deno.open(name);
    const decoder = new TextDecoder();
    /**
     * 
     // Example 1
    let buf = new Uint8Array(100);
    const numOfByteRead = await Deno.read(file?.rid, buf)
    console.log(numOfByteRead)
    console.log(decoder.decode(buf))
    */

    /**
     * 
     // Example 2
    let buf = new Uint8Array(1000); // 776
    const numOfByteRead = await Deno.read(file?.rid, buf)
    console.log(numOfByteRead)
    console.log(decoder.decode(buf))
    */

    /**
     * 
     // Example 3
    Deno.read(file?.rid, buf).then((numOfByteRead) => {
      console.log(decoder.decode(buf));
    });
    */
    /**
     * 
     // Example 4
    let buf = new Uint8Array(100); // 776
    Deno.read(file?.rid, buf).then(function readByte(numOfByteRead) {
      console.log(numOfByteRead);
      // Deno.read(file?.rid, buf).then(readByte)
    });
    */
    /**
     * // Example 5
     * 
      let buf = new Uint8Array(100); // 776
      let chunk = new Uint8Array(0);
      Deno.read(file?.rid, buf).then(function readByte(numOfByteRead) {
        if (numOfByteRead) {
          chunk = _append(chunk, buf, numOfByteRead);
          Deno.read(file?.rid, buf).then(readByte);
        } else {
          console.log(decoder.decode(chunk));
        }
      });
     */
    /**
     // Example 6
      const reader = await readChunk(name);
      for await (let value of reader) {
        console.log(value);
      }
     */

    // Example 6
    const reader = await readLine(name);
    for await (let value of reader) {
      console.log(value);
    }
  }
}
const [fileName] = Deno.args;
main(fileName);

// export const run = main;
