<template>
    <div class="content">
        <CardItem v-for="item in contentCardData" :key="item.title" :title="item.title" :content="item.content"/>
    </div>
</template>
<script>
import CardItem from '@/components/introduction/CardItemDetail.vue';
import {contentCard} from '@/constant/introduction/CardItem'
export default {
    name: 'CartItem',
    components:{
        CardItem
    },
    data() {
        return {
            contentCardData: contentCard
        }
    }
}
</script>

<style scoped>
.content {
    display: flex;
    flex-wrap: wrap;
}

@media only screen and (max-width: 1044px) {
    .content {
        justify-content: center;
    }

}
</style>