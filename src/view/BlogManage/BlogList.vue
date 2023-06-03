<template>
    <div class="blog-list">
        <h3 class="title-page">Blog list</h3>
        <p class="link">Home/BlogList</p>
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
                                <v-btn class="ma-2 add-button" color="#4cb6e0">
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
    </div>
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
    }
}

</script>
<style scoped>
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
    margin-bottom: 30px;
    font-size: 14px;
}

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