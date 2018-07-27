import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)

const $ = require('jquery')
window.$ = $
// require('jquery-confirm')
// import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";

// Vue.use(TimelineMax)
// Vue.use(CSSPlugin)
// Vue.use(ScrollToPlugin)
// Vue.use(Draggable)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
