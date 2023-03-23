import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import '@/style/styles.scss'
import 'vueperslides/dist/vueperslides.css'
import router from './router'
import VueFbCustomerChat from 'vue-fb-customer-chat'
import 'swiper/css/swiper.css'
import CKEditor from '@ckeditor/ckeditor5-vue2';
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
Vue.use(VueViewer)

Vue.use(VueFbCustomerChat, {
  page_id: '104138475948247', //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})

Vue.use( CKEditor );

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
