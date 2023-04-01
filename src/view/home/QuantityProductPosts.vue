<template>
  <div class="quantity-product-posts">
    <div class="wrap-posts">
    <div class="posts-content" @click="handleClickViewPageDetail()">
      <div class="posts-title">
        <div class="title">
          <h1 v-if="listPageData">{{ listPageData.title }}</h1>
        </div>
        <div class="border-bottom-posts-title"></div>
      </div>
      <div class="content">
        <p class="content-bold" v-if="listPageData">{{ listPageData.short_desc }}</p>
        <p class="content-no-bold" v-if="listPageData">{{ listPageData.short_desc }}</p>
      </div>
    </div>

    <div class="posts-image">
      <img v-if="listPageData" :src="listPageData.image" alt/>
    </div>
  </div>
  </div>
</template>

<script>
import {TypePage} from '@/constant/blog/blogEditer';
import pageApi from '@/api/services/BlogService';
import { TypePageName } from '@/constant/blog/blogEditer';
export default {
  name: 'QuantityProductPosts',
  data(){
    return{
      listPageData:{},
    }
  },
  created(){
    this.getPosts()
  },
  methods:{
    handleClickViewPageDetail(){
            this.$router.push(`/page/${TypePageName.QUALITY}?id=${this.listPageData.id}`)
        },
    async getPosts(){
           
           const filter = {
                $and: [
                    {
                        page_type: {
                            $in: [TypePage.quality]
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
            this.dataPosts = [];
            const res = await pageApi.getPageByFilter(data);
            res.every(element => {
              this.listPageData = element;
              return false;
            });
           
        } catch (error) {
            console.log(error)
        }
       
        
    }
  }
}
</script>

<style scoped>
.quantity-product-posts{
  display: flex;
  justify-content: flex-end;
  padding: 40px 0px;
}
.wrap-posts{
  width: 80%;
  display: flex;
}
.posts-title{
}
.title h1{
  font-size: 28px;
  color: rgb(242, 160, 41);
}
.border-bottom-posts-title{
  border-bottom: 4px solid rgb(242, 160, 41);
    width: 100px;
    margin-top: 5px;
}
.content{
  margin-top: 20px;
}
.content-bold{
  font-weight: 700;
}
.posts-image{
  /* background-image: url("@/assets/quality-logo.png");
  height: 100%;
  width: 100%; */
}
.posts-image img{
  width: 100%;
}
.posts-content{
  width: 70%;
  cursor: pointer;
}
@media only screen and (max-width:  768px) {
  .wrap-posts{
    display: block;
  }
  .quantity-product-posts{
    justify-content: center;
    font-size: 16px;
  }
  .posts-content{
  width: unset
}
}

</style>