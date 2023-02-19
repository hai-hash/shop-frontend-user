import Vue from 'vue'
//Dòng này để import vue-router
import Router from 'vue-router'
import PageUser from '@/view/PageUser/PageUser.vue'
import Home from '@/view/home/Home.vue'
import OrderPage from '@/view/order/OrderPage.vue'

Vue.use(Router)

export default new Router({
  routes: [ // bao gồm danh sách route
    {
      path: '/', 
      name: 'PageUser',
      component:  PageUser,
      children: [
        {
          path: '/',
          name:'Home',
          component: Home,
        }
       
      ]
    },
    {
      path: '/order',
      name: 'OrderPage',
      component: OrderPage
    }
  ]
})
