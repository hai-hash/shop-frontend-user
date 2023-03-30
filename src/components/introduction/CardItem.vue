<template>
    <div class="content">
        <CardItem v-for="(item,index) in contentCardData" :key="index" :item="item"/>
    </div>
</template>
<script>
import CardItem from '@/components/introduction/CardItemDetail.vue';
import pageApi from '@/api/services/BlogService';
import {TypePage} from '@/constant/blog/blogEditer';
export default {
    name: 'CartItem',
    components:{
        CardItem
    },
    created(){
        this.getPosts();
    },
    data() {
        return {
            contentCardData: []
        }
    },
    methods:{
        async getPosts(){
           
           const filter = {
                $and: [
                    {
                        page_type: {
                            $in: [TypePage.COMMIT]
                        }
                    }
                ]
        }
       
        const data = {
            page: 1,
            limit: 10,
            filter,
            sort: { sell_quantity: 1 }
        }
        try {
            this.contentCardData = [];
            const res = await pageApi.getPageByFilter(data);
           res.forEach(element => {
                this.contentCardData.push({
                    id:element.id,
                    title:element.title,
                    content:element.short_desc,
                });
           });
        } catch (error) {
            console.log(error)
        }
       
        
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