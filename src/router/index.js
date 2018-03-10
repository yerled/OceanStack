import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// apps
import Instance from '../pages/apps/instance/Instance'
import OverView from '../pages/apps/overview/OverView'
// 404
import NotFound from '../pages/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/apps/overview',
      name: 'overview',
      component: OverView,
    },
    {
      path: '/apps/instance',
      name: 'instance',
      component: Instance,
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
    },
  ],
})
