<template>
    <v-app>
      <CarouselWrapper />
      <IntroductionTashapy/>
      <QuantityProductPosts/>
      <TechnologyPosts/>
      <ListProduct />
    </v-app>
  </template>
  
  <script>
  import CarouselWrapper from '@/components/common/CarouselWrapper.vue'
  import ListProduct from '@/view/home/ListProduct.vue'
  import IntroductionTashapy from '@/view/home/IntroductionTashapy.vue';
  import QuantityProductPosts from '@/view/home/QuantityProductPosts.vue';
  import TechnologyPosts from '@/view/home/TechnologyPosts.vue';
  export default {
    name: 'App',
    components: {
      CarouselWrapper,
      ListProduct,
      IntroductionTashapy,
      QuantityProductPosts,
      TechnologyPosts
    }
  }
  </script>