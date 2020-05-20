const evalReg = /(\.)|(\[(\d)\])/;
const safeEval = (key: string, obj: any) => {
  let lastKey;
  let match;
  do {
    if (lastKey) {
      if (match && match[2]) {
        obj = obj[lastKey][match[3]];
      } else {
        obj = obj[lastKey];
      }
    }
    match = evalReg.exec(key);
    if (!match) {
      lastKey = key;
      break;
    } else {
      lastKey = key.substr(0, match.index);
      key = key.slice(!match[3] ? match.index + 1 : match.index + 3);
    }
  } while (match);
  if (lastKey) {
    obj = obj[lastKey];
  }
  return obj;
};
/*
// Examples:
const obj = {
  id: 1,
  version: "1.0.1",
  contributors: ["deepak", "gary"],
  actor: {
    name: "Tom Cruise",
    age: 56,
    "Born At": "Syracuse, NY",
    Birthdate: "July 3 1962",
    movies: ["Top Gun", "Mission: Impossible", "Oblivion"],
    photo: "https://jsonformatter.org/img/tom-cruise.jpg",
  },
};
console.log(JSON.stringify(obj, null, 2));
console.log(safeEval("id", obj));
console.log(safeEval("contributors", obj));
console.log(safeEval("contributors[1]", obj));
console.log(safeEval("actor.movies[2]", obj));
*/
export default safeEval;
