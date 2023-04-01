<template>
    <div>
        <div id="blog">
            <v-form>
                <v-expansion-panels  v-model=" panelContent" multiple>
                    <v-expansion-panel>
                        <v-expansion-panel-header>Thông tin tổng quan bài viết</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-text-field clearable label="Tiêu đề bài viết" variant="outlined" v-model="blogData.title"
                                outlined></v-text-field>
                            <v-select label="Page type" outlined :items="pageTypes" item-value="value" item-text="label"
                                v-model="blogData.page_type"></v-select>
                            <v-textarea outlined label="Mô tả ngắn" placeholder="Mô tả ngắn"
                                v-model="blogData.short_desc"></v-textarea>
                            <UploadImage title="Upload Image" v-model="blogData.image" />
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>

                <v-expansion-panels accordion v-model="panelMedia" multiple>
                    <v-expansion-panel>
                        <v-expansion-panel-header>SEO Website</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-text-field clearable label="Meta title" variant="outlined" v-model="blogData.seo.meta_title"
                                outlined></v-text-field>
                            <v-text-field clearable label="Từ khóa" variant="outlined" v-model="blogData.seo.meta_keywords"
                                outlined></v-text-field>
                            <v-textarea outlined label="Meta description" placeholder="Meta description"
                                v-model="blogData.seo.meta_description"></v-textarea>
                            <v-text-field clearable label="Slug" variant="outlined" v-model="blogData.seo.slug"
                                outlined></v-text-field>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>

                <v-expansion-panels accordion v-model="panelEditor" multiple>
                    <v-expansion-panel>
                        <v-expansion-panel-header>Nội dung bài viết</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <Editor v-model="blogData.long_desc"></Editor>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>

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
                    <v-btn color="black" variant="text" @click="showMessage = false">
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </div>
        <FooterPage />
    </div>
</template>

<script>
import FooterPage from '@/view/home/FooterPage.vue';
import * as types from '@/api/common/PageType';
import BlogService from '@/api/services/BlogService';
import { PAGE_TYPE_OPTION } from '@/constant/blog/blogEditer';
import Editor from '@/components/common/Editor.vue';
import UploadImage from '@/components/common/UploadImage.vue';

export default {
    name: 'BlogEditor',
    components: {
        FooterPage,
        Editor,
        UploadImage
    },
    computed: {
        isDisableCreateBtn() {
            return this.isCreateDisable;
        }
    },
    data() {
        return {
            blogData: {
                page_type: types.BLOG,
                long_desc: '',
                short_desc: '',
                title: '',
                image: null,
                seo: {
                    meta_title: '',
                    meta_keywords: '',
                    meta_description: '',
                    slug: '',
                },
            },
            dialog: false,
            isSelecting: false,
            isCreateDisable: false,
            showMessage: false,
            message: '',
            messageBg: '',
            pageTypes: PAGE_TYPE_OPTION,
            panelContent: [0],
            panelMedia: [0],
            panelEditor: [0],
        }
    },
    methods: {
        async handleCreateBlog() {
            try {
                const res = await BlogService.create(this.blogData);
                this.message = 'Thêm mới bài viết thành công';
                this.messageBg = 'success'
                this.showMessage = true;
                console.log(res);
            } catch (e) {
                console.log(e);
                this.message = 'Thêm mới bài viết thất bại';
                this.messageBg = 'error'
                this.showMessage = true;
            }
        },
    }
}

</script>

<style scoped>
#blog {
    width: 70%;
    margin: 0px auto;
    margin-top: 30px;
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