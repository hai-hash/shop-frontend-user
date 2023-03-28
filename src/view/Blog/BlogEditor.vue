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
                    <v-btn size="x-large" color="success" @click="handleCreateBlog" :disabled="isDisableCreateBtn">
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
// import UploadService from '@/api/services/UploadService';
import {items} from '@/api/configs/CKEditorConfig';

export default {
    name: 'BlogEditor',
    components: {
    },
    computed: {
        isDisableCreateBtn () {
            return this.isCreateDisable;
        }
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
            isCreateDisable: false,
            editor: DecoupledEditor,
            editorConfig: {
                placeholder: 'Nhập nội dung',
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
        async onFileChanged(e) {
            this.isCreateDisable = true;
            this.blogData.avatar = e.target.files[0].name;
            this.imageURL = URL.createObjectURL(e.target.files[0])
            this.selectedImage = true

            const data = new FormData();
            data.append('file', e.target.files[0]);
            data.append('upload_preset', 'filmtvimages');
            const response = await fetch("https://api.cloudinary.com/v1_1/filmtv/image/upload", {
                method: 'POST',
                // headers: {
                //    // 'content-type': 'application/json',
                //     'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODAzODU2NzIsImlhdCI6MTY3OTc4MDg3MiwibmJmIjoxNjc5NzgwODcyLCJzdWIiOiI2NDBhZmRhZTk5Y2M3ZWMwN2Y3NTg2YjYifQ.DJXFi0-2jFIZ3y8JIBUym8LEfLNbSqR_R1F81wuiSafr9t1b3bxFOi6rex3ELTjeZIZxwKtyzmi5bTviN9h43A',
                // },
                body: data
            })
            console.log(response)
            this.isCreateDisable = false;
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
</style>