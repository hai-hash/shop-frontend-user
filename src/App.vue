<template>
  <v-app>
    <NavBar />
    <CarouselWrapper />
    <ListProduct />
  </v-app>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'
import CarouselWrapper from '@/components/common/CarouselWrapper.vue'
import ListProduct from '@/view/home/ListProduct.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    CarouselWrapper,
    ListProduct
  }
}
</script>
