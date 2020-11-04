import Toasts from './dialog'
export default {
  install: function (Vue) {
    const ToastConstructor = Vue.extend(Toasts)
    const instance = new ToastConstructor()
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
    const obj = {
      init: (msg, duration = 1500) => {
        instance.message = msg
        instance.visible = true
        setTimeout(() => {
          instance.visible = false
        }, duration)
      },
      onShow: (msg) => {
        instance.message = msg
        instance.visible = true
      },
      onHide: (msg,time) => {
        instance.message = msg
        instance.visible = true
        setTimeout(() => {
          instance.visible = false
        },time)
      }
    }
    Vue.prototype.$toast = obj
  }
}