<template>
    <v-card class="blog-row-data">
        <v-row>
            <v-col cols="9">
                <div class="content-blog">
                    <div class="content-blog-left">
                        <v-checkbox v-model="ex4" color="red" value="red" hide-details></v-checkbox>
                    </div>
                    <div class="content-blog-right">
                        <div class="blog-title">
                            Love Bloging, Love gridiea
                        </div>
                        <div class="blog-information">
                            <span>Published</span>
                            <span>2019-02-11</span>
                            <span>Text</span>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col cols="3">
                <div class="blog-image">
                    <img src="@/assets/Slide_banner-1-1.jpg" alt="" />
                </div>
            </v-col>
        </v-row>

    </v-card>
</template>
<script>
export default {
    name: "BlogRowData"
}
</script>
<style>
.content-blog{
    display: flex;
    height: 100%;
}
.blog-information{
    display: flex;
}
.blog-information span{
    font-size: 12px;
    margin-top: 6px;
    margin-right: 5px;
}
.content-blog-left{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
}
.content-blog-right{
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.blog-title{
    font-weight: 500;
}
.blog-row-data{
    margin-bottom: 30px;
    margin-right: 20px;
}
.blog-image{
    height: 150px;
}
.blog-image img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
</style>