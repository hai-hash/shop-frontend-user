<template>
 <vueper-slides>
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image"
      >
      <template v-slot:content>
        <v-btn class="order-now-button" color="#f5f5f500 ">ĐẶT HÀNG NGAY</v-btn>
      </template>
      </vueper-slide>
    </vueper-slides>
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
export default {
    name:"CarouselWrapper",
    components: {
    VueperSlides,
    VueperSlide
  },
  data() {
    return {
      slides: [
        {
          title: 'El Teide Volcano, Spain',
          content: '<v-btn>Photo by Max Rive</v-btn>',
          image: require('@/assets/Slide_banner-1-1.jpg')
        },
        {
          title: 'El Teide Volcano, Spain',
          content: 'Photo by Max Rive',
          image: require('@/assets/Slide_banner-2.jpg')
        },
        {
          title: 'El Teide Volcano, Spain',
          content: 'Photo by Max Rive',
          image: require('@/assets/Slide_banner-3.jpg')
        },
      ]
    }
  }
}

</script>
<style>
.order-now-button{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border: 2px solid #fff !important;
  color: #fff !important;
} 

.order-now-button:hover{
  background-color: red !important;
}
</style>