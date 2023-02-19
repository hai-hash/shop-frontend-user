<template>
    <div>
        <HeaderOrderPage/>
        <div class="page-order">
            <div class="order-content">
                <OrderSidebar class="category-menu"/>
                <OrderCenter/>
                <ProductCart/>
            </div>
        </div>
    </div>
   
</template>
<script>
import HeaderOrderPage from '@/components/order/HeaderOrderPage.vue'
import OrderSidebar from '@/components/order/OrderSidebar.vue';
import OrderCenter from '@/components/order/OrderCenter.vue';
import ProductCart from '@/components/order/ProductCart.vue';
export default {
    name:'OrderPage',
    components:{
        HeaderOrderPage,
        OrderSidebar,
        OrderCenter,
        ProductCart
    }
}
</script>
<style scoped>
.order-content {
    display: flex;
    padding-top: 8px;
    max-width: 1200px;
    margin: 0 auto;
}
@media only screen and (max-width: 768px){
    .category-menu{
        display: none !important;
    }
}

</style>