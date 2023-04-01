const express = require("express");
const bodyParser = require("body-parser");
const {response} = require("express");


const PORT = 4000;
const HOST = "localhost"
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json())

app.get("/api/v1/userdata", (request, response) => {
    response.json({
        name: "driptanil",
        email: 'driprecovery@gmail.com',
        password: "thisisnotmypassword",
    })
})

app.get("*", (request, response) => {
    response.send("<h1 style='font-family: Arial; color: lightcoral'>404 Page Not Found</h1>")
})

app.post("/api/v1/register", (request, response) => {
    const userName = request.body.name;
    const userEmail = request.body.email;
    const userPassword = request.body.password;

    response.json({
        success: true,
        name: userName,
        email: userEmail,
        password: userPassword,
    })
})

app.listen(PORT, HOST, () => {
    console.log(`Server is working on https://${HOST}:${PORT}`);
})