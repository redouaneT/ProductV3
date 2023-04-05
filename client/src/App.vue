<template>
	<div>
		<HeaderComponent></HeaderComponent>
		<HomeView></HomeView>
		<FooterComponent></FooterComponent>
	</div>
</template>

<script>
// import ProductView from "@/views/ProductView.vue"
import HomeView from "@/views/HomeView.vue"
import HeaderComponent from "@/components/HeaderComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue"

export default {
	name: "App",
	components: {
		HomeView,
		HeaderComponent,
		FooterComponent,
	},
	data() {},

	methods: {},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
