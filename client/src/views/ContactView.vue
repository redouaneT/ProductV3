<template>
	<section class="contact-section">
		<div class="container h-100 d-flex flex-column justify-content-center">
			<div class="row">
				<div class="col-md-12 text-center">
					<h2>Contact Us</h2>
					<p class="lead">
						Get in touch with us for any questions or feedback. We're here to
						help and support you.
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 mb-4">
					<h3>Our Address</h3>
					<address>
						123 Business Street<br />
						Suite 456<br />
						City, State 78901
					</address>
					<h3>Phone</h3>
					<p>+1 (555) 123-4567</p>
					<h3>Email</h3>
					<p>support@ourcompany.com</p>
				</div>
				<div class="col-md-6">
					<h3>Send us a Message</h3>
					<form>
						<div class="form-group">
							<input
								type="text"
								class="form-control form-control-lg"
								placeholder="Name"
							/>
						</div>
						<div class="form-group">
							<input
								type="email"
								class="form-control form-control-lg"
								placeholder="Email"
							/>
						</div>
						<div class="form-group">
							<textarea
								class="form-control form-control-lg"
								rows="3"
								placeholder="Message"
							></textarea>
						</div>
						<div class="text-center">
							<button
								type="submit"
								class="btn btn-custom btn-info-custom btn-lg"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "ContactView",
}
</script>

<style scoped>
.contact-section {
	min-height: 100vh;
	background-color: #f8f9fa;
	padding-top: 5rem;
	padding-bottom: 5rem;
}

h2 {
	font-size: 2.5rem;
	font-weight: bold;
	margin-bottom: 1rem;
}

h3 {
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
}

.lead {
	font-size: 1.25rem;
	margin-bottom: 2rem;
}

.btn-custom {
	background-color: #17a2b8;
	border-color: #17a2b8;
	color: #fff;
}
</style>
