<template>
    <div>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" @ready="onReady"
            @input="$emit('passData', $event)"></ckeditor>
    </div>
</template>
<script>
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import MyUploadAdapter from '@/api/CustomUploaderPlugin'
export default {
    name: 'EditorWrite',
    props: ['editorId'],
    data() {
        return {
            editor: DecoupledEditor,
            editorData: '',
            name: '',
            editorConfig: {
                placeholder: 'Nhập nội dung',
                extraPlugins: [MyUploadAdapter],
                toolbar: {
                    items: [
                        "selectAll",
                        "undo",
                        "redo",
                        "alignment:left",
                        "alignment:right",
                        "alignment:center",
                        "alignment:justify",
                        "alignment",
                        "fontSize",
                        "fontFamily",
                        "fontColor",
                        "fontBackgroundColor",
                        "bold",
                        "italic",
                        "strikethrough",
                        "underline",
                        "blockQuote",
                        "link",
                        "ckfinder",
                        "uploadImage",
                        "imageUpload",
                        "heading",
                        "imageTextAlternative",
                        "toggleImageCaption",
                        "resizeImage:original",
                        "resizeImage:25",
                        "resizeImage:50",
                        "resizeImage:75",
                        "resizeImage",
                        "imageResize",
                        "imageStyle:inline",
                        "imageStyle:alignLeft",
                        "imageStyle:alignRight",
                        "imageStyle:alignCenter",
                        "imageStyle:alignBlockLeft",
                        "imageStyle:alignBlockRight",
                        "imageStyle:block",
                        "imageStyle:side",
                        "imageStyle:wrapText",
                        "imageStyle:breakText",
                        "indent",
                        "outdent",
                        "numberedList",
                        "bulletedList",
                        "mediaEmbed",
                        // "insertTable",
                        // "tableColumn",
                        // "tableRow",
                        // "mergeTableCells",
                    ]
                }
            }
        }
    },
    methods: {
        onReady(editor) {
            document.getElementById(this.$props['editorId']).prepend(editor.ui.view.toolbar.element);
        }
    }
}
</script>

<style scoped>
#preview-content table {
    border: 3px solid black !important
}
</style>