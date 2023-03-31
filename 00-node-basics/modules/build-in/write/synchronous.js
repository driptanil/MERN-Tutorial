const fs = require("fs");

const a = "This is output";

fs.writeFileSync("./sample.txt", a);

console.log("Written");
console.log("I am First");
