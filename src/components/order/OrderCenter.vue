<template>
    <div class="order-center">
        <div class="main-center">
           <ListProductByCategory/>
        </div>
    </div>

</template>
<script>
import ListProductByCategory from './ListProductByCategory.vue';
export default {
    name:'OrderCenter',
    components:{
        ListProductByCategory
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