<template>
    <div class="product-card">
        <div class="tags">
            <div class="new-tag">new</div>
            <div class="discount-tag">39%</div>
        </div>
        <div class="img-wrap">
            <img  src="@/assets/Tra-Dao-Dau-Tay-Kem-Pho-Mai.png" alt/>
        </div>
        <div class="product-card-content">
            <div class="product-title">Ô Long Xoài Kem Cà Phê</div>
            <div class="product-price">
                <div class="product-origin-price">28,000đ</div>
                <div class="product-sale-price">46,000đ</div>
            </div>
            <div class="button-type-one btn-order-product" @click="handleOrder">Đặt Hàng</div>
        </div>
    </div>

</template>
<script>
export default{
    name: 'ProductItem',
    methods:{
        handleOrder(){
            this.$router.push('/order')
        }
    }
}
</script>
<style scoped>
.product-card {
    width: calc(25% - 30px);
    margin: 0 15px;
    margin-bottom: 32px;
    box-shadow: 0px 2px 1.5px 0px #ccc;
    border-top: 1px solid #f1f1f1;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.product-card .tags {
    display: flex;
    width: 100%;
    position: absolute;
    padding: 16px;
    top: 0;
    justify-content: space-between;
    z-index: 1;
    align-items: center;
}

.product-card .new-tag {
    font-family: Muli;
    font-weight: 800;
    background: #d3b673;
    transform: rotate(-15deg);
    border-radius: 50%;
    color: white;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product-card .discount-tag {
    font-family: Muli;
    font-weight: 800;
    background: #282828;
    border-radius: 50%;
    color: #d3b673;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.img-wrap {
    overflow: hidden;
}

.product-card img {
    width: 100%;
    transition: all 0.2s;
    vertical-align: middle;
    border-style: none;
}

.product-card-content {
    background: #f5f5f5;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 42px;
}

.product-title {
    width: 100%;
    font-family: Muli;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    margin-top: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 8px;
}

.product-price {
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-price * {
    font-family: Muli;
    font-size: 14px;
    font-weight: 700;
    color: #8a733f;
    text-align: center;
    margin-top: 24px;
}

.product-sale-price {
    margin-left: 8px;
    color: #bebebe !important;
    transform: scale(0.9, 0.9);
    text-decoration: line-through;
}

.button-type-one {
    border: 1px solid #d3b673;
    color: #fff;
    background: #d3b673;
    padding: 8px 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 16px;
    font-family: Muli;
    display: inline-block;
}

.btn-order-product {
    padding: 2px 16px;
    margin-top: 16px;
    margin-bottom: 12px;
}
.product-card:hover .product-card-content {
    top: 0;
}
.product-card:hover img {
    transform: scale(1.2, 1.2);
}
@media only screen and (max-width: 768px){
    .product-card {
    width: calc(50% - 30px) !important;
}
}

</style>