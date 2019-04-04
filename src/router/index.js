import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FullName from '@/components/FullName'
import Counter from '@/components/Counter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/name',
      name: 'FullName',
      component: FullName
    }, {
      path: '/count',
      name: 'Counter',
      component: Counter
    }
  ]
})
