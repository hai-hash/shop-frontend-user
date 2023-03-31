<template>
    <div class="order-center">
        <div class="main-center">
           <ListProductByCategory @addItemToCard="addItemToCard"/>
        </div>
    </div>

</template>
<script>
import ListProductByCategory from './ListProductByCategory.vue';
export default {
    name:'OrderCenter',
    components:{
        ListProductByCategory
    },
    methods:{
        addItemToCard(item){
            this.$emit('addItemToCard',item);
        },
    }
}
</script>

<style scoped>
.order-center {
    width: 1px;
    flex-grow: 1;
}
.main-center {
    padding-bottom: 150px;
}
</style>