<template>
    <div class="order-sidebar sidebar-right">
        <div :class="isOpenDetailCart ? 'active-detail-cart' : 'cart-group-top'" >
            <div class="cart-title">
                <div class="cart-title-left">Giỏ hàng của tôi</div>
                <div class="cart-title-right">Xóa tất cả</div>
            </div>
            <div class="cart-ss1">
                <div class="cart-ss1-item">
                    <div class="cart-ss1-left">
                       <div class="name">Trà Sữa Phô Mai Tươi (M)</div>
                       <div class="customize">Thêm Trân Châu Hoàng Kim,30% đá,70% đường,</div>
                        <div class="total">33,000đ x 3 = 99,000đ</div>
                    </div>
                    <div class="cart-ss1-right">
                        <div class="change-quantity decrease">-</div>
                        <div class="amount">3</div>
                        <div class="change-quantity increase">+</div>
                    </div>
                </div>
            </div>
        </div>
       <div class="cart-group-bottom" @click="openDetailCart">
        <div class="cart-ss2">
            <img class="img-toco" src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/icon-glass-tea.png">
            <span class="cart-ss2-one">x</span>
            <span class="cart-ss2-two">3</span>
            <span class="cart-ss2-three">=</span>
            <span class="cart-ss2-four">99,000đ</span>
        </div>
        <div class="cart-ss3">
            <div class="button-cart">Thanh toán</div>
        </div>
       </div>
    </div>
</template>
<script>
export default {
    name:'ProductCart',
    data(){
        return {
            isOpenDetailCart:false
        }
    },
    methods:{
        openDetailCart(){
            console.log("da vao day")
           
            this.isOpenDetailCart = !this.isOpenDetailCart;
        }
    }
}
</script>
<style scoped>
.order-sidebar {
    width: 300px;
    max-width: 25%;
    margin: 0 16px;
    color: #282828;
    background: #ffffff;
    height: fit-content;
    box-shadow: 0 2px 7px 0 rgb(0 0 0 / 5%);
    border-radius: 4px;
    padding-bottom: 12px;
}
.cart-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    border-bottom: 1px solid #f1f1f1;
}
.cart-title-left {
    text-transform: uppercase;
    font-weight: 600;
}
.cart-title-right {
    font-size: 12px;
    cursor: pointer;
}
.cart-ss1 {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin: 10px 15px;
    padding: 8px 0;
}
.cart-ss1-item {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 8px;
    padding-top: 8px;
    border-bottom: 1px solid #f1f1f1;
}
.cart-ss1-left .name {
    font-weight: 600;
}
.cart-ss1-left .customize {
    color: #adaeae;
}
.cart-ss1-left .total {
    color: #8a733f;
    font-weight: 500;
}
.cart-ss1-right {
    display: flex;
    align-items: center;
}
.change-quantity {
    color: #ffffff;
    background: #799dd9;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 0;
    line-height: 15px;
    font-size: 26px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
}
.cart-ss1-right .amount {
    margin: 0 8px;
}
.cart-ss2 {
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin: 15px 0;
}
.img-toco {
    height: 35px;
}
.cart-ss2-one {
    font-weight: 600;
    padding: 0 4px;
}
.cart-ss2-two, .cart-ss2-four {
    color: #8a733f;
}
.cart-ss2-three {
    padding: 0 4px;
}
.cart-ss2-four {
    font-weight: 600;
}
.button-cart {
    height: 30px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #d8b979;
    color: #ffffff;
    margin: 0 20px;
    cursor: pointer;
}
@media only screen and (max-width: 768px){
    .cart-group-bottom .button-cart {
    padding: 0 20px !important;
}
.order-sidebar.sidebar-right {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    margin: 0;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 1px solid #f1f1f1;
}
.cart-group-top {
    margin-bottom: 60px;
    display: none;
}
.cart-group-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 -2px 5px 0 rgb(0 0 0 / 6%);
    cursor: pointer;
}
.active-detail-cart{
    display: block;
}
}


</style>