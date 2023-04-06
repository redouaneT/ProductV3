<template>
	<section class="contact-section">
		<div class="container">
			<div class="row mb-4">
				<div class="col-md-6">
					<h1>Products</h1>
				</div>
				<div class="col-md-6 text-right">
					<button
						type="button"
						class="btn btn-custom btn-primary-custom"
						@click="handleAddProductClick"
					>
						Add Product
					</button>
				</div>
			</div>
			<div class="row">
				<div>
					<ProductCard
						:product="product"
						@update="onUpdateProduct"
						@delete="onDeleteProduct"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue"

export default {
	components: {
		ProductCard,
	},
	data() {
		return {
			product: {
				id: 1,
				name: "Product 1",
				description: "This is a product",
				price: 10.99,
				category: "Category 1",
				img_url: "https://picsum.photos/200/300",
			},
			// Add more products as needed
		}
	},
	methods: {
		handleAddProductClick() {
			// Handle add product click event
		},
		onUpdateProduct(id) {
			console.log("Update product with id: " + id)
		},
		onDeleteProduct(id) {
			console.log("Delete product with id: " + id)
		},
	},
}
</script>

<style scoped>
/* Add any custom CSS styles here */
</style>
