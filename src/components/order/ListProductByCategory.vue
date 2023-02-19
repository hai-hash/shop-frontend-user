<template>
    <div class="category">
        <div class="category-name">
            <div class="category-title">Món nổi bật</div>
            <div class="extend-icon">close</div>
        </div>
        <div class="list-product">
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </div>

    </div>

</template>
<script>
import ProductItem from '@/components/order/ProductItem.vue'
export default{
    name:'ListProductByCategory',
    components:{
        ProductItem
    }
}
</script>
<style scoped>
.main-center .category {
    background: #ffffff;
    margin-top: 16px;
}

.category-name {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    padding-bottom: 16px;
    cursor: pointer;
    align-items: center;
}
.category-title {
    font-weight: bold;
}
.list-product {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
}
</style>