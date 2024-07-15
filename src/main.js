import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { notify } from '@kyvg/vue3-notification'
import vClickOutside from 'click-outside-vue3'
import VueLazyload from 'vue-lazyload'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueScrollTo)
app.use(VueAxios, axios)
app.use(notify)
app.use(vClickOutside)
app.use(VueLazyload, {
	preLoad: 1.3,
	attempt: 1,
  })

app.mount('#app')
