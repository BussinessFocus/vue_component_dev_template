import MyComponent from './src/MyComponent'
import _Vue from 'vue'

MyComponent.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(MyComponent.name, MyComponent)
}

export default MyComponent