const yup = require("yup");

const productSchema = yup.object({
	name: yup.string().required().min(5).max(30),
	description: yup.string().min(10).max(100).required(),
	price: yup.number().required().max(10),
});

module.exports = productSchema;
