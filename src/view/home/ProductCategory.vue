<template>
<div class="product-category-wrap">
    <div class="title-product-category">
        <h1 class="title-list-category">CÁC DÒNG SẢN PHẨM</h1>
    <div class="border-bottom-title"></div>
    </div>
    <div class="list-product-category">
        <CategoryProductItem v-for="(item,index) in listCategory" :key="index" :itemData="item"/>
    </div>
    
</div>
</template>
<script>
import CategoryProductItem from '@/components/category/CategoryProductItem.vue';
export default{
    name:'ProductCategory',
    components:{
        CategoryProductItem 
    },
    props:{
        listCategory:[]
    },
    data(){
        return {
        }
    }
}
</script>
<style scoped>
.product-category-wrap{
    padding: 20px 0px;
    margin: 0 auto;
}
.title-product-category{
    margin: 20px 5px;
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
    flex-wrap: wrap;
}
@media (min-width: 960px){
    
.product-category-wrap {
    max-width: 1000px;
    min-width: 900px
}
}

@media only screen and (max-width: 960px){
    .product-category-wrap {
   width: 100%;
}
}
@media only screen and (max-width: 768px){
    .product-category-wrap {
    max-width: 550px;
    min-width: 400px
}
}

</style>