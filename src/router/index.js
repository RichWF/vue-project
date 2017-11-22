import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/demo/Main'
import Button from '@/demo/Button'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },{
    	path:'/hello',
    	name:'Hello',
    	component:Hello
    },
    {
      path:'/button',
      name:'Button',
      component:Button
    }
  ]
})
