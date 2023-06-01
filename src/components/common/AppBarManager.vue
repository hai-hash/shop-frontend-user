<template>
     <v-app-bar color="#4cb6e0" dense dark>
                <v-app-bar-nav-icon @click="handleActionMenu"></v-app-bar-nav-icon>
                <v-toolbar-title>Manager Page</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-message-text</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-email</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-bell</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-menu left bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="n in 5" :key="n" @click="() => { }">
                            <v-list-item-title>Option {{ n }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-app-bar>
</template>
<script>
export default{
    name:"AppBarManager",
    methods:{
        handleActionMenu(){
            this.$emit("handleActionMenu")
        }
    }
}
</script>