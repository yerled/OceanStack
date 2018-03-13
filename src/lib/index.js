import './axios'
import './iconfont'
import '../filter'
import '../components'

import Vue from 'vue'
import ElementUI from './element'
import i18n from './i18n'
import store from '../store'
import router from '../router'

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
})

export {
  i18n,
  store,
  router,
}
