<template>
  <div>
    <div id="blog-view">

      <v-row justify="center">
        <v-col cols="11">
          <div class="view-list-item" @click="handleViewMore">
            <svg-icon type="mdi" :path="path" class="icon-view-more"></svg-icon>
            <span class="title-view-more">Danh sách bài viết</span>
          </div>
        </v-col>
      </v-row>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <h3 id="title">DANH MỤC TIN TỨC</h3>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
            <v-list-item v-for="(item, index) in listBlog" :key="index"
              :class="item.id !== selectBlog.id ? '' : 'deep-purple--text text--accent-4 v-list-item--active'">
              <v-list-item-title  @click="handleSelectBlog(item)">{{ item.title }}</v-list-item-title>
              <v-list-item-icon @click="handleClickButtonDelete(item.id)">
                <v-icon>mdi-delete</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-container>
        <v-card>
          <v-card-title>
            <h3 id="blog-title">{{ selectBlog.title }}</h3>
          </v-card-title>
          <v-card-text class="pa-2 ma-2" id="content">
            <v-col v-html="selectBlog.long_desc">
            </v-col>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
    <FooterPage />
  </div>
</template>

<script>
import FooterPage from '@/view/home/FooterPage.vue';
import pageApi from '@/api/services/BlogService';
import { TypePage } from '@/constant/blog/blogEditer';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiViewList } from '@mdi/js';
export default {
  name: 'BlogView',
  components: {
    FooterPage,
    SvgIcon
  },
  created() {
    const idBlog = this.$route.query.id;
    this.pageType = this.$route.params.page_type;
    if (idBlog) {
      this.getPageById(idBlog);
    }
  },

  watch: {
    '$route'() {
      const idBlog = this.$route.query.id;
      this.pageType = this.$route.params.page_type;
      if (idBlog) {
        this.getPageById(idBlog);
      }
    },
    pageType: {
      immediate: false,
      handler() {
        this.getPagesByPageType()
      }
    }
  },
  data() {
    return {
      listBlog: [],
      selectBlog: {},
      selectedBlogId: 0,
      drawer: false,
      path: mdiViewList,
      pageType: '',
    }
  },
  methods: {
    handleViewMore() {
      this.drawer = true;
    },
    handleClickButtonDelete(id){
      this.$store.dispatch('callDialogConfirm',{
        message:'Bạn có chắc chắn xóa bài viết này không ?',
        callBackFunction:this.handleDeletePage,
        dataCallBack: id
      });
    },
    async handleDeletePage(id){
      const params = {
        id
      }
      try {
        await pageApi.deletePageById(params);
        const newListPage = this.listBlog.filter(item => item.id !== id);
        this.listBlog = newListPage;
      } catch (error) {
        console.log(error);
      }
    },
    async getPageById(id) {
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
    async getPagesByPageType() {
      const idBlog = this.$route.query.id;
      const pageTypeName = this.$route.params.page_type;
      const filter = {
        $and: [
          {
            page_type: {
              $in: [TypePage[pageTypeName]]
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
        this.listBlog = res.filter(item =>item.is_deleted === false);
        if (!idBlog) {
          this.selectBlog = res.length > 0 ? res[0] : {};
        }
      } catch (error) {
        console.log(error)
      }
    },
    handleSelectBlog(item) {
      this.$router.push(`/page/${this.pageType}?id=${item.id}`);
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
  width: 100%;
  max-width: 100%;
  min-width: 350px;
}

#title {
  letter-spacing: 1.4px;
  color: #d3b673;
  font-weight: bold;
  margin-top: 20px;
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
  width: 100%;
}

.view-list-item {
  cursor: pointer;
  display: flex;
}

.title-view-more {
  color: rgb(212, 102, 5);
  margin-left: 5px;
}

.icon-view-more {
  color: rgb(212, 102, 5);
}

.title-view-more:hover {
  color: rgb(192, 131, 77);
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