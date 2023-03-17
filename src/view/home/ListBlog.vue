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
              <div class="text">
                <p class="title">Tiêu đề bài viết</p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </div>
              <div class="time-and-share">
                <p class="time"> 20h | tin moi</p>
                <img class="share" src="@/assets/share.png" />
              </div>
            </div>
            <img class="half-content-image" src="@/assets/category-2.jpg" />
          </div>
        </div>
        <div class="two-col">
          <div class="content-horizontal">
            <img src="@/assets/category-2.jpg" class="full-content-image">
            <div class="no-content-blog">
              <div class="blank-content">
                <img class="youtube-icon" src="@/assets/youtube-icon.png" />
                <p class="title">Tiêu đề bài viết</p>
              </div>
              <div class="time-and-share">
                <p class="time"> 20h | tin moi</p>
                <img class="share" src="@/assets/white-share-icon.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="two-col">
          <div class="four-col">
            <div class="content-horizontal">
              <img src="@/assets/category-2.jpg" class="full-content-image">
              <div class="no-content-blog">
                <div class="blank-content">
                  <p class="title">Tiêu đề bài viết</p>
                </div>
                <div class="time-and-share">
                  <p class="time"> 20h | tin moi</p>
                  <img class="share" src="@/assets/white-share-icon.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="four-col">
            <div class="content-vertical">
              <img src="@/assets/category-2.jpg" class="full-content-image">
              <div class="content">
                <div class="text">
                  <p class="title">Tiêu đề bài viết</p>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </div>
                <div class="time-and-share">
                  <p class="time"> 20h | tin moi</p>
                  <img class="share" src="@/assets/share.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="two-col">
          <div class="four-col">
            <div class="content-vertical">
              <img src="@/assets/category-2.jpg" class="full-content-image">
              <div class="content">
                <div class="text">
                  <p class="title">Tiêu đề bài viết</p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div class="time-and-share">
                  <p class="time"> 20h | tin moi</p>
                  <img class="share" src="@/assets/share.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="four-col">
            <div class="content-horizontal">
              <img src="@/assets/category-2.jpg" class="full-content-image">
              <div class="no-content-blog">
                <!-- <p class="plus-icon">+</p> -->
                <img class="plus-icon" src="@/assets/plus_orange.png" />
              </div>
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
  data() {
    return {
      image: '/assets/category-2.jpg'
    }
  }
}

</script>

<style scoped>
.blogs {
  background-color: rgb(1, 64, 35);
  min-width: 400px;
}

.blog-wrap {
  padding: 20px 0px;
}

.title-blog {
  padding-left: 10px;
  width: 400px;
  margin: 0 auto;
}

.title-list-blog {
  font-size: 24px;
  min-width: 400px;
  color: rgb(242, 160, 41);
}

.border-bottom-title {
  width: 50px;
  border-bottom: 4px solid rgb(242, 160, 41);
}

.list-blog {
  display: flex;
  margin: 0 auto;
  max-width: 1000px;
  padding-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.two-col {
  width: 480px;
  min-width: 480px;
  height: 260px;

  margin-right: 10px;
  margin-top: 10px;

  display: flex;
  text-align: justify;
}

.two-col {
  width: 480px;
  min-width: 480px;
  height: 260px;

  margin-right: 10px;
  margin-top: 10px;
  padding-top: 15px 10px 10px 10px;

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
  display: inline-block;

  width: 50%;
  height: 100%;

  background-color: white;
}

.content-horizontal .title {
  font-weight: bold;
  font-size: 25px;
  height: 30px;
  margin-bottom: 5px;
}

.content-horizontal .text {
  text-align: justify;
  margin-bottom: 0px;
  overflow: hidden;
  height: 185px;
}

.content-horizontal .half-content-image {
  border-radius: 0px 10px 10px 0px;

  width: 50%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  display: inline-block;
  position: absolute;
}

.no-content-blog {
  border-radius: 10px 10px 10px 10px;

  width: 100%;
  height: 100%;
  padding: 15px 10px 10px 10px;

  background-image: linear-gradient(0deg, rgba(2, 0, 36, 1) 0%, rgba(25, 62, 16, 0.8715861344537815) 42%, rgba(6, 59, 6, 0) 74%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  display: inline-block;
  position: absolute;

  color: white;
  z-index: 1;
  left: 0px;
}

.full-content-image {
  border-radius: 10px 10px 10px 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.no-content-blog .blank-content {
  height: 185px;
}

.time-and-share {
  margin-top: 10px;
  display: flex;
}

.time-and-share .time {
  width: 80%;
}

.time-and-share .share {
  width: 20px;
  height: 20px;

  margin-left: auto;
  margin-right: 0;
}

.blank-content {
  position: relative;
}

.blank-content .youtube-icon {
  height: 30px;
  position: absolute;
  bottom: 40px;
  left: -5px;
}

.blank-content .title {
  position: absolute;
  bottom: 0px;
}

.plus-icon {
  margin-top: 25%;
  margin-left: 25%;
  height: 50%;
  opacity: 0.5;
}

.content-vertical .half-content-image {
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  height: 35%;
  background-color: yellow;
  position: absolute
}

.content-vertical .content {
  border-radius: 0px 0px 10px 10px;
  padding: 5px 10px 10px 10px;
  width: 100%;
  height: 65%;
  background-color: white;
  position: absolute;
  bottom: 0px;
}

.content-vertical .text {

  text-align: justify;
  margin-bottom: 0px;
  height: 113px;
}

.content-vertical .title {
  font-weight: bold;
  font-size: 25px;
  height: 30px;
  margin-bottom: 5px;
}

@media (min-width: 960px) {
  .two-col {
    width: 480px;
    min-width: 480px;
    height: 260px;
  
    margin-right: 10px;
    margin-top: 10px;
  
    display: flex;
    text-align: justify;
  }
}

@media only screen and (max-width: 960px) {
  .two-col {
    width: 480px;
    min-width: 480px;
    height: 260px;
  
    margin-right: 10px;
    margin-top: 10px;
  
    display: flex;
    text-align: justify;
  }
}

@media only screen and (max-width: 768px) {
  .two-col {
    width: 340px;
    min-width: 340px;
    height: 250px;
    margin-right: 10px;
    margin-top: 10px;
    display: flex;
    text-align: justify;
  }
  .plus-icon {
    margin-top: 60px;
    margin-left: 27px;
    height: 90px;
    opacity: 0.5;
  }  
}
</style>