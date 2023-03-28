<template>
    <div>
        <div id="blog">
            <v-form>
                <v-text-field clearable label="Tiêu đề bài viết" variant="outlined" v-model="blogData.title"></v-text-field>
                <v-btn color="primary" dark :loading="isSelecting" @click="handleFileImport">
                    Chọn ảnh đại diện
                </v-btn>
                <input ref="uploader" class="d-none" type="file" @change="onFileChanged" accept="image/*" />
                
                <div id="preview">
                    <img v-if="selectedImage" v-bind:src="imageURL" id="preview-img"/>
                </div>
                <div id="blog-content">
                    <ckeditor :editor="editor" v-model="blogData.content" :config="editorConfig" @ready="onReady"></ckeditor>
                </div>
                <v-card-actions>
                    <v-btn size="x-large" color="success" @click="handleCreateBlog">
                        Thêm mới
                        <v-icon end icon="mdi-vuetify"></v-icon>
                    </v-btn>
                    <v-col class="text-right">
                        <v-btn size="x-large" color="info" @click="dialog = true">
                            Xem trước
                        </v-btn>
                    </v-col>
                </v-card-actions>

            </v-form>
            <v-dialog v-model="dialog" width="800">
                <v-card>
                    <v-card-title class="text-h5">
                        Xem trước
                    </v-card-title>
                    <v-divider></v-divider>
                    <div id="preview-content" v-html="blogData.content">
                    </div>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green-darken-1" block @click="dialog = false">Đóng</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import MyCustomUploadAdapterPlugin from '@/api/CustomUploaderPlugin';
export default {
    name: 'BlogEditor',
    components: {
    },
    data() {
        return {
            blogData: {
                content: "",
                title: "",
                type: "BLOG",
                avatar: null,
            },
            dialog: false,
            isSelecting: false,
            imageURL: null,
            selectedImage: false,
            editor: DecoupledEditor,
            editorConfig: {
                placeholder: 'Nhập nội dung',
                extraPlugins: [MyCustomUploadAdapterPlugin],
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
            document.getElementById('blog-content').prepend(editor.ui.view.toolbar.element);
        },
        handleCreateBlog() {
           //send api
        },
        getContent(data) {
            this.blogData.content = data;
        },
        handleFileImport() {
            this.isSelecting = true;
            window.addEventListener('focus', () => {
                this.isSelecting = false
            }, { once: true });
            this.$refs.uploader.click();
        },
        onFileChanged(e) {
            this.blogData.avatar = e.target.files[0].name;
            this.imageURL = URL.createObjectURL(e.target.files[0])
            this.selectedImage = true
            // UPLOAD FILE HEAR

            // console.log(this.blogData.avatar);

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

#preview-content {
   padding: 10px 10px 10px 10px !important;
}
</style>