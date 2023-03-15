<template>
    <div class="product-category-wrap">
        <div class="title-product-category">
            <h1 class="title-list-category">SẢN PHẨM BÁN CHẠY</h1>
            <div class="border-bottom-title"></div>
        </div>
        <div class="list-product-sline">
            <vueper-slides class="no-shadow" :visible-slides="5" slide-multiple :gap="1" :slide-ratio="1 / 4"
                :dragging-distance="200" :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }" fixedHeight="400px">
                <vueper-slide v-for="i in 20" :key="i">
                    <template v-slot:content>
                        <div class="product-item">
                            <v-card class="image-item-product">
                                <img src="@/assets/product-demo.png" alt/>
                            </v-card>
                            <div class="content-item-product">
                                <p class="sale-price">380.000đ  với mã</p>
                                <p class="primary-price">425.000đ</p>
                                <p class="description-product">Đây là sản phẩm từ thiên nhiên rất tốt cho sức khỏe</p>
                            </div>
                           
                        </div>
                    </template>
                </vueper-slide>
            </vueper-slides>
        </div>

    </div>
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
export default {
    name: 'ProductCategory',
    components: {
        VueperSlides,
        VueperSlide
    },
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.description-product{
margin: 5px;
}
.sale-price{
    color: red;
    font-weight: 700;
    margin: 5px 5px 0px 5px;
}
.primary-price{
margin: 0px 5px;
font-weight: 700;
text-decoration: line-through;
}
.image-item-product{
    height: 70%;
    max-width: 200px;
    margin: 0 auto;
}
.image-item-product img{
    height: 100%;
    width: 100%;
    object-fit: fill;
}
.product-item{
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
        /* max-width: 1000px; */
        min-width: 900px
    }
}

@media only screen and (max-width: 960px) {
    .title-product-category{
        margin-left: 5px;
    }
    .product-category-wrap {
        width: 100%;
    }
    .primary-price,.description-product,.sale-price{
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