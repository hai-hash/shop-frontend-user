<template>
    <div class="detai-product-wrap">
        <v-row justify="center">
            <v-col cols="4" class="left">
                <ThumbsCarousel :listImage="listImage"/>
            </v-col>
            <v-col cols="5" class="right">
                <div class="product-detail-content">
                    <h1 class="product-name">{{ dataDetailProduct.title }}</h1>
                    <div class="sale-price-product"></div>
                    <h1 class="price-product">{{ dataDetailProduct.price.list_price }} đ</h1>
                    <p class="description-product">
                        {{dataDetailProduct.short_desc }}
                    </p>
                    <div class="quantity-product">
                        <CounterProduct v-model="counter" />
                        <v-btn class="btn-add-cart" color="#d26e4b">THÊM VÀO GIỎ HÀNG</v-btn>
                    </div>

                    <v-btn class="btn-buy-now">
                        <h2>MUA NGAY</h2>
                    </v-btn>
                    <div class="share-product-detail">
                        <MultiSharing />
                    </div>

                </div>
            </v-col>
        </v-row>

        <div class="introduction">
            <v-row justify="center">
                <v-col cols="10">
                    <v-tabs v-model="tab" align-with-title>
                        <v-tabs-slider color="yellow"></v-tabs-slider>

                        <v-tab v-for="item in items" :key="item">
                            {{ item }}
                        </v-tab>
                    </v-tabs>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="9">
                    <v-tabs-items v-model="tab">
                        <v-tab-item key="Mô tả">
                            <v-card flat>
                                <v-sheet class="pa-2 ma-2" id="content" v-html="descriptionData">
                                </v-sheet>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item key="Đánh giá">
                            <h1>Đánh giá</h1>
                            <v-card>
                                <div class="evaluate">
                                    <div class="rating">
                                        <h1 class="number-common">4.5/5</h1>
                                        <v-rating v-model="rating" bg-color="orange-lighten-1" color="#ee4d2d"></v-rating>
                                    </div>
                                    <div class="option-display-rating">
                                        <v-btn color="#fff" class="ml-5">Tất cả</v-btn>
                                        <v-btn color="#fff" class="ml-5">5 sao</v-btn>
                                        <v-btn color="#fff" class="ml-5">4 sao</v-btn>
                                        <v-btn color="#fff" class="ml-5">3 sao</v-btn>
                                        <v-btn color="#fff" class="ml-5">2 sao</v-btn>
                                        <v-btn color="#fff" class="ml-5">1 sao</v-btn>
                                    </div>
                                </div>
                            </v-card>
                            <p>Chưa có đánh giá nào</p>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
            </v-row>
        </div>

    </div>
</template>
<script>
import ThumbsCarousel from '@/components/common/ThumbsCarousel.vue'
import CounterProduct from '@/components/common/CounterProduct.vue'
import MultiSharing from '@/components/common/MultiSharing.vue'
import productApi from '@/api/method/product/productApi';
export default {
    name: 'DetaiProduct',
    components: {
        ThumbsCarousel,
        CounterProduct,
        MultiSharing
    },
    created() {
        this.getProductDetail();
    },
    data() {
        return {
            counter: 1,
            dataDetailProduct: {},
            listImage:[],
            rating: 3,
            descriptionData:'',
            tab: null,
            items: [
                'Mô tả', 'Đánh giá',
            ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
    },
    methods: {
        async getProductDetail() {
            const id  = this.$route.query.id;
            const params = {
                id
            }
            try {
                const data = await productApi.getProductDetail(params);
                this.dataDetailProduct = data;
                this.listImage = data.alternative_images;
                this.descriptionData = data.long_desc;
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
<style scoped>
.detai-product-wrap {
    margin: 50px 0px;
}

.right {
    min-height: 500px;
}

.product-detail-content {
    width: 50%;
}

h1 {
    font-size: 28px;
    margin: 0px 5px 0px 0px;
    text-align: start;
}

.quantity-product {
    display: flex;
    align-items: center;
}

.btn-add-cart {
    margin-left: 10px;
    color: #fff;
}

.btn-buy-now {
    color: #fff;
    min-height: 50px;
    margin-top: 10px;
    width: 293px;
    background: -webkit-linear-gradient(top, #f59000, #fd6e1d);
}

.share-product-detail {
    margin-top: 10px;
}

.introduction {
    margin-top: 80px;
}

.rating {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.number-common {
    padding-left: 8px;
    color: #ee4d2d;
}

.evaluate {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #fffbf8;
    border: 1px solid #f9ede5;
    min-height: 150px;
    display: flex;
}

.option-display-rating {
    display: flex;
    align-items: center;
    margin-left: 20px;
    flex-wrap: wrap;
    max-width: 450px;
}
</style>