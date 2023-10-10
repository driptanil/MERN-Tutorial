const validation = (schema) => async (request, response, next) => {
	const body = request.body;

	try {
		await schema.validate(body);
		next();
		// next() is used to keep moving forward
	} catch (error) {
		return response.status(422).json({ error: error });
	}
};

module.exports = validation;
