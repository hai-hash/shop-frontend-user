<template>
    <v-app>
      <CarouselWrapper />
      <IntroductionTashapy/>
      <QuantityProductPosts/>
      <TechnologyPosts/>
      <ExpertOpinion/>
      <DiscountHomePage/>
      <ProductCategory/>
      <HotProduct/>
      <ListProduct />
    </v-app>
  </template>
  
  <script>
  import CarouselWrapper from '@/components/common/CarouselWrapper.vue'
  import ListProduct from '@/view/home/ListProduct.vue'
  import IntroductionTashapy from '@/view/home/IntroductionTashapy.vue';
  import QuantityProductPosts from '@/view/home/QuantityProductPosts.vue';
  import TechnologyPosts from '@/view/home/TechnologyPosts.vue';
  import ExpertOpinion from '@/view/home/ExpertOpinion.vue';
  import DiscountHomePage from '@/view/home/DiscountHomePage.vue';
  import ProductCategory from '@/view/home/ProductCategory.vue'
  import HotProduct from './HotProduct.vue';
  export default {
    name: 'App',
    components: {
      CarouselWrapper,
      ListProduct,
      IntroductionTashapy,
      QuantityProductPosts,
      TechnologyPosts,
      ExpertOpinion,
      DiscountHomePage,
      ProductCategory,
      HotProduct
    }
  }
  </script>