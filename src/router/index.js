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
import LoginForm from '@/view/login/LoginForm.vue'

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
              path: '/page/:page_type',
              name: 'BlogView',
              component: BlogView
            },
            {
              path: '/product-detail/:slug',
              name: 'DetailProduct',
              component: DetailProduct
            },
          ]
        },
        {
          path: '/product',
          name: 'OrderPage',
          component: OrderPage
        },
        {
          path: '/login',
          name: 'LoginForm',
          component: LoginForm
        }
      ]
    },
  ]
})
