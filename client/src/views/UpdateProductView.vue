<template>
	<div class="product-update">
		<!-- Section-->
		<section class="py-5">
			<div class="container px-4 px-lg-5 mt-5">
				<div
					class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-2 justify-content-center"
				>
					<div class="col-sm-12">
						<h4 class="mb-3">Update product</h4>
						<div class="alert alert-danger" v-show="message">{{ message }}</div>
						<div class="needs-validation" novalidate>
							<div class="row g-2">
								<div v-if="!submitted">
									<div class="col-12">
										<label for="productName" class="form-label"
											>Product Name</label
										>
										<input
											type="text"
											class="form-control"
											id="productName"
											placeholder=""
											v-model="product.name"
											required
										/>
										<div class="invalid-feedback">Valid name is required.</div>
									</div>
									<div class="col-12">
										<label for="productPhoto" class="form-label"
											>Product Photo</label
										>
										<input
											type="text"
											class="form-control"
											id="productPhoto"
											placeholder=""
											v-model="product.img_url"
											required
										/>
										<div class="invalid-feedback">
											Valid photo path is required.
										</div>
									</div>
									<div class="col-12">
										<label for="productPrice" class="form-label">Price</label>
										<div class="input-group has-validation">
											<span class="input-group-text">CAD</span>
											<input
												type="text"
												class="form-control"
												id="productPrice"
												placeholder=""
												v-model.number="product.price"
												required
											/>
											<div class="invalid-feedback">Price is required.</div>
										</div>
									</div>
									<div class="col-12">
										<label for="productDescription" class="form-label"
											>Product Description</label
										>
										<textarea
											class="form-control"
											id="productDescription"
											placeholder=""
											v-model="product.description"
										></textarea>
										<div class="invalid-feedback">Valid description</div>
									</div>
									<div class="col-12">
										<label for="productType" class="form-label"
											>Product Category</label
										>
										<select
											class="form-control"
											id="productType"
											placeholder=""
											v-model="product.category_id"
											required
										>
											<option value="">Select</option>
											<option
												v-for="category in categories"
												:value="category.id"
												:key="category.id"
											>
												{{ category.name }}
											</option>
										</select>

										<div class="invalid-feedback">
											Valid photo path is required.
										</div>
									</div>
									<button
										class="w-100 btn btn-secondary btn-lg mt-3"
										type="button"
										@click="updateProduct"
									>
										Update
									</button>
								</div>
								<div v-else>
									<div
										class="alert alert-success alert-dismissible fade show"
										role="alert"
									>
										<strong> You submitted successfully!</strong>
										<button
											type="button"
											class="btn-close"
											data-bs-dismiss="alert"
											aria-label="Close"
										></button>
									</div>
									<button
										class="w-100 btn btn-success btn-lg mt-3"
										type="button"
										@click="updateProduct"
									>
										New product
									</button>
									<router-link
										to="/products"
										class="w-100 btn btn-primary btn-lg mt-3"
									>
										Go back to products
									</router-link>
								</div>
								<hr class="my-4" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import ProductDataService from "@/services/ProductDataService"
import CategoryDataService from "@/services/CategoryDataService"

export default {
	data() {
		return {
			product: {
				name: "",
				img_url: "",
				price: "",
				description: "",
				category_id: "",
			},
			categories: {},
			message: "",
			submitted: false,
			id: parseInt(this.$route.params.id),
		}
	},
	methods: {
		updateProduct() {
			if (!this.validateForm()) {
				return
			}

			ProductDataService.update(this.id, this.product)
				.then(() => {
					this.submitted = true
					console.log(this.product)
				})
				.catch((error) => {
					this.message = error.response.data.message
				})
		},
		validateForm() {
			if (this.product.name.length < 3) {
				this.message = "Product name should be at least 3 characters long."
				return false
			}
			if (!this.product.img_url.startsWith("http")) {
				this.message = "Please enter a valid photo URL."
				return false
			}
			return true
		},
	},
	mounted() {
		ProductDataService.get(this.id).then((response) => {
			this.product = response.data
		})
		CategoryDataService.getAll().then((response) => {
			this.categories = response.data
		})
	},
}
</script>
