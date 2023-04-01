<template>
    <div class="technology-item">
        <div class="technology-content" @click="handleClickViewPageDetail()">
            <h1 class="title">{{dataPosts ? dataPosts.title  : ''}}</h1>
            <div class="content">{{dataPosts ? dataPosts.content : ''}} </div>
        </div>
        <div class="technology-image" v-viewer>
            <img :src="dataPosts ? dataPosts.image : ''" />
        </div>
    </div>
</template>

<script>
import { TypePageName } from '@/constant/blog/blogEditer';
export default {
    name: 'TechnologyItem',
    props:{
        dataPosts:Object
    },
    methods:{
        handleClickViewPageDetail(){
            this.$router.push(`/page/${TypePageName.TECHNOLOGY_RESEARCH}?id=${this.dataPosts.id}`)
        }
    }
}
</script>

<style scoped>
.technology-item {
    display: flex;
    border-radius: 10px;
    height: 100%;
    width: 100%;
}

.technology-content {
    padding: 10px;
    width: 50%;
    cursor: pointer;
}

.technology-image img {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
}

.technology-image {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    cursor: pointer;
}

.technology-item {
    background-color: rgb(242, 160, 41);
}
.content{
    font-size: 14px;
    overflow: hidden;
    height: 83px;
    text-overflow: ellipsis;
}
</style>