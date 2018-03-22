import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// apps
import OverView from '../pages/apps/OverView'
import Instance from '../pages/apps/instance/Instance'
import Setmeal from '../pages/apps/instance/Setmeal'
import Port from '../pages/apps/instance/Port'
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
      path: '/apps/setmeal',
      name: 'setmeal',
      component: Setmeal,
    },
    {
      path: '/apps/port',
      name: 'port',
      component: Port,
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
    },
  ],
})
