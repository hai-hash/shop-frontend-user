<template>
    <div id="blog-content">
        <ckeditor :editor="editor" v-model="contentEditor" :config="editorConfig" @ready="onReady"></ckeditor>
    </div>
</template>
<script>
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import MyCustomUploadAdapterPlugin from '@/api/CustomUploaderPlugin';
import { items } from '@/api/configs/CKEditorConfig';

export default {
    name: 'BlogEditor',
    props:{
        content:{
            type: String,
            default: ''
        }
    },
    watch:{
        content:{
            immediate:true,
            handler(value){
                this.contentEditor = value;
            }
        },
        contentEditor(value){
            this.$emit('input',value);
        }
    },
    computed: {
        isDisableCreateBtn() {
            return this.isCreateDisable;
        }
    },
    data() {
        return {
            contentEditor: '',
            editor: DecoupledEditor,
            editorConfig: {
                placeholder: 'Nhập mô tả chi tiết',
                extraPlugins: [MyCustomUploadAdapterPlugin],
                toolbar: {
                    items: items
                }
            }
        }
    },
    methods: {
        onReady(editor) {
            document.getElementById('blog-content').prepend(editor.ui.view.toolbar.element);
        },
    }
}

</script>

<style scoped>
#blog {
    width: 70%;
    margin: 0px auto;
}

#preview {
    display: block;
    text-align: center;
    margin-bottom: 20px;
}

#preview-img {
    height: 300px;
    width: 300px;
}
</style>