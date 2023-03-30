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
import TechnologyView from '@/view/pageBlog/TechnologyView.vue'
import CommitView from '@/view/pageBlog/CommitView.vue'
import ExpertView from '@/view/pageBlog/ExpertView.vue'
import QuanlityView from '@/view/pageBlog/QualityView.vue'

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
              path: '/technology-page',
              name: 'TechnologyView',
              component: TechnologyView
            },
            {
              path: '/commit-page',
              name: 'CommitView',
              component: CommitView
            },
            {
              path: '/expert-page',
              name: 'ExpertView',
              component: ExpertView
            },
            {
              path: '/quality-page',
              name: 'QualityView',
              component: QuanlityView
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
        }
      ]
    },
  ]
})
