import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';


let app = createApp(App);
app.config.productionTip = false;//生产提示
app.use(Antd);
app.use(store).use(router).mount('#app')
