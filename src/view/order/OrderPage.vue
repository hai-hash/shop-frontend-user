<template>
    <div>
        <HeaderOrderPage/>
        <div class="page-order">
            <div class="order-content">
                <OrderSidebar class="category-menu"/>
                <OrderCenter @addItemToCard="addItemToCard"/>
                <ProductCart :cardItems="cardItems"/>
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
    },
    created(){
        let listItemCart = JSON.parse(localStorage.getItem('list-item-cart'));
            if(!listItemCart){
                listItemCart = [];
            }
            this.cardItems = listItemCart;
    },
    data(){
        return {
            cardItems:[],
        }
    },
    methods:{
        addItemToCard(item){
            let listItemCart = JSON.parse(localStorage.getItem('list-item-cart'));
            if(!listItemCart){
                listItemCart = [];
            }
          const  indexItem = listItemCart.findIndex(itemFilter => itemFilter.id === item.id);
          if(indexItem === -1){
            listItemCart.push({...item,count:1});
            this.cardItems = listItemCart;
            localStorage.setItem('list-item-cart',JSON.stringify(listItemCart))
            return;
          }
          listItemCart[indexItem].count += 1;
          this.cardItems = listItemCart;
          localStorage.setItem('list-item-cart',JSON.stringify(listItemCart))

        },
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