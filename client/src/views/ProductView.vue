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
					<ProductCard
						:product="product"
						:categories="categories"
						@delete="DeleteProduct"
					/>
				</div>
				<div v-if="products.length === 0" class="col-12 text-center">
					<h3 class="mt-4 mb-4">No products available.</h3>
					<p>Please click the "Add Product" button to add new products.</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue"
import ProductDataService from "@/services/ProductDataService"
import CategoryDataService from "@/services/CategoryDataService"

export default {
	components: {
		ProductCard,
	},
	data() {
		return {
			products: [],
			categories: [],
		}
	},
	methods: {
		DeleteProduct(id) {
			// Handle delete product event
			ProductDataService.delete(id).then((response) => {
				this.products = this.products.filter((product) => product.id !== id)
				this.$router.push({ name: "products" })
				console.log(response)
			})
			console.log("delete the product" + id)
		},
	},
	mounted() {
		ProductDataService.getAll().then((response) => {
			this.products = response.data
		})

		CategoryDataService.getAll().then((response) => {
			this.categories = response.data
		})
	},
}
</script>

<style scoped>
/* Add any custom CSS styles here */
</style>
