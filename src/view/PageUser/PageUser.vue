<template>
    <div>
        <NavBar />
        <router-view></router-view>
    </div>
</template>
<script>
import NavBar from '@/components/common/NavBar.vue'
export default {
    name: 'PageUser',
    components: {
        NavBar,
    },
}
</script>
