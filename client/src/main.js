import { createApp } from "vue"
import App from "./App.vue"

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap"
import "@/assets/css/styles.css"

// Create the Vue app
createApp(App).mount("#app")
