const fs = require("fs");

// console.log(fs);

fs.readFile("./sample.txt", "utf-8", (error, data) => {
    if (error) {
        throw error;
    }
    console.log(data);
})

console.log("I am First");