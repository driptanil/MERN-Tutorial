const registerUser = (request, response) => {
    const userName = request.body.name;
    const userEmail = request.body.email;
    const userPassword = request.body.password;

    response.json({
        success: true,
    })
}

module.exports = registerUser;