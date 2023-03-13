<template>
<div class="product-category-wrap">
    <div class="title-product-category">
        <h1 class="title-list-category">CÁC DÒNG SẢN PHẨM</h1>
    <div class="border-bottom-title"></div>
    </div>
    <div class="list-product-category">
        <div class="category-item-product">
            <img src="@/assets/category-1.jpg"/>
            <div class="content-product-category">
                <h1 class="title-category-item-product">ĐÔNG TRÙNG HẠ THẢO</h1>
            <v-btn color="#d46605" class="button-view-now">XEM NGAY</v-btn>
            </div>
           
        </div>
        <div class="category-item-product">
            <img src="@/assets/category-2.jpg"/>
            <div class="content-product-category">
                <h1 class="title-category-item-product">ĐÔNG TRÙNG HẠ THẢO</h1>
            <v-btn color="#d46605" class="button-view-now">XEM NGAY</v-btn>
            </div>
        </div>
        <div class="category-item-product">
            <img src="@/assets/category-1.jpg"/>
            <div class="content-product-category">
                <h1 class="title-category-item-product">ĐÔNG TRÙNG HẠ THẢO</h1>
            <v-btn color="#d46605" class="button-view-now">XEM NGAY</v-btn>
            </div>
        </div>
        <div class="category-item-product">
            <img src="@/assets/category-2.jpg"/>
            <div class="content-product-category">
                <h1 class="title-category-item-product">ĐÔNG TRÙNG HẠ THẢO</h1>
            <v-btn color="#d46605" class="button-view-now">XEM NGAY</v-btn>
            </div>
        </div>
    </div>
    
</div>
</template>
<script>
export default{
    name:'ProductCategory'
}
</script>
<style scoped>
.product-category-wrap{
    padding: 20px 0px;
    margin: 0 auto;
}
.title-product-category{
    margin: 20px 0px;
}
.title-list-category{
    font-size: 28px;
    color: rgb(242, 160, 41);
}
.border-bottom-title{
    width: 100px;
    border-bottom: 4px solid rgb(242, 160, 41);
}
.list-product-category{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.category-item-product{
   margin: 5xp 5px;
   position: relative;
   height: 310px;
   width: 210px;
   margin:10px 10px
}
.category-item-product:before {
    content: '';
    position:absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba(42,88,50,1) 5%, rgba(52,99,22,0.6195728291316527) 44%, rgba(73,123,61,0.364670868347339) 86%, rgba(72,122,62,0) 95%, rgba(94,136,43,0.30584733893557425) 100%, rgba(36,179,41,0.19100140056022408) 100%);
    z-index: 1;
}
.category-item-product img{
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 5px;
}
.content-product-category{
    position: absolute;
    bottom: 30px;
    left: 10px;
    z-index: 2;
}
.title-category-item-product{
    font-size: 24px;
    color: rgb(242, 160, 41);
}
@media only screen and (max-width:  936px) {
    .product-category-wrap{
        margin: 0 50px;
    }
}
</style>