import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import wrap from '@vue/web-component-wrapper'
import HelloWorldWrap from './components/HelloWorldWrap'

Vue.config.productionTip = false

const CustomElement = wrap(Vue, HelloWorldWrap);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

window.customElements.define('hapi-elements', CustomElement);
