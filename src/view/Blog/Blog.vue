<template>
    <div>
        <div id="blog">
            <lable>Tieu de</lable>
            <input type="text" v-model="blogData.title" />
            <lable>Noi dung</lable>
            <div id="blog-content">
                <Editor @passData="getContent($event)" v-bind="$props"/>
            </div>
            <button @click="showData">Click</button>
        </div>
    </div>
</template>

<script>
import Editor from '@/components/common/Editor.vue'
export default {
    name: 'BlogEditor',
    props: {
        editorId: {
            type: String,
            default: 'blog-content',
        },
    },
    components: {
        Editor
    },
    methods: {
        showData: function () {
            console.log(this.blogData);
        },
        getContent(data) {
            this.blogData.editorData = data;
        },
    },
    data() {
        return {
            blogData: {
                editorData: "",
                title: ""
            }
        }
    }
}

</script>