import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'
// modules
import Setmeal from './modules/setmeal'
import Port from './modules/port'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins,
  state: {
    user: {
      name: 'develop_test_user',
    },
    project: {},
    lang: 'zh',
  },
  mutations: {
    toggleLanguage (state) {
      if (state.lang === 'zh') {
        state.lang = 'en'
      } else {
        state.lang = 'zh'
      }
    },
  },
  modules: {
    Setmeal,
    Port,
  },
})

export default store
