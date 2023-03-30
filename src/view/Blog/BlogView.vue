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
            <v-row v-for="(item, index) in listBlog" :key="index" @click="handleSelectBlog(item)">
              <v-col :class="item.id !== selectBlog.id ? 'sub-title' : 'sub-title-selected'">
                {{ item.title }}
              </v-col>
            </v-row>
          </v-sheet>
          <v-sheet class="pa-2 ma-2" id="content">
            <v-col>
              <h1 id="blog-title">{{ selectBlog.title }}</h1>
            </v-col>
            <v-col v-html="selectBlog.long_desc">
            </v-col>
          </v-sheet>
        </v-sheet>

      </v-container>
    </div>
    <FooterPage />
  </div>
</template>

<script>
import FooterPage from '@/view/home/FooterPage.vue';
import pageApi from '@/api/services/BlogService';
import { TypePage } from '@/constant/blog/blogEditer';
export default {
  name: 'BlogView',
  components: {
    FooterPage
  },
  created() {
    this.getBlogPosts()
  },

  watch: {
    '$route.query'() {
      const idBlog = this.$route.query.id;
      if(idBlog){
        this.getBlogById(idBlog);
      }
        }
  },
  data() {
    return {
      listBlog: [],
      selectBlog:{},
      selectedBlogId: 0,
    }
  },
  methods: {
    async getBlogById(id){
      const params = {
        id,
      }
      try {
        const res = await pageApi.getPagesByParam(params);
        this.selectBlog = res;
      } catch (error) {
        console.log(error);
      }
    
      
    },
    async getBlogPosts() {
      const idBlog = this.$route.query.id;
      const filter = {
        $and: [
          {
            page_type: {
              $in: [TypePage.TECHNOLOGY_RESEARCH]
            }
          }
        ]
      }
      const data = {
        page: 1,
        limit: 10,
        filter,
        sort: { sell_quantity: 1 }
      }
      try {
        const res = await pageApi.getPageByFilter(data);
        this.listBlog = res;
        if(idBlog){
          this.selectBlog = this.listBlog.find(item => item.id === idBlog);
          if(!this.selectBlog){
            this.selectBlog = res.length > 0 ? res[0] : {};
          }
        }
        else{
          this.selectBlog = res.length > 0 ? res[0] : {};
        }
      } catch (error) {
        console.log(error)
      }
    },
    handleSelectBlog(item) {
      this.$router.push( `/blog?id=${item.id}`);
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
  font-weight: bold;
}

.sub-title {
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;

  text-align: left;
  color: #282828;
  text-transform: uppercase;
}

.sub-title-selected {
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  color: #282828;
  text-transform: uppercase;
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