<template>
    <div class="container-manager">
        <NavbarManager :isCloseMenu="isCloseMenu" />
        <v-card class="container-manager-content">
            <AppBarManager @handleActionMenu="handleActionMenu" />
            <v-main>
                <v-container fluid class="container-content">
                    <div class="blog-list">
                        <h3 class="title-page">Blog list</h3>
                        <p class="link">Home/BlogList</p>
                        <router-view></router-view>
                    </div>
                </v-container>
            </v-main>
        </v-card>
    </div>
</template>
<script>
import NavbarManager from '@/components/common/NavbarManager.vue';
import AppBarManager from '@/components/common/AppBarManager.vue';
export default {
    name: "AdminHome",
    data() {
        return {
            isCloseMenu: true,
        }
    },
    components: {
        NavbarManager,
        AppBarManager
    },
    methods: {
        handleActionMenu() {
            this.isCloseMenu = !this.isCloseMenu;
        }
    }
}
</script>

<style>
.container-manager-content {
    height: 100%;
    flex-grow: 1;
    border-radius: unset !important;
}

.container-manager {
    display: flex;
    height: 100%;
}

.container-content {
    background-color: rgb(240 248 255);
}

.container-manager .v-toolbar__content {
    width: unset !important;
}

.container-manager .v-app-bar {
    height: 60px !important;
}

.blog-list {
    max-width: 96%;
    margin: 0 auto;
}

.title-page {
    margin-top: 20px;
    margin-bottom: 10px;
}

.link {
    color: blue;
    margin-bottom: 30px !important;
    font-size: 14px;
}</style>