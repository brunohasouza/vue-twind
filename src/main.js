import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import ComponentsLibrary from './../my-components'

const app = createApp(App)

app.use(ComponentsLibrary)

app.mount('#app')
