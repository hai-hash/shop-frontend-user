<template>
  <div class="body-user-page">
    <CarouselWrapper />
    <DiscountHomePage />
    <ProductCategory :listCategory="listCategory"/>
    <ListProductGird title="SẢN PHẨM BÁN CHẠY" :listProduct = "listProductHot"/>
    <ListProductGird title="SẢN PHẨM MỚI" :listProduct = "listProductNew"/>
    <TechnologyPosts />
    <QuantityProductPosts />
    <IntroductionTashapy />
    <ExpertOpinion />
    <ListBlog />
    <FooterPage />
  </div>
</template>
  
<script>
import CarouselWrapper from '@/components/common/CarouselWrapper.vue'
import IntroductionTashapy from '@/view/home/IntroductionTashapy.vue';
import QuantityProductPosts from '@/view/home/QuantityProductPosts.vue';
import TechnologyPosts from '@/view/home/TechnologyPosts.vue';
import ExpertOpinion from '@/view/home/ExpertOpinion.vue';
import DiscountHomePage from '@/view/home/DiscountHomePage.vue';
import ProductCategory from '@/view/home/ProductCategory.vue'
import ListBlog from './ListBlog.vue';
import FooterPage from '@/view/home/FooterPage.vue';
import ListProductGird from '@/components/product/ListProductGird.vue';
import axios from 'axios';
import {CATEGORY_API,PRODUCT_API} from '@/constant/common/UrlApi';
export default {
  name: 'App',
  components: {
    CarouselWrapper,
    IntroductionTashapy,
    QuantityProductPosts,
    TechnologyPosts,
    ExpertOpinion,
    DiscountHomePage,
    ProductCategory,
    ListBlog,
    FooterPage,
    ListProductGird,
  },
  created() {
    this.getProduct();
    this.getCategories();
  },
  data(){
    return{
      listProductHot:[],
      listProductNew:[],
      listCategory:[]
    }
  },
  methods: {
    async getProduct() {
      const params = {
        page: 1,
        limit: 100,
      }
      try {
        const data = await axios.get(PRODUCT_API,{params});
        this.listProductHot = data;
        this.listProductNew = data;
      } catch (error) {
        console.log(error)
      } 
    },
    async getCategories() {
      const data = {
        page: 1,
        limit: 100,
        filter:{}
      }
      try {
        const response = await axios.post(CATEGORY_API,data);
        this.listCategory = response;
      } catch (error) {
        console.log(error)
      } 
    }
  }
}
</script>