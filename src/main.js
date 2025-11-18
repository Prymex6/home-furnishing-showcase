import { createApp } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/main.css'
import App from './App.vue'

const app = createApp(App)

app.AOS = new AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
})

app.mount('#app')