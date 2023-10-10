const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { response } = require("express");

// establishing connection with MongoDB
mongoose
	.connect("mongodb://127.0.0.1:27017/productStore", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to MongoDB successfully");
	})
	.catch((error) => {
		console.log(error);
	});

// creating app using express
const app = express();

// this used to avoid getting `UNDEFINED` when ever a json is console.log()
app.use(bodyParser.urlencoded({ extended: false }));

// this is used to avoid getting the POST received data
app.use(express.json());

const PORT = 4000;
const HOST = "localhost";

const productSchema = new mongoose.Schema({
	name: String,
	description: String,
	price: Number,
});

const validation = require("./middleware/validateMiddleware");
const validateSchema = require("./validation/validateProduct");

const Product = new mongoose.model("Product", productSchema);

app.post(
	"/api/v1/product/new",
	validation(validateSchema),
	async (request, response) => {
		const product = await Product.create(request.body);

		response.status(201).json({
			success: true,
			product,
		});
	}
);

app.get("/api/v1/products", async (request, response) => {
	const products = await Product.find();

	response.status(200).json({ success: true, products });
});

app.put(
	"/api/v1/product/:id",
	validation(validateSchema),
	async (request, response) => {
		let product = await Product.findById(request.params.id);

		if (!product) {
			return response.status(500).json({
				success: false,
				message: "Product not found",
			});
		}

		product = await Product.findByIdAndUpdate(
			request.params.id,
			request.body,
			{
				new: true,
				useFindAndModify: true,
				runValidators: true,
			}
		);

		response.status(200).json({
			success: true,
			product,
		});
	}
);

app.delete("/api/v1/product/:id", async (request, response) => {
	const product = await Product.findById(request.params.id);

	if (!product) {
		return response.status(500).json({
			success: false,
			message: "Product not found",
		});
	}
	await product.deleteOne();

	response.status(200).json({
		success: true,
		product,
	});
});

app.listen(PORT, HOST, () => {
	console.log(`Server is working: http://${HOST}:${PORT}`);
});
