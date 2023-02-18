<template>
    <div class="home-hot-product">
        <div class="section-title">
            <div class="text-1">ToCoToCo Menu</div>
            <div class="text-2">Sản phẩm nổi bật</div>
            <div class="icon-bottom-title"></div>
        </div>

        <div class="section-content container">
            <div class="list-product">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>

            <div class="button-type-one btn-view-all">Xem tất cả</div>

        </div>
       

    </div>

</template>
<script>
import ProductItem from '@/components/product/ProductItem.vue'
export default {
    name: 'ListProduct',
    components:{
        ProductItem
    }
}
</script>
<style scoped>
.home-hot-product{
    padding: 50px 0px 60px 0px;
}
.section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.section-title .text-1 {
    color: #d3b673;
    font-size: 22px;
    margin-bottom: 5px;
    font-family: Muli, sans-serif;
    font-weight: bold;
}

.section-title .text-2 {
    font-size: 36px;
    text-align: center;
    text-transform: capitalize;
    color: #000000;
    margin-bottom: 10px;
    font-family: "BalooExtra" !important;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    margin-bottom: 0 !important;
    padding: 0 50px;
}

.icon-bottom-title {
    background: url(https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/home_line.webp) no-repeat center;
    width: 315px;
    height: 30px;
}

.section-content {
    display: flex;
    flex-direction: column;
}

.section-content {
    display: flex;
    justify-content: center;
}
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.container {
    padding: 0 !important;
}

 .list-product {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
}

.btn-view-all {
    margin-top: 16px;
    align-self: center;
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


@media (max-width: 1200px){
    .container {
    max-width: 1140px;
}
}

@media (max-width: 992px){
    .container {
    max-width: 960px;
}
}

@media (max-width: 768px){
    .container {
    max-width: 720px;
}
}
@media (max-width: 576px){
    .container {
    max-width: 540px;
}
}




</style>