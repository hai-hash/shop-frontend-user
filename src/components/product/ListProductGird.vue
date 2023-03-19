<template>
    <div class="product-category-wrap">
        <div class="title-product-category">
            <h1 class="title-list-category">{{ title }}</h1>
            <div class="border-bottom-title"></div>
        </div>
        <div class="list-product-sline">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(item, index) in listProduct" :key="index">
                    <ItemProduct :item="item" />
                </swiper-slide>
                <div v-if="isNavigation" class="swiper-button-prev" slot="button-prev"></div>
                <div v-if="isNavigation" class="swiper-button-next" slot="button-next"></div>
                <div v-if="isPagination" class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
  
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ItemProduct from '@/components/product/ItemProduct.vue'

export default {
    name: 'swiper-example-multiple-slides-per-biew',
    props: {
        title:String,
        isNavigation: {
            type: Boolean,
            default: true
        },
        isPagination: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        ItemProduct
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 50,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    }
                }
            },
            listProduct: [
                {
                    salePrice: '380.000đ',
                    primaryPrice: '500.000đ',
                    description: 'Đây là sản phẩm từ thiên nhiên rất tốt cho sức khỏe'
                },
                {
                    salePrice: '380.000đ',
                    primaryPrice: '500.000đ',
                    description: 'Đây là sản phẩm từ thiên nhiên rất tốt cho sức khỏe'
                },
                {
                    salePrice: '380.000đ',
                    primaryPrice: '500.000đ',
                    description: 'Đây là sản phẩm từ thiên nhiên rất tốt cho sức khỏe'
                },
                {
                    salePrice: '380.000đ',
                    primaryPrice: '500.000đ',
                    description: 'Đây là sản phẩm từ thiên nhiên rất tốt cho sức khỏe'
                },
                {
                    salePrice: '380.000đ',
                    primaryPrice: '500.000đ',
                    description: 'Đây là sản phẩm từ thiên nhiên rất tốt cho sức khỏe'
                },
                {
                    salePrice: '380.000đ',
                    primaryPrice: '500.000đ',
                    description: 'Đây là sản phẩm từ thiên nhiên rất tốt cho sức khỏe'
                },
                {
                    salePrice: '380.000đ',
                    primaryPrice: '500.000đ',
                    description: 'Đây là sản phẩm từ thiên nhiên rất tốt cho sức khỏe'
                },
                {
                    salePrice: '380.000đ',
                    primaryPrice: '500.000đ',
                    description: 'Đây là sản phẩm từ thiên nhiên rất tốt cho sức khỏe'
                },
                {
                    salePrice: '380.000đ',
                    primaryPrice: '500.000đ',
                    description: 'Đây là sản phẩm từ thiên nhiên rất tốt cho sức khỏe'
                },
                {
                    salePrice: '380.000đ',
                    primaryPrice: '500.000đ',
                    description: 'Đây là sản phẩm từ thiên nhiên rất tốt cho sức khỏe'
                }
            ]
        }
    }
}
</script>
  
<style scoped>
.swiper {
    height: 400px;
    width: 100%;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    /* font-size: $font-size-huge * 2; */
}
.swiper-button-prev,.swiper-button-next{
    display: none;
    color: #000;
}
.swiper:hover .swiper-button-prev{
    display: block;
}
.swiper:hover .swiper-button-next{
    display: block;
}

.description-product {
    margin: 5px;
}

.sale-price {
    color: red;
    font-weight: 700;
    margin: 5px 5px 0px 5px;
}

.primary-price {
    margin: 0px 5px;
    font-weight: 700;
    text-decoration: line-through;
}

.image-item-product {
    height: 70%;
    max-width: 200px;
    margin: 0 auto;
    margin-top: 5px;
}

.image-item-product img {
    height: 100%;
    width: 100%;
    object-fit: fill;
}

.product-item {
    height: 100%
}

.product-category-wrap {
    padding: 20px 0px;
    margin: 0 auto;
}

.title-product-category {
    margin: 20px 5px;
}

.title-list-category {
    font-size: 28px;
    color: rgb(242, 160, 41);
}

.border-bottom-title {
    width: 100px;
    border-bottom: 4px solid rgb(242, 160, 41);
}

.list-product-category {
    display: flex;
    flex-wrap: wrap;
}

@media (min-width: 960px) {
    .product-category-wrap {
        max-width: 1000px;
        min-width: 960px
    }
}

@media only screen and (max-width: 960px) {
    .title-product-category {
        margin-left: 5px;
    }

    .product-category-wrap {
        width: 100%;
    }

    .primary-price,
    .description-product,
    .sale-price {
        text-align: center;
    }
}

@media only screen and (max-width: 768px) {
    .product-category-wrap {
        max-width: 550px;
        min-width: 400px
    }
}
</style>