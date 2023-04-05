<template>
    <div class="category">
        <div class="category-name">
            <div class="category-title">Món nổi bật</div>
            <div class="extend-icon">close</div>
        </div>
        <div class="list-product">
            <ProductItem v-for="(item, index) in listProduct" :key="index" :item="item" @addItemToCard="addItemToCard"/>
        </div>

    </div>
</template>
<script>
import ProductItem from '@/components/order/ProductItem.vue'
import { PRODUCT_API } from '@/constant/common/UrlApi';
import axios from 'axios';
export default {
    name: 'ListProductByCategory',
    components: {
        ProductItem
    },
    watch: {
        '$route.query'() {
            this.getProduct()
        }
    },
    data() {
        return {
            listProduct: []
        }
    },
    created() {
        this.getProduct();
    },
    methods: {
        addItemToCard(item){
            this.$emit('addItemToCard',item);
        },
        async getProduct() {
            let filter = {};
            if(this.$route.query.category){
                filter = {
                    $and: [
                        {
                            category_ids: {
                                $in: [this.$route.query.category]
                            }
                        }
                    ]
                }
            }
           
            const data = {
                page: 1,
                limit: 10,
                filter,
                sort: { sell_quantity: 1 }
            }
            try {
                const res = await axios.post(PRODUCT_API,data)
                this.listProduct = res;
            } catch (error) {
                console.log(error)
            }


        }
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
}</style>