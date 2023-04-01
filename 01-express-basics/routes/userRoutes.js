const express = require("express");
const registerUser = require("../post/userController");

const router = express.Router()

router.route("/api/v1/register")
    .post(registerUser)
    .get((request, response) => {
        response.send("wow")
})


module.exports = router;