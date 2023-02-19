<template>
    <v-app>
      <CarouselWrapper />
      <ListProduct />
    </v-app>
  </template>
  
  <script>
  import CarouselWrapper from '@/components/common/CarouselWrapper.vue'
  import ListProduct from '@/view/home/ListProduct.vue'
  
  export default {
    name: 'App',
    components: {
      CarouselWrapper,
      ListProduct
    }
  }
  </script>