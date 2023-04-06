import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "@/assets/css/styles.css"

// Create the Vue app
createApp(App).use(router).mount("#app")
