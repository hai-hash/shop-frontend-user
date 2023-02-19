<template>
    <div class="product">
        <img src="https://tocotocotea.com/wp-content/uploads/2023/01/Tra-sua-pho-mai-tuoi.png" alt>
        <div class="product-name">Trà Sữa Phô Mai Tươi</div>
        <div class="product-price">
            <p class="product-origin-price">28,000đ</p>
            <p class="product-sale-price">28,000đ</p>
        </div>
        <div class="btn-increase">+</div>
    </div>

</template>
<script>
export default {
    name:'ProductItem'
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
}

</style>