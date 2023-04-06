<template>
	<section class="contact-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-8">
					<h2 class="text-center mb-4">Get In Touch</h2>
					<p class="text-center mb-5">
						Whether you have a question, feedback, or just want to say hello,
						we'd love to hear from you.
					</p>
					<form>
						<div class="form-group">
							<input
								type="text"
								class="form-control form-control-lg"
								placeholder="Your Name"
							/>
						</div>
						<div class="form-group">
							<input
								type="email"
								class="form-control form-control-lg"
								placeholder="Your Email Address"
							/>
						</div>
						<div class="form-group">
							<textarea
								class="form-control form-control-lg"
								rows="5"
								placeholder="Your Message"
							></textarea>
						</div>
						<div class="text-center">
							<button type="submit" class="btn btn-lg btn-primary btn-block">
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
			<div class="row mt-5">
				<div class="col-md-4">
					<div class="card">
						<div class="card-body">
							<h3 class="card-title mb-3">Our Address</h3>
							<address class="mb-4">
								123 Business Street<br />
								Suite 456<br />
								City, State 78901
							</address>
							<h3 class="card-title mb-3">Phone Number</h3>
							<p class="mb-4">+1 (555) 123-4567</p>
							<h3 class="card-title mb-3">Email Address</h3>
							<p>support@ourcompany.com</p>
						</div>
					</div>
				</div>
				<div class="col-md-8">
					<div class="embed-responsive embed-responsive-16by9">
						<iframe
							class="embed-responsive-item"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.313638954868!2d-122.08955718466798!3d37.3872004798332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb45a56fb8c5%3A0xfa1d6213e3f2b83c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1623359450115!5m2!1sen!2sus"
							frameborder="0"
							style="border: 0"
							allowfullscreen=""
							aria-hidden="false"
							tabindex="0"
						></iframe>
					</div>
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
	background-color: #f8f9fa;
	padding-top: 100px;
	padding-bottom: 100px;
}

h2 {
	font-size: 40px;
	font-weight: 700;
	margin-bottom: 30px;
}

p {
	font-size: 18px;
	line-height: 1.5;
	color: #6c757d;
}

.form-control-lg {
	border-radius: 0;
	font-size: 18px;
	padding: 30px;
	margin-bottom: 30px;
	box-shadow: none;
}

.btn-lg {
	border-radius: 0;
	font-size: 18px;
	font-weight: 700;
	background-color: #007bff;
	border-color: #007bff;
}

.btn-lg:hover,
.btn-lg:focus {
	background-color: #0069d9;
	border-color: #0062cc;
}

.card {
	border: none;
	border-radius: 0;
	box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
}

.card-title {
	font-size: 24px;
	font-weight: 700;
	margin-bottom: 20px;
}

.address {
	font-size: 18px;
	line-height: 1.5;
	margin-bottom: 20px;
}

.embed-responsive {
	margin-top: 30px;
}
</style>
