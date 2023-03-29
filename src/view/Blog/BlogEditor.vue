<template>
    <div>
        <div id="blog">
            <v-form>
                <h2 style="margin-top: 20px;">Nội dung</h2>
                <v-text-field clearable label="Tiêu đề bài viết" variant="outlined" v-model="blogData.title"></v-text-field>
                <v-select
                    label="Chọn loại trang"
                    outlined
                    :items="pageTypes"
                    item-value="value"
                    item-text="text"
                    v-model="blogData.page_type"
                ></v-select>
                <v-btn color="primary" dark :loading="isSelecting" @click="handleFileImport">
                    Chọn ảnh đại diện
                </v-btn>
                <input ref="uploader" class="d-none" type="file" @change="onFileChanged" accept="image/*" />
                <div id="preview">
                    <img v-if="selectedImage" v-bind:src="imageURL" id="preview-img"/>
                </div>
                <v-textarea
                    outlined
                    label="Mô tả ngắn"
                    placeholder="Mô tả ngắn"
                    v-model="blogData.short_desc"
                ></v-textarea>
                <div id="blog-content">
                    <ckeditor :editor="editor" v-model="blogData.long_desc" :config="editorConfig" @ready="onReady"></ckeditor>
                </div>

                <h2 style="margin-top: 20px;">SEO Website</h2>

                <v-text-field clearable label="Meta title" variant="outlined" v-model="blogData.seo.meta_title"></v-text-field>
                <v-text-field clearable label="Từ khóa" variant="outlined" v-model="blogData.seo.meta_keywords"></v-text-field>
                <v-textarea
                    outlined
                    label="Meta description"
                    placeholder="Meta description"
                    v-model="blogData.seo.meta_description"
                ></v-textarea>
                <v-text-field clearable label="Slug" variant="outlined" v-model="blogData.seo.slug"></v-text-field>

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
                    <div id="preview-content" v-html="blogData.long_desc">
                    </div>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green-darken-1" block @click="dialog = false">Đóng</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-snackbar v-model="showMessage" left :color="messageBg" variant="tonal">
                    {{ message }}
            
                    <template v-slot:actions>
                    <v-btn
                        color="black"
                        variant="text"
                        @click="showMessage = false"
                    >
                        Close
                    </v-btn>
                    </template>
          </v-snackbar>
        </div>
    </div>
</template>

<script>
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import MyCustomUploadAdapterPlugin from '@/api/CustomUploaderPlugin';
import * as types from '@/api/common/PageType';
import {items} from '@/api/configs/CKEditorConfig';
import UploadService from '@/api/services/UploadService';

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
                page_type: types.BLOG,
                long_desc: "",
                short_desc: "",
                title: "",
                image: null,
                seo: {
                    meta_title: "",
                    meta_keywords: "",
                    meta_description: "",
                    slug: "",
                },
            },
            dialog: false,
            isSelecting: false,
            imageURL: null,
            selectedImage: false,
            isCreateDisable: false,
            editor: DecoupledEditor,
            showMessage: false,
            message: "",
            messageBg: "",
            pageTypes: [
                {
                    value: types.BLOG,
                    text: "Blog"
                }
            ],
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
        async handleCreateBlog() {
            await fetch('https://hina-pqmjv.appengine.bfcplatform.vn/page', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODAzODU2NzIsImlhdCI6MTY3OTc4MDg3MiwibmJmIjoxNjc5NzgwODcyLCJzdWIiOiI2NDBhZmRhZTk5Y2M3ZWMwN2Y3NTg2YjYifQ.DJXFi0-2jFIZ3y8JIBUym8LEfLNbSqR_R1F81wuiSafr9t1b3bxFOi6rex3ELTjeZIZxwKtyzmi5bTviN9h43A',
                },
                body: JSON.stringify(this.blogData)
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.message = "Thêm mới bài viết thành công";
                this.messageBg = "success"
                this.showMessage = true;
            }).catch(() => {
                this.message = "Thêm mới bài viết thất bại";
                this.messageBg = "error"
                this.showMessage = true;
            })
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

            //preview image
            this.imageURL = URL.createObjectURL(e.target.files[0])
            this.selectedImage = true

            //upload image
            let uploadURL = await UploadService.uploadImage(e.target.files[0]);
            console.log(uploadURL);
            this.blogData.image = uploadURL;
            this.isCreateDisable = false;
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