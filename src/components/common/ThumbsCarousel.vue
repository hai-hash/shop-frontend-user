<template>
    <div class="thumb-example">
      <!-- swiper1 -->
      <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop" v-viewer>
        <swiper-slide :class="`slide-${index}`" v-for="(image,index) in listImage" :key="index" >
          <img :src="image" alt class="image-slide-main"/>
        </swiper-slide>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
        <swiper-slide :class="`slide-${index}`" v-for="(image,index) in listImage" :key="index" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
  
    export default {
      name: 'ThumbsCarousel',
      components: {
        Swiper,
        SwiperSlide
      },
      data() {
        return {
          swiperOptionTop: {
            loop: true,
            loopedSlides: 5, // looped slides should be the same
            spaceBetween: 10,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          },
          swiperOptionThumbs: {
            loop: true,
            loopedSlides: 5, // looped slides should be the same
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: true
          }
        }
      },
      props:{
        listImage:Array
      },
      mounted() {
        this.$nextTick(() => {
          const swiperTop = this.$refs.swiperTop.$swiper
          const swiperThumbs = this.$refs.swiperThumbs.$swiper
          swiperTop.controller.control = swiperThumbs
          swiperThumbs.controller.control = swiperTop
        })
      }
    }
  </script>
  
  <style lang="scss" scoped>
  .image-slide-main{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
    .thumb-example {
      height: 800px;
      background-color: black;
    }
  
    .swiper {
      .swiper-slide {
        background-size: cover;
        background-position: center;
      }
  
      &.gallery-top {
        height: 80%;
        width: 100%;
      }
      &.gallery-thumbs {
        height: 20%;
        box-sizing: border-box;
        padding: 5px 0;
      }
      &.gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
      }
      &.gallery-thumbs .swiper-slide-active {
        opacity: 1;
      }
    }
  </style>