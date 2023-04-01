const registerUser = (request, response) => {
    const userName = request.body.name;
    const userEmail = request.body.email;
    const userPassword = request.body.password;

    response.json({
        success: true,
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
    })
}

module.exports = registerUser;