<template>
    <div>
        <input ref="uploader" class="d-none" type="file" @change="onFileChanged" accept="image/*" />
        <v-card class="upload-image">
            <v-card-title>Chọn ảnh đại diện</v-card-title>
            <v-card-text class="area-image-drop" v-viewer>
                <img v-if="isSelectedImage" :src="imageURL" />
                <div class="upload-event">
                    <v-btn color="#d46605" dark :loading="isSelecting" @click="handleFileImport">
                        <svg-icon type="mdi" :path="path"></svg-icon>
                    </v-btn>
                    <div class="note">
                        <p>Drop your image here or <a>browse</a></p>
                        <span>Support JPG, PNG</span>
                    </div>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn v-if="isSelectedImage" color="deep-purple lighten-2" text @click="uploadImage">
                    upload
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiFileUploadOutline } from '@mdi/js';
import axios from 'axios';
import { UPDALOAD_IMAGE } from '@/constant/common/UrlApi'
export default {
    name: 'UploadImage',
    components: {
        SvgIcon
    },
    data() {
        return {
            isSelecting: false,
            path: mdiFileUploadOutline,
            imageURL: '',
            fileUpload: null,
        }
    },
    computed: {
        isSelectedImage() {
            if (this.imageURL === '' || this.imageURL === null || this.imageURL === undefined) {
                return false;
            }
            return true;
        }
    },
    methods: {
        handleFileImport() {
            this.isSelecting = true;
            window.addEventListener('focus', () => {
                this.isSelecting = false
            }, { once: true });
            this.$refs.uploader.click();
        },
        async onFileChanged(e) {
            //preview image
            this.fileUpload = e.target.files[0];
            this.imageURL = URL.createObjectURL(this.fileUpload)
        },

        async uploadImage() {
            //upload image
            if (this.fileUpload) {
                debugger
                let uploadURL = await this.uploadImageApi(this.fileUpload);
                this.$emit('input', uploadURL);
            }
        },
        async uploadImageApi(file) {
            const data = new FormData();
            data.append('file', file);
            try {
                const responseURL = await axios.post(UPDALOAD_IMAGE, data);
                return responseURL.file;
            } catch (error) {
                return null;
            }
        }
    }
}


</script>

<style scoped>
#blog {
    width: 70%;
    margin: 0px auto;
}

img {
    width: 60%;
    height: 100%;
    margin-left: 5px;
    object-fit: contain;
}

.area-image-drop {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
    padding: 10px 50px;
}

.upload-event {
    width: 70%;
    height: 100%;
    border: 4px dashed #d46605;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.upload-image {
    margin: 10px 0px;
}
</style>