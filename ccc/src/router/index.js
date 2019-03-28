import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cs from '@/components/cs'
import zww from '@/components/zww'
import vueResource from 'vue-resource'

Vue.use(vueResource);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
            component: HelloWorld
    },
    {
      path: '/cs',
      component: cs
    },
    {
      path: '/zww',
      component: zww
    }
  ]
})
