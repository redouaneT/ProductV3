<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h2>Add Product</h2>
					<form @submit.prevent="onAddProduct">
						<div class="form-group">
							<label for="productName">Name</label>
							<input
								type="text"
								class="form-control"
								id="productName"
								:value="product.name"
								@input="updateProduct('name', $event.target.value)"
								placeholder="Enter product name"
							/>
						</div>
						<div class="form-group">
							<label for="productDescription">Description</label>
							<input
								type="text"
								class="form-control"
								id="productDescription"
								:value="product.description"
								@input="updateProduct('description', $event.target.value)"
								placeholder="Enter product description"
							/>
						</div>
						<div class="form-group">
							<label for="productPrice">Price</label>
							<input
								type="number"
								class="form-control"
								id="productPrice"
								:value="product.price"
								@input="updateProduct('price', $event.target.value)"
								placeholder="Enter product price"
							/>
						</div>
						<div class="form-group">
							<label for="productCategory">Category</label>
							<select
								class="form-control"
								id="productCategory"
								:value="product.category"
								@input="updateProduct('category', $event.target.value)"
							>
								<option value="">Select a category</option>
								<option value="Category 1">Category 1</option>
								<option value="Category 2">Category 2</option>
								<option value="Category 3">Category 3</option>
							</select>
						</div>
						<button type="submit" class="btn btn-primary">Add Product</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		product: Object,
	},
	methods: {
		onAddProduct() {
			this.$emit("submit-add")
		},
	},
}
</script>
