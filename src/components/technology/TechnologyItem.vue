<template>
    <div class="technology-item">
        <div class="technology-content">
            <h1 class="title">{{dataPosts ? dataPosts.title  : ''}}</h1>
            <div class="content">{{dataPosts ? dataPosts.content.substring(0,100) : ''}}[...] </div>
        </div>
        <div class="technology-image" v-viewer>
            <img src="@/assets/vstp-1.jpg" />
        </div>
    </div>
</template>

<script>

export default {
    name: 'TechnologyItem',
    props:{
        dataPosts:Object
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
    overflow: hidden;
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
</style>