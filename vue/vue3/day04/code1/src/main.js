import { createApp } from "vue";
// import App from './App.vue'
// import App from './components/03.style/App.vue'
// import App from './components/04.props/App.vue'
// import App from './components/05.class&style/App.vue'
import App from './components/App.vue'
import Swiper from  './components/01.globalReg/Swiper.vue'
import Test from './components/01.globalReg/Test.vue'
const app= createApp(App)
app.component(Swiper.name,Swiper)
app.component(Test.name,Test)
app.mount('#app')