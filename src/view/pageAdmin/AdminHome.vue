<template>
    <div class="container-manager">
        <NavbarManager :isCloseMenu="isCloseMenu"/>
        <v-card class="container-manager-content">
           <AppBarManager @handleActionMenu = "handleActionMenu"/>
            <v-main>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-main>

            <v-footer>
            </v-footer>

        </v-card>
    </div>
</template>
<script>
import NavbarManager from '@/components/common/NavbarManager.vue';
import AppBarManager from '@/components/common/AppBarManager.vue';
export default {
    name: "AdminHome",
    data(){
        return{
            isCloseMenu: true,
        }
    },
    components:{
        NavbarManager,
        AppBarManager
    },
    methods:{
        handleActionMenu(){
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

.container-manager .v-toolbar__content{
    width: unset !important;
} */
.container-manager .v-app-bar{
    height: 60px !important;
}
</style>