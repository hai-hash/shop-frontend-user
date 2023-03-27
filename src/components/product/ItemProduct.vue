<template>
    <div class="product-item" @click="goToDetailProduct">
        <v-card class="image-item-product">
            <img src="@/assets/product-demo.png" alt />
        </v-card>
        <div class="content-item-product">
            <p class="sale-price">{{item.salePrice}}với mã</p>
            <p class="primary-price">{{ item.primaryPrice }}</p>
            <p class="description-product">{{ item.description }}</p>
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
            this.$router.push(`/product-detail?name=tenproduct`)
        }
    }
}
</script>

<style scoped>
.description-product {
    margin: 5px;
    text-align: start;
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