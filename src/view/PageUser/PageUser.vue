<template>
    <div>
        <TopNavBar />
        <NavBar />
        <v-app>
            <router-view></router-view>
        </v-app>
    </div>
</template>
<script>
import NavBar from '@/components/common/NavBar.vue'
import TopNavBar from '@/components/common/TopNavBar.vue'
export default {
    name: 'PageUser',
    components: {
    NavBar,
    TopNavBar
  }
}
</script>
