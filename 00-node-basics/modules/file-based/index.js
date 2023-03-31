// console.log("Hello World")

const a = 100;

const b = {
    average: (a, b) => {
        console.log((a + b) / 2);
    },
    percent: (a, b) => {
        console.log((a / b) / 100);
    }
}

module.exports = {a, b}