<template>
    <div class="page-checkout">
        <div class="checkout-top">
            <div class="left">
                <i class="fas fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div class="center">Thanh toán</div>
            <div class="right"></div>
        </div>
        <div class="tabbar-header-checkout">
            <div class="btn-tabar-checkout active" type="DELI">Giao hàng tận nơi</div>
            <div class="btn-tabar-checkout" type="PICK">Nhận tại cửa hàng</div>
        </div>
        <div class="checkout-detail">
            <div class="checkout-detail-left">
                <div class="delivery-info">
                    <div class="delivery-info-title">
                        <div class="delivery-info-title-left">Thông tin giao hàng</div>
                        <div class="right"><i class="fas fa-angle-down" aria-hidden="true"></i></div>
                    </div>
                    <div class="delivery-info-content">
                        <div class="wrap-input">
                            <i class="fas fa-user" aria-hidden="true"></i>
                            <input type="text" id="customer-name" placeholder="Tên người nhận">
                        </div>
                        <div class="wrap-input">
                            <i class="fas fa-phone-alt" aria-hidden="true"></i>
                            <input type="text" id="customer-phone" placeholder="Số điện thoại người nhận" maxlength="10">
                        </div>
                        <div class="delivery-location">
                            <div class="delivery-location-title">Giao đến</div>
                            <div class="wrap-input wrap-location">
                                <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                                <input type="text" id="customer-location" placeholder="Địa chỉ người nhận">
                                <div class="search-box">
                                    <div class="search-item"
                                        place_id="h68ZuWvIpqWtkEITaGymxoezSihlRI9uqaNgK16Kvxumr1VNbn6OxLGuJRNrQ4j8j75gF3G5tpdC1gUIvgBrxXpOjWjZrQo_Lj7NZQjZ_SuaflU1qaBmPj_S9QjJoGLnP"
                                        description="Ddddddddddd, Lê Thanh Nghị, Cẩm Thạch, Cẩm Phả, Quảng Ninh">
                                    </div>
                                </div>
                            </div>
                            <div class="wrap-input wrap-input-note" style="">
                                <i class="fas fa-sticky-note" aria-hidden="true"></i>
                                <input type="text" id="customer-note" placeholder="Ghi chú địa chỉ...">
                            </div>
                            <div id="map-checkout" class="mapboxgl-map" style="">
                                <div class="mapboxgl-canary" style="visibility: hidden;"></div>
                                <div
                                    class="mapboxgl-canvas-container mapboxgl-interactive mapboxgl-touch-drag-pan mapboxgl-touch-zoom-rotate">
                                    <canvas class="mapboxgl-canvas" tabindex="0" aria-label="Map" role="region" width="900"
                                        height="250" style="width: 720px; height: 200px;"></canvas>
                                </div>
                                <div class="mapboxgl-control-container">
                                    <div class="mapboxgl-ctrl-top-left"></div>
                                    <div class="mapboxgl-ctrl-top-right"></div>
                                    <div class="mapboxgl-ctrl-bottom-left">
                                        <div class="mapboxgl-ctrl" style="display: block;"><a class="mapboxgl-ctrl-logo"
                                                target="_blank" rel="noopener nofollow" href="https://goong.io/"
                                                aria-label="Goong logo"></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="delivery-datetime">
                            <div class="left">Giao hàng <span class="time"><span class="hour">19</span>:<span
                                        class="minute">45</span></span> - hôm nay <span class="date">01/04/2023</span></div>
                            <div class="right edit-delivery-datetime">Sửa</div>
                        </div>
                    </div>
                </div>
                <div class="delivery-info payment-method">
                    <div class="delivery-info-title">
                        <div class="delivery-info-title-left">Phương thức thanh toán</div>
                        <div class="right"><i class="fas fa-angle-down" aria-hidden="true"></i></div>
                    </div>
                    <div class="delivery-info-content">
                        <label class="container-radio cod-payment">
                            <span>Thanh toán khi nhận hàng</span>
                            <input checked="" type="radio" name="type" value="cold">
                            <span class="checkmark-radio"></span>
                        </label>
                        <label class="container-radio momo-payment">
                            <span>Thanh toán qua Ví MoMo</span>
                            <input type="radio" name="type" value="momo">
                            <span class="checkmark-radio"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="checkout-detail-right">
                <div class="delivery-info order-info">
                    <div class="delivery-info-title">
                        <div class="delivery-info-title-left">Thông tin đơn hàng</div>
                        <div class="right"><i class="fas fa-angle-down" aria-hidden="true"></i></div>
                    </div>
                    <div class="delivery-info-content">
                        <div class="choose-store">
                            <div class="choose-store-title">Địa chỉ cửa hàng</div>
                            <div class="choose-store-content">
                                <div class="left">
                                    <span class="store-name"><i class="fas fa-store" aria-hidden="true"></i> Tashapy</span>
                                </div>
                                <div class="right">
                                    <div class="distance">160.35 km</div>
                                    <input type="hidden" name="distance" value="160.35">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div class="list-checkout">
                            <div class="product-checkout" v-for="(item,index) in listProductCheckout" :key="index">
                                <img :src="item.landing_page_image"
                                    alt="">
                                <div class="product-checkout-content">
                                    <div class="title">{{ item.title}}</div>
                                    <div class="customizations">ghi chú</div>
                                    <div class="quantity">{{item.price.list_price.toLocaleString("vi-VN")}}đ x {{ item.count }} = {{item.price.list_price * item.count.toLocaleString("vi-VN")}}đ</div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="promotion-code">
                            <div class="left">
                                <img src="	https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/icon-promotion.png"
                                    alt="" class="promotion-icon">
                                <div class="text">Mã khuyến mại</div>
                            </div>
                            <div class="right">
                                <div class="btn-add-voucher">
                                    Thêm khuyến mại
                                </div>
                            </div>
                        </div>
                        <div class="checkout-price">
                            <div class="price-top">
                                <div class="quantity">Số lượng sản phẩm: <span class="quanity-number">{{ listProductCheckout.length }}</span></div>
                                <div class="total">
                                    <span class="total-title">Tổng:</span>
                                    <div class="txt-right total-number">36,000đ</div>
                                </div>
                            </div>
                            <div class="transport-price">
                                <div class="transport-price-title">Phí vận chuyển:</div>
                                <div class="txt-right">0đ</div>
                            </div>
                            <div class="promotion-amount">
                                <div class="promotion-amount-title">Khuyến mãi:</div>
                                <div class="txt-right">0đ</div>
                            </div>
                            <div class="grand-total">
                                <div class="grand-total-title">Tổng cộng:</div>
                                <div class="txt-right grand-total-number">{{getTotalPriceCheckout}}đ</div>
                            </div>
                        </div>
                        <div class="checkout-note">
                            <textarea type="text" placeholder="Thêm ghi chú..." class="ta-checkout-note"></textarea>
                        </div>
                        <div class="wrap-checkout-btn">
                            <div class="btn-order">ĐẶT HÀNG</div>
                            <div class="btn-back-to-menu" @click="goToProductPage()">TIẾP TỤC MUA HÀNG</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PaymentCheckout',
    created(){
       let data = JSON.parse(localStorage.getItem('list-item-cart'));
       if(!data){
        data = [];
       }
       this.listProductCheckout = data;
    },
    data(){
        return {
            listProductCheckout:[]
        }
    },
    mounted() {
        console.log(this.$store.state.cart.items)
    },
    methods:{
        goToProductPage(){
            this.$router.push('/product');
        }
    },
    computed:{
        getTotalPriceCheckout(){
            let sumPrice = 0;
            this.listProductCheckout.forEach(item =>{
                sumPrice += item.price.list_price;
            })
            return sumPrice.toLocaleString("vi-VN");
        }
    }
}
</script>

<style scoped>
.page-checkout {
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 16px;
}

.checkout-top {
    display: none;
}

.tabbar-header-checkout {
    display: none;
}

.checkout-detail {
    display: flex;
    margin-top: 24px;
}

.checkout-detail-left {
    width: 60%;
}

.checkout-detail-right {
    width: 40%;
    padding-left: 16px;
}

.payment-method {
    margin-top: 32px;
}

.delivery-info-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    padding: 0 20px;
}

.delivery-info-content {
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
}

.delivery-info-content {
    background: #ffffff;
}

.delivery-info-title-left {
    font-weight: bold;
}

.delivery-info-title i {
    font-size: 14px;
    color: #adaeae;
}

.fa,
.fas {
    font-weight: 900;
}

.fa,
.far,
.fas {
    font-family: "Font Awesome 5 Free";
}

.fa,
.fab,
.fad,
.fal,
.far,
.fas {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
}

.delivery-info-content .wrap-input {
    padding: 10px 0;
    margin: 0 20px;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    align-items: center;
}

.delivery-datetime {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
}

.delivery-info-content .wrap-input input {
    /* height: 18px; */
    border: none;
    outline: none;
    margin-left: 12px;
    flex-grow: 1;
}

.delivery-location-title {
    margin: 0 20px;
    padding-top: 10px;
}

.edit-delivery-datetime {
    color: #799dd9;
    font-size: 13px;
    cursor: pointer;
}

.delivery-info-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    padding: 0 20px;
}

.delivery-info-title-left {
    font-weight: bold;
}

.payment-method .delivery-info-content {
    padding: 0 20px;
}

.delivery-info-content {
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
}

.delivery-info-content {
    background: #ffffff;
}

label.container-radio {
    margin: 0 !important;
}

.container-radio {
    display: block;
    position: relative;
    padding-left: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

input[type="radio"],
input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
}

.container-radio input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.container-radio input:checked~.checkmark-radio {
    background-color: #d8b979;
}

element.style {}

.container-radio input:checked~.checkmark-radio {
    background-color: #d8b979;
}

.checkmark-radio {
    position: absolute;
    top: calc(50% - 8px);
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #eee;
    border-radius: 50%;
}

.container-radio input:checked~.checkmark-radio:after {
    display: block;
}

.checkmark-radio:after {
    content: "";
    position: absolute;
    display: none;
}

.checkmark-radio {
    position: absolute;
    top: calc(50% - 8px);
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #eee;
    border-radius: 50%;
}

.delivery-info-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    padding: 0 20px;
}

.delivery-info-title-left {
    font-weight: bold;
}

.delivery-info-content {
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
}

.delivery-info-content {
    background: #ffffff;
}

.choose-store {
    padding: 14px 20px 10px 20px;
    border-bottom: 1px solid #f1f1f1;
}

.list-checkout {
    padding: 0 20px;
}

.product-checkout {
    display: flex;
    align-items: center;
    padding: 12px 0 8px;
    border-bottom: 1px solid #f1f1f1;
}

.product-checkout img {
    width: 70px;
    margin-right: 12px;
}

img {
    vertical-align: middle;
    border-style: none;
}

.product-checkout .title {
    font-weight: bold;
    padding-bottom: 5px;
}

.product-checkout .customizations {
    font-size: 13px;
    padding-left: 5px;
    color: #7c7c7c;
}

.product-checkout .quantity {
    font-size: 13px;
    padding-left: 5px;
    padding-top: 3px;
    font-weight: bold;
    color: #8a733f;
}

.promotion-code {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px 15px;
    border-bottom: 1px solid #f1f1f1;
}

.promotion-code .left {
    display: flex;
    align-items: center;
}

.promotion-icon {
    width: 24px;
    margin-right: 16px;
}

.btn-add-voucher {
    color: #ffffff;
    text-transform: none;
    border-radius: 30px;
    border: none;
    height: 30px;
    padding: 0 18px;
    font-weight: 500;
    background: #d8b979;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.checkout-price {
    padding: 6px 20px;
}

.price-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.price-top .total,
.transport-price,
.promotion-amount,
.grand-total {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 4px 0;
}

.grand-total {
    border-bottom: 1px solid #f1f1f1;
}

.price-top .total-number,
.price-top .quanity-number {
    font-weight: bold;
}

.txt-right {
    width: 80px;
    text-align: right;
}

.grand-total-title {
    font-weight: bold;
}

.grand-total .txt-right {
    color: #86744e;
    font-weight: bold;
}

.ta-checkout-note {
    background: #ffffff;
    border: none;
    box-shadow: none;
    width: 100% !important;
    box-sizing: border-box;
    height: 100%;
    outline: 0;
    transition: height 2s ease;
    font-size: 14px;
    padding: 10px 20px 4px;
    border-top: 1px solid #f1f1f1;
}

textarea {
    overflow: auto;
    resize: vertical;
}

input,
button,
select,
optgroup,
textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

.wrap-checkout-btn {
    padding: 15px;
}

.btn-order {
    background: #ee4d2d;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    border-radius: 30px;
    width: 100%;
    outline: 0;
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
}

.btn-back-to-menu {
    background: #ffffff;
    color: #d8b979;
    height: 32px;
    border-radius: 30px;
    width: 100%;
    outline: 0;
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 10px;
    border: 1px solid #d8b979;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

@media only screen and (max-width: 965px) {
    .page-checkout {
        padding: 0 16px;
        width: 100%;
    }

    .checkout-detail {
        flex-wrap: wrap;
    }

    .checkout-detail-left {
        width: 100%;
    }

    .checkout-detail-right {
        padding-left: 0px;
    }

    .checkout-detail-right {
        width: 100%;
    }
}</style>