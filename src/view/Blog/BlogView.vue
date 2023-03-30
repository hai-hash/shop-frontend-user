<template>
  <div>
    <div id="blog-view">
      <v-container>
        <v-sheet class="d-flex flex-wrap">
          <v-sheet class="pa-2 ma-2" id="side-bar">
            <v-row>
              <v-col id="title">
                DANH MỤC TIN TỨC
              </v-col>
            </v-row>
            <v-row v-for="(item, index) in listBlog" :key="index" :item="item">
              <v-col v-if="selectedBlogId != index" class="sub-title" @click="handleSelectBlog({index: index, slug: item.seo.slug})">
                {{ item.title }}
              </v-col>
              <v-col v-else class="sub-title-selected" @click="handleSelectBlog({index: index, slug: item.seo.slug})">
                {{ item.title  }}
              </v-col>
            </v-row>
          </v-sheet>
          <v-sheet class="pa-2 ma-2" id="content">
            <v-col>
              <h1 id="blog-title">{{ blogData.title }}</h1>
            </v-col>
            <v-col v-html="blogData.long_desc">
              
            </v-col>
          </v-sheet>
        </v-sheet>

      </v-container>
    </div>
    <FooterPage />
  </div>
</template>

<script>
import BlogService from '@/api/services/BlogService';
import FooterPage from '@/view/home/FooterPage.vue';
export default {
  name: 'BlogView',
  components: {
    FooterPage
  },

  watch: {
    '$route.query'() {
      this.getBlog()
    }
  },
  mounted: function () {
    this.getBlog()
  },
  data() {
    return {
      blogData: {
        title: '',
        long_desc: '',
      },
      listBlog: ['Title1', 'Title2'],
      selectedBlogId: 0,
    }
  },
  methods: {
    async getBlog() {
      let params = {
        page: 1,
        limit: 100
      }
      let responeData = await BlogService.getAll(params);
      this.listBlog = responeData;

      if (!this.$route.query.id || this.$route.query.id == undefined) {
        this.selectedBlogId = 0
      } else {
        this.selectedBlogId = this.$route.query.id
      }
      this.blogData = this.listBlog[this.selectedBlogId]
    },
    handleSelectBlog(item) {
      this.$router.push({ query: { id: item.index, slug: item.slug } })
    }
  }
}

</script>

<style scoped>
#blog-view {
  max-width: 1150px;
  margin: 30px auto;
}

#side-bar {
  max-width: 100%;
  min-width: 350px;
  width: 30%;
  height: auto;
}


#content {
  height: auto;
  text-align: justify;
  width: 60%;
  max-width: 100%;
  min-width: 350px;
}

#title {
  font-size: 28px;
  letter-spacing: 1.4px;
  color: #d3b673;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bold;
}

.sub-title {
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;

  text-align: left;
  color: #282828;
  text-transform: uppercase;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding-left: 15%;
}

.sub-title-selected {
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;

  text-align: left;
  color: #282828;
  text-transform: uppercase;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding-left: 15%;
  background-color: #d3b673;
}

#content img {
  width: 100% !important;
  max-width: 100% !important;
  margin: 0px auto !important;
}

#content .image_resized {
  width: 100% !important;
  max-width: 100% !important;
  min-width: 400px;
  margin: 0px auto !important;
}

#blog-title {
  text-align: center;
  text-transform: uppercase;
}

.sub-title:hover {
  cursor: pointer;
}

.sub-title-selected:hover {
  cursor: pointer;
}

@media only screen and (max-width: 1261px) {
  #side-bar {
    width: 800px;
    text-align: center;
  }

  .sub-title {
    text-align: center;
    padding-left: 0px;
  }

  #content {
    width: 100%;
  }
}
</style>