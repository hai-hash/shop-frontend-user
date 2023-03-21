<template>
    <div>
        <v-list>
            <div v-for="(item,index) in subMenuItem" :key="index">
            <v-list-item v-if="item.children.length === 0" link @click="handleClickTitle(item.path)">
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>

                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item >

                <v-list-group :value="false" no-action sub-group v-else>
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item v-for="(subItem, i) in item.children" :key="i" link @click="handleClickTitle(subItem.path)">
                        <v-list-item-title v-text="subItem.title"></v-list-item-title>

                        <v-list-item-icon>
                            <v-icon >mdi-delete</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-group>
            </div>
        </v-list>
    </div>
</template>
<script>
export default{
    name: 'NavBarItemCommon',
    props:{
        subMenuItem:Array,
        handleClickTitle: Function
    },
}
</script>