<template>
	<div class="card h-100">
		<img
			class="card-img-top product-image"
			src="{{ product.img_url }}"
			alt="Product"
		/>

		<div class="card-body">
			<h5 class="card-title">{{ product.name }}</h5>
			<p class="card-text">
				{{ product.description }}
				<br />
				Price: $ {{ product.price.toFixed(2) }}
				<br />
				Category: {{ product.category }}
			</p>
			<button
				@click="$emit('update', product.id)"
				type="button"
				class="btn btn-custom btn-info-custom"
			>
				Update
			</button>
			<button
				@click="$emit('delete', product.id)"
				type="button"
				class="btn btn-custom btn-danger-custom"
			>
				Delete
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		product: Object,
	},
	methods: {},
}
</script>

<style scoped>
/* Add any custom CSS styles here */
</style>
