<template>
	<section class="contact-section">
		<div class="container">
			<div class="row mb-4">
				<div class="col-md-6">
					<h1>Products</h1>
				</div>
				<div class="col-md-6 text-right">
					<router-link
						:to="{ name: 'add-product' }"
						class="btn btn-custom btn-primary-custom"
					>
						Add Product
					</router-link>
				</div>
			</div>
			<div class="row">
				<div
					v-for="product in products"
					:key="product.id"
					class="col-md-4 col-sm-6 col-xs-12 mb-4"
				>
					<ProductCard :product="product" @delete="handleDeleteProduct" />
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
			products: [
				{
					id: 1,
					name: "Product 1",
					description: "This is a product",
					price: 10.99,
					category: "Category 1",
					img_url: "https://picsum.photos/200/300",
				},
				{
					id: 2,
					name: "Product 1",
					description: "This is a product",
					price: 10.99,
					category: "Category 1",
					img_url: "https://picsum.photos/200/300",
				},
				{
					id: 3,
					name: "Product 1",
					description: "This is a product",
					price: 10.99,
					category: "Category 1",
					img_url: "https://picsum.photos/200/300",
				},
				// Add more products as needed
			],
		}
	},
	methods: {
		handleDeleteProduct(productId) {
			// Handle delete product event
			// ProductDataService.delete(this.id).then((response) => {
			// 	this.removeInv(this.productIndex)
			// 	this.remItem(this.product.name)
			// 	this.$router.push({ name: "home" })
			// })
			console.log("delete the product with id =" + productId)
		},
	},
}
</script>

<style scoped>
/* Add any custom CSS styles here */
</style>
