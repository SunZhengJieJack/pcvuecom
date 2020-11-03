import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Toasts from './components/all-dialog/dialog'
const Toast = {
    install: function(Vue) {
        const ToastConstructor = Vue.extend(Toasts)
        const instance = new ToastConstructor()
        instance.$mount(document.createElement('div'))
        document.body.appendChild(instance.$el)
        const obj = {
            init: ((msg, duration = 1500) => {
                instance.message = msg
                instance.visible = true
                setTimeout(() => {
                    instance.visible = false
                }, duration)
            })
        }
        Vue.prototype.$toast = obj
    }
}
Vue.use(Toast)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')