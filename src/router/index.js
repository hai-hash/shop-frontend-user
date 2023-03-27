import Vue from 'vue'
//Dòng này để import vue-router
import Router from 'vue-router'
import PageUser from '@/view/PageUser/PageUser.vue'
import Home from '@/view/home/Home.vue'
import OrderPage from '@/view/order/OrderPage.vue'
import Page from '@/view/Page/Page.vue'
import BlogEditor from '@/view/Blog/BlogEditor.vue'
import BlogView from '@/view/Blog/BlogView.vue'
import DetailProduct from '@/components/product/DetailProduct.vue'

Vue.use(Router)

export default new Router({
  routes: [ // bao gồm danh sách route
    {
      path: '/', 
      name: 'Page',
      component:  Page,
      children: [
        {
          path: '/',
          name:'PageUser',
          component: PageUser,
          children:[
            {
              path: '/',
              name: 'Home',
              component: Home
            },
            {
              path: '/blog-editor',
              name: 'BlogEditor',
              component: BlogEditor
            },
            {
              path: '/blog',
              name: 'BlogView',
              component: BlogView
            },
            {
              path: '/product-detail',
              name: 'DetailProduct',
              component: DetailProduct
            },
          ]
        },
        {
          path: '/order',
          name: 'OrderPage',
          component: OrderPage
        }
      ]
    },
  ]
})
