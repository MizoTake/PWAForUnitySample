import Vue from 'vue'
import Router from 'vue-router'
import UnityView from '@/components/UnityView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UnityView',
      component: UnityView
    }
  ]
})
