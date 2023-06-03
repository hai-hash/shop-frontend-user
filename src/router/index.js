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
import PaymentCheckout from '@/components/order/PaymentCheckout.vue'
import RegistryForm from '@/view/login/RegistryForm.vue'
import AdminHome from '@/view/pageAdmin/AdminHome.vue'
import BlogList from '@/view/BlogManage/BlogList.vue'
import BlogAdd from '@/view/BlogManage/BlogAdd.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [ // bao gồm danh sách route
    {
      path: '/',
      name: 'Page',
      component: Page,
      children: [
        {
          path: '/',
          name: 'PageUser',
          component: PageUser,
          children: [
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
          path: '/checkout',
          name: 'PaymentCheckout',
          component: PaymentCheckout
        },
        {
          path: '/login',
          name: 'LoginForm',
          component: LoginForm
        },
        {
          path: '/registry',
          name: 'RegistryForm',
          component: RegistryForm
        },
        {
          path: "/management",
          name: "Management",
          component: AdminHome,
          children:[
            {
              path: 'blog',
              name: 'BlogList',
              component: BlogList
            },
            {
              path: 'blog/editor',
              name: 'BlogAdd',
              component: BlogAdd
            },
           
          ]

        }
      ]
    },
  ]
})
