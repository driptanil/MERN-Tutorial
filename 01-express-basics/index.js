const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./routes/userRoutes")

const PORT = 4000;
const HOST = "localhost"
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json())
app.use("/", router);

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname + "/index.html"));
})

app.get("/about", (request, response) => {
    response.send("<h1 style='font-family: Arial,serif'>About Page</h1>")
})

app.get("*", (request, response) => {
    response.send("<h1 style='font-family: Arial,serif; color: lightcoral'>404 Page Not Found</h1>")
})
app.listen(PORT, HOST, () => {
    console.log(`Server is working on https://${HOST}:${PORT}`);
})