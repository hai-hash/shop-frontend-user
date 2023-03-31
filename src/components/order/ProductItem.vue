<template>
    <div class="product" v-viewer>
        <img :src="item.landing_page_image" alt>
        <div class="product-name" @click="handleClickViewDetail()">{{ item.title }}</div>
        <div class="product-price" @click="handleClickViewDetail()">
            <p class="product-origin-price">{{item.price.list_price}}đ</p>
            <p class="product-sale-price">{{item.price.sale_price}}đ</p>
        </div>
        <div class="btn-increase noselect" @click="addItemToCard">+</div>
    </div>

</template>
<script>
export default {
    name:'ProductItem',
    props:{
        item:Object
    },
    methods:{
        addItemToCard(){
            this.$emit('addItemToCard',this.item);
        },
        handleClickViewDetail(){
            this.$router.push(`/product-detail/${this.item.seo.slug}?id=${this.item.id}`)
        }
    }
}
</script>

<style scoped>
.product {
    width: 31%;
    margin-right: 2%;
    margin-bottom: 3%;
    padding: 15px;
    border-bottom: 1px solid #f8f8f8;
    box-shadow: 0 2px 7px 0 rgb(0 0 0 / 5%);
    position: relative;
    cursor: pointer;
}

.product img {
    width: 100%;
    height: 60%;
    object-fit: cover;
}

.product .product-name {
    /* height: 36px; */
    font-weight: 600;
    font-size: 14px;
    line-height: 1rem;
    padding: 5px 0;
    margin-top: 20px;
    margin-bottom: 5px;
}

.product-price {
    display: flex;
    align-items: flex-end;
}

.product-origin-price {
    color: #8a733f;
    font-weight: 600;
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}

.product-sale-price {
    font-size: 12px;
    text-decoration: line-through;
    color: #535353;
    margin-left: 8px;
}

.btn-increase {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: 50%;
    background: #799dd9;
    color: #ffffff;
    height: 20px;
    width: 20px;
    text-align: center;
    line-height: 15px;
    font-size: 26px;
    font-weight: 600;
    position: absolute;
    right: 15px;
    bottom: 15px;
    line-height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>