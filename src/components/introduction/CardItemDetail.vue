<template>
    <div class="card-item"  @click="handleClickViewPageDetail()">
        <h1 class="title-card-item">{{ item.title }}</h1>
        <div class="content-card-item">
            <p>
                {{ item.content }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardItemDetail',
    props: {
        item:Object,
    },
    methods:{
        handleClickViewPageDetail(){
            this.$router.push(`/commit-page?id=${this.item.id}`)
        },
    }
}
</script>

<style scoped>
.card-item {
    padding: 5px;
    width: 170px;
    max-height: 400px;
    margin-left: 10px;
    border: 1px solid rgb(242, 160, 41);
    background-color: rgb(242, 160, 41);
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    cursor: pointer;
}

.title-card-item {
    margin: 5px 0px 5px 0px;
}
p{
    font-size: 14px;
}
</style>