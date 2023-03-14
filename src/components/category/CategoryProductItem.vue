<template>
     <div class="category-item-product">
            <img src="@/assets/category-2.jpg"/>
            <div class="content-product-category">
                <h1 class="title-category-item-product">{{ itemData.title }}</h1>
            <v-btn color="#d46605" class="button-view-now">XEM NGAY</v-btn>
            </div>
           
        </div>
</template>
<script>
export default{
    name:'ProductCategoryItem',
    props:{
        itemData:Object
    }
}
</script>

<style scoped>
.category-item-product{
   position: relative;
   height: 310px;
   width: calc(25% - 20px);
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
    border-radius: 10px;
}
.category-item-product img{
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 10px;
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

@media only screen and (max-width: 768px){
    .category-item-product{
        width: calc(50% - 20px);
        height: 320px;
    }
}

</style>