<template>
  <div class="quantity-product-posts">
    <div class="wrap-posts">
      <div class="posts-content" @click="handleClickViewPageDetail()">
        <div class="posts-title">
          <div class="title">
            <h1>{{ contentCardData.title }}</h1>
          </div>
          <div class="border-bottom-posts-title"></div>
        </div>
        <div class="content">
          <p class="content-bold">{{ contentCardData.short_desc }}</p>
          <p class="content-no-bold">{{ contentCardData.short_desc }}</p>
        </div>
      </div>

      <div class="posts-image">
        <img :src="contentCardData.image" alt />
      </div>
    </div>
  </div>
</template>
  
<script>
import { TypePage } from '@/constant/blog/blogEditer';
import { TypePageName } from '@/constant/blog/blogEditer';
import {PAGE_API} from '@/constant/common/UrlApi';
import axios from 'axios';
export default {
  name: 'QuantityProductPosts',
  data() {
    return {
      contentCardData: {}
    }
  },
  created() {
    this.getPosts();
  },
  methods: {
    handleClickViewPageDetail(){
            this.$router.push(`/page/${TypePageName.EXPERT_OPINION}?id=${this.contentCardData.id}`)
        },
    async getPosts() {

      const filter = {
        $and: [
          {
            page_type: {
              $in: [TypePage.expect_opinion]
            },
            is_deleted: false,
            is_parent_page:true,
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
        this.contentCardData = [];
        const res = await axios.post(PAGE_API,data);
        res.every(element => {
          this.contentCardData = element;
          return false
        });
      } catch (error) {
        console.log(error)
      }


    }
  }

}
</script>
  
<style scoped>
.quantity-product-posts {
  display: flex;
  justify-content: center;
}

.wrap-posts {
  display: flex;
}

.posts-title {
  margin-top: 30px;
}

.title h1 {
  font-size: 28px;
  color: rgb(242, 160, 41);
}

.border-bottom-posts-title {
  border-bottom: 4px solid rgb(242, 160, 41);
  width: 100px;
  margin-top: 5px;
}

.content {
  margin-top: 20px;
  padding-right: 5px;
}

.content-bold {
  font-weight: 700;
}

.posts-image {
  padding: 30px 0px;
}

.posts-image img {
  width: 300px;
  min-height: 400px;
  height: 100%;
  object-fit: cover;
}

.posts-content {
  width: 550px;
  padding-left: 15px;
  cursor: pointer;
}

@media only screen and (max-width: 947px) {
  .border-bottom-posts-title {
    display: none;
  }

  .posts-image {
    text-align: center;
  }

  .content {
    padding: 10px 20px;
  }

  .posts-title {
    text-align: center;
  }

  .wrap-posts {
    display: block;
  }

  .quantity-product-posts {
    justify-content: center;
  }

  .posts-content {
    width: unset
  }
}</style>