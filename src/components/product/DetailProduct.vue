<template>
    <div class="detai-product-wrap">
        <v-row justify="center">
            <v-col cols="4" class="left">
                <ThumbsCarousel />
            </v-col>
            <v-col cols="5" class="right">
                <div class="product-detail-content">
                    <h1 class="product-name">Trà sen sớm</h1>
                    <div class="sale-price-product"></div>
                    <h1 class="price-product">90.000 ₫</h1>
                    <p class="description-product">
                        TRÀ SEN SỚM TASHAPY được ướp bởi nguyên liệu chè Tân Cương Thái Nguyên (tôm nõn thượng hạng) và sen
                        Bách Diệp Hồ Tây. Với hương thơm thanh khiết của hoa sen, kết hợp với vị chát dịu, ngọt hậu của trà
                        Tân Cương đã mang trong mình tất cả hương vị mộc mạc, giản dị và thanh khiết của đồng quê nội cỏ
                        Việt Nam.
                    </p>
                    <div class="quantity-product">
                        <CounterProduct v-model="counter" />
                        <v-btn class="btn-add-cart" color="#d26e4b">THÊM VÀO GIỎ HÀNG</v-btn>
                    </div>

                    <v-btn class="btn-buy-now">
                        <h2>MUA NGAY</h2>
                    </v-btn>
                    <div class="share-product-detail">
                        <MultiSharing/>
                    </div>

                </div>
            </v-col>
        </v-row>

    </div>
</template>
<script>
import ThumbsCarousel from '@/components/common/ThumbsCarousel.vue'
import CounterProduct from '@/components/common/CounterProduct.vue'
import MultiSharing from '@/components/common/MultiSharing.vue'
export default {
    name: 'DetaiProduct',
    components: {
        ThumbsCarousel,
        CounterProduct,
        MultiSharing
    },
    data() {
        return {
            counter: 1
        }
    },
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
.share-product-detail{
    margin-top: 10px;
}
</style>