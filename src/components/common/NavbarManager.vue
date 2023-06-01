<template>
    <v-navigation-drawer :mini-variant.sync="drawer" permanent>
        <v-list-item class="px-2">
            <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-title>Hải Nguyễn</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    name: "NavbarManager",
    props: {
        isCloseMenu: Boolean
    },
    data() {
        return {
            drawer: true,
            items: [
                { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                { title: 'My Account', icon: 'mdi-account' },
                { title: 'Users', icon: 'mdi-account-group-outline' },
                { title: 'Posts', icon: 'mdi-post' },
                { title: 'Product', icon: 'mdi-cart' },
                { title: 'Chat', icon: 'mdi-chat' },
                { title: 'Email', icon: 'mdi-email' },
                { title: 'Contact', icon: 'mdi-card-account-phone' },
                { title: 'Calendar', icon: 'mdi-calendar-clock-outline' },
            ],
            mini: true,
        }
    },
    watch: {
        isCloseMenu:{
            handler(value){
                this.drawer = value;
            },
            immediate:true
        }
    }
}
</script>