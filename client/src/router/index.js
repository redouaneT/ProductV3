import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import AboutView from "@/views/AboutView.vue"
import ShowProductView from "@/views/ShowProductView.vue"
import AddProductView from "@/views/AddProductView.vue"
import UpdateProductView from "@/views/UpdateProductView.vue"
import ProductView from "@/views/ProductView.vue"
import ContactView from "@/views/ContactView.vue"

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		component: AboutView,
	},
	{
		path: "/show-product/:id",
		name: "show-product",
		component: ShowProductView,
	},
	{
		path: "/products",
		name: "products",
		component: ProductView,
	},
	{
		path: "/contact",
		name: "contact",
		component: ContactView,
	},
	{
		path: "/add-product",
		name: "add-product",
		component: AddProductView,
	},
	{
		path: "/update-product/:id",
		name: "update-product",
		component: UpdateProductView,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
