<template>
	<div>
		<section class="hero-section">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-md-12">
						<h1>Discover the Future of Innovation</h1>
						<p class="lead">
							We're excited to bring you a cutting-edge product that will
							revolutionize the way you live, work, and play. Stay tuned for the
							big reveal!
						</p>
						<router-link to="/products" class="btn btn-primary">
							See our products
						</router-link>
					</div>
				</div>
			</div>
		</section>
		<section class="features-section">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">Easy to Use</h5>
								<p class="card-text">
									Our e-commerce platform is designed for ease of use, allowing
									you to effortlessly browse and purchase products, even if you
									have no technical experience.
								</p>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">Flexible Product Selection</h5>
								<p class="card-text">
									We are continuously expanding our product range to cater to
									your needs and preferences, ensuring a diverse and
									personalized shopping experience.
								</p>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">Affordable Options</h5>
								<p class="card-text">
									We strive to provide high-quality products at competitive
									prices, making our platform accessible for customers with
									different budgets.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "HomeView",
}
</script>

<style scoped>
/* Add any necessary styles here */
</style>
