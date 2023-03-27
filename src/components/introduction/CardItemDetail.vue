<template>
    <div class="card-item">
        <h1 class="title-card-item">{{ title }}</h1>
        <div class="content-card-item">
            <p>
                {{ content }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardItemDetail',
    props: {
        title: String,
        content: String
    }
}
</script>

<style scoped>
.card-item {
    padding: 5px;
    width: 170px;
    margin-left: 10px;
    border: 1px solid rgb(242, 160, 41);
    background-color: rgb(242, 160, 41);
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
}

.title-card-item {
    margin: 5px 0px 5px 0px;
}
p{
    font-size: 14px;
}
</style>