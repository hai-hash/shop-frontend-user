<template>
  <div class="blogs">
    <div class="blog-wrap">
      <div class="title-blog">
        <h1 class="title-list-blog">BLOG</h1>
        <div class="border-bottom-title"></div>
      </div>
      <div class="list-blog">
        <div class="two-col">
          <div class="content-horizontal">
            <div class="content">
                <p class="title">Tiêu đề bài viết</p>
                <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
            <div class="image">
            </div>
          </div>
        </div>
        <div class="two-col">
          <div class="content-horizontal">
            <div class="content"></div>
            <div class="image"></div>
          </div>
        </div>
        <div class="two-col">
          <div class="four-col">
            <div class="full-width">
            </div>
          </div>
          <div class="four-col">
            <div class="content-vertical">
              <div class="image"></div>
              <div class="content"></div>
            </div>
          </div>
        </div>
        <div class="two-col">
          <div class="four-col">
            <div class="content-vertical">
              <div class="image"></div>
              <div class="content"></div>
            </div>
          </div>
          <div class="four-col">
            <div class="full-width">
              AAA
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListBlog',
}
</script>

<style scoped>
.blogs {
  background-color: rgb(1, 64, 35);
}

.blog-wrap {
  padding: 20px 0px;
}

.title-blog {
  padding-left: 10px;
  min-width: 1000px;
  width: 1000px;
  margin: 0 auto;
}

.title-list-blog {
  font-size: 24px;
  color: rgb(242, 160, 41);
}

.border-bottom-title {
  width: 50px;
  border-bottom: 4px solid rgb(242, 160, 41);
}

.list-blog {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  width: 55%;
  padding-top: 20px;
}

.two-col {
  width: 480px;
  min-width: 480px;
  margin-right: 10px;
  margin-top: 10px;
  height: 300px;
  display: flex;
  text-align: justify;
}

.four-col {
  width: calc(50% - 5px);
  height: 100%;
}

.four-col:first-child {
  margin-right: 10px;
}

.content-horizontal {
  width: 100%;
  height: 100%;
  position: relative;
}

.content-vertical {
  width: 100%;
  height: 100%;
  position: relative;
}

.content-horizontal .content {
  padding: 15px 10px 10px 10px;
  border-radius: 10px 0px 0px 10px;
  width: 50%;
  height: 100%;
  background-color: white;
  display: inline-block;
}

.content-horizontal .title {
  font-weight: bold;
  margin-bottom: 0px;
}

.content-horizontal .text {
  text-align: justify;
}


.content-horizontal .image {
  border-radius: 0px 10px 10px 0px;

  width: 50%;
  height: 100%;

  background-image: url('@/assets/category-2.jpg');
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;  

  display: inline-block;
  position: absolute;
}

.content-vertical .image {
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  height: 35%;
  background-color: yellow;
  position: absolute
}

.content-vertical .content {
  border-radius: 0px 0px 10px 10px;
  width: 100%;
  height: 65%;
  background-color: red;
  position: absolute;
  bottom: 0px;
}

.full-width {
  border-radius: 10px 10px 10px 10px;
  width: 100%;
  height: 100%;
  background-color: red;
  position: relative;
}

@media (min-width: 960px) {

}

@media only screen and (max-width: 960px) {

}

@media only screen and (max-width: 768px) {
}</style>