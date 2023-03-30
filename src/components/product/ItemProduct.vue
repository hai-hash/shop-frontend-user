<template>
    <div class="product-item" @click="goToDetailProduct">
        <v-card class="image-item-product">
            <img :src="item.landing_page_image" alt />
        </v-card>
        <div class="content-item-product">
            <p class="sale-price">{{item.price.sale_price}}đ</p>
            <p class="primary-price">{{item.price.list_price}}đ</p>
            <p class="description-product">{{ item.short_desc }}</p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ItemProduct',
    props:{
        item:Object
    },
    methods:{
        goToDetailProduct(){
            this.$router.push(`/product-detail/${this.item.seo.slug}?id=${this.item.id}`)
        }
    }
}
</script>

<style scoped>
.description-product {
    margin: 5px;
    text-align: start;
    overflow: hidden;
    color: rgb(237 170 65 / 87%);
    font-size: 13px;
    height: 60px;
}
.content-item-product{
    padding: 2px;
}

.sale-price {
    color: red;
    font-weight: 700;
    margin: 5px 5px 0px 5px;
    text-align: start;
}

.primary-price {
    margin: 0px 5px;
    font-weight: 700;
    text-decoration: line-through;
    text-align: start;
    color: #6c6767;
}

.image-item-product {
    height: 65%;
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
    height: 100%;
    cursor: pointer;
}

@media (min-width: 960px) {}

@media only screen and (max-width: 960px) {

    /* .primary-price,
    .description-product,
    .sale-price {
        text-align: center;
    } */
}

@media only screen and (max-width: 768px) {}</style>