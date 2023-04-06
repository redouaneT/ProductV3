const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const corsOption = {
	origin: "http://localhost:8081",
	credentials: true,
}

app.use(cors(corsOption))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Sample data (use a database in a real-world application)
const products = [
	{
		id: 1,
		name: "Product 1",
		img_url: "https://source.unsplash.com/random?featured&query=innovation",
		description: "This is a product",
		price: 10.99,
		category_id: 1,
	},
	{
		id: 2,
		name: "Product 2",
		img_url: "https://source.unsplash.com/random?featured&query=innovation",
		description: "This is a product",
		price: 10.99,
		category_id: 2,
	},
	{
		id: 3,
		name: "Product 3",
		img_url: "https://source.unsplash.com/random?featured&query=innovation",
		description: "This is a product",
		price: 10.99,
		category_id: 3,
	},
	// Add more products as needed
]

const categories = [
	{
		id: 1,
		name: "category 1",
	},
	{
		id: 2,
		name: "category 2",
	},
	{
		id: 3,
		name: "category 3",
	},
	{
		id: 4,
		name: "category 4",
	},
]

// Get all categories
app.get("/api/category", (req, res) => {
	res.json(categories)
})

// Get all products
app.get("/api/product", (req, res) => {
	res.json(products)
})

// Add a product
app.post("/api/product", (req, res) => {
	const product = req.body
	product.id = products.length + 1
	products.push(product)
	res.json(product)
})

// Get a product by its ID
app.get("/api/product/:id", (req, res) => {
	const id = parseInt(req.params.id)
	const product = products.find((product) => product.id === id)
	res.json(product || {})
})

// Update a product by its ID
app.put("/api/product/:id", (req, res) => {
	const id = parseInt(req.params.id)
	const updatedProductData = req.body

	console.log(updatedProductData)

	const productIndex = products.findIndex((product) => product.id === id)
	if (productIndex !== -1) {
		products[productIndex] = {
			...products[productIndex],
			...updatedProductData,
		}
		res.json(products[productIndex])
	} else {
		res.status(404).json({ error: "Product not found" })
	}
})

// Delete a product by its ID
app.delete("/api/product/:id", (req, res) => {
	const id = parseInt(req.params.id)
	const productIndex = products.findIndex((product) => product.id === id)

	if (productIndex !== -1) {
		products.splice(productIndex, 1)
		res.json({ message: "Product deleted" })
	} else {
		res.status(404).json({ error: "Product not found" })
	}
})

// Start the server on port 8080
const PORT = 8080
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
