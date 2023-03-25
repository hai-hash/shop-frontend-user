<template>
    <ShareNetwork :network="network.network" :url="sharing.url" :title="sharing.title" :description="sharing.description"
        :quote="sharing.quote" :hashtags="sharing.hashtags" :twitterUser="sharing.twitterUser">
        <i :class="network.icon" :style="{ backgroundColor: network.color }" class="icon-share"></i>
        <span class="app-share-name">{{ network.name }}</span>
    </ShareNetwork>
</template>
<script>
export default {
    name: 'SharingItem',
    props: {
        network: Object,
        sharing: Object
    }
}
</script>
<style scoped>
    a {
    flex: none;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 5px 5px 0;
    font-size: 12px;
    text-decoration: none;
}

a .icon-share {
    color: #FFFFFF !important;
}

a .fah {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 10px;
    flex: 0 1 auto;
}

a span {
    padding: 0 10px;
    flex: 1 1 0%;
    font-weight: 500;
}

.icon-share {
    border-radius: 100%;
    height: 60px;
    width: 60px;
    text-align: center;
    line-height: 40px;
}

a .app-share-name {
    color: #000 !important;
}
</style>