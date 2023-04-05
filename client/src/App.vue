<template>
	<div>
		<HelloWorld :message="message"></HelloWorld>
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"

export default {
	name: "App",
	components: {
		HelloWorld,
	},
	data() {
		return {
			message: "Hello World",
		}
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	background-color: antiquewhite;
}
</style>
