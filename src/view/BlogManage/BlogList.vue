<template>
        <v-card class="layout-content">
            <v-row class="layout-row-element">
                <v-col cols="2" class="layout-col-element">
                    <div class="wrap-element">
                        <v-text-field label="Search Blog" outlined dense class="search-box"></v-text-field>
                    </div>
                </v-col>
                <v-col cols="10">
                    <div class="wrap-element">
                        <v-row>
                            <v-col cols="9">
                                <div class="action-left">
                            <v-checkbox v-model="ex4" color="red" value="red" hide-details></v-checkbox>
                            <v-btn class="ma-2" color="error">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                        </div>
                            </v-col>
                            <v-col cols="3">
                                <v-btn @click="goToEditor" class="ma-2 add-button" color="#4cb6e0">
                            <v-icon>mdi-plus</v-icon>Blog
                        </v-btn>
                            </v-col>
                        </v-row>
                       
                       
                    </div>
                </v-col>
            </v-row>
            <v-row class="layout-row-element">
                <v-col cols="2" class="layout-col-element">
                    <ListFilter/>
                </v-col>
                <v-col cols="10">
                    <div class="wrap-blog-list">
                        <BlogRowData/>
                        <BlogRowData/>
                        <BlogRowData/>
                        <BlogRowData/>
                        <BlogRowData/>
                        <BlogRowData/>
                        <BlogRowData/>
                        <BlogRowData/>
                        <BlogRowData/>
                        <BlogRowData/>
                    </div>
                </v-col>
            </v-row>
        </v-card>
</template>
<script>
import BlogRowData from '@/components/blog/BlogRowData.vue';
import ListFilter from '@/components/common/ListFilter.vue';
export default {
    name: "BlogList",
    components: {
        BlogRowData,
        ListFilter
    },
    data() {
        return {

        }
    },
    methods:{
        goToEditor(){
            this.$router.push("blog/editor");
        }
    }
}

</script>
<style scoped>
.search-box {
    margin-left: 15px;
}

.layout-row-element {
    padding: unset !important
}

.layout-col-element {
    border-right: 1px solid rgba(0, 0, 0, .1);
}

.wrap-element {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    height: 100%;
}

.add-button {
    position: absolute;
    right: 0px;
    color: white;
}
.action-left{
    display: flex;
    align-items: center;
}
</style>