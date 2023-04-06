<template>
	<header class="header">
		<nav class="navbar navbar-expand-lg">
			<div class="container">
				<router-link class="navbar-brand" :to="{ name: 'home' }"
					>Product</router-link
				>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#basic-navbar-nav"
					aria-controls="basic-navbar-nav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="basic-navbar-nav">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<router-link class="nav-link active" :to="{ name: 'home' }"
								>Home</router-link
							>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" :to="{ name: 'products' }"
								>Products</router-link
							>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" :to="{ name: 'about' }"
								>About</router-link
							>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" :to="{ name: 'contact' }"
								>Contact</router-link
							>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: "HeaderComponent",
}
</script>

<style scoped>
/* Add any necessary styles here */
</style>
