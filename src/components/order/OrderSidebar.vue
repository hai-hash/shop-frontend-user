<template>
    <div class="order-sidebar sidebar-left">
        <div class="cat-title">Danh mục</div>
        <div class="list-cat">
            <div class="cat-item" v-for="(item,index) in listCategory" :key="index" @click="handleChangeCategory(item.id)">
                <div class="cat-name">{{ item.title }}</div>
                <div class="cat-amount">24</div>
            </div>
        </div>
    </div>

</template>
<script>
import productApi from '@/api/method/product/productApi';
export default {
    name: 'OrderSidebar',
    data(){
        return{
            listCategory:[]
        }
    },
    created(){
        this.getCategories();
    },
    methods:{
    async getCategories() {
      const data = {
        page: 1,
        limit: 100,
        filter:{}
      }
      try {
        const res = await productApi.getCategories(data);
        this.listCategory = res;
      } catch (error) {
        console.log(error)
      } 
    },
    handleChangeCategory(idCategory){
        this.$router.push(`/product?category=${idCategory}`);
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
.cat-title {
    padding: 10px 20px;
    font-size: 14px;
    border-bottom: 1px solid #f1f1f1;
    text-transform: uppercase;
    font-weight: bold;
}
.list-cat {
    padding: 0 16px;
}
.cat-item {
    display: flex;
    padding: 8px 0px;
    justify-content: space-between;
    border-bottom: 1px solid #f1f1f1;
    cursor: pointer;
}
.cat-amount {
    color: #8a733f;
}
</style>