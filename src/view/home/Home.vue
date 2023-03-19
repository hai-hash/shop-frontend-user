<template>
  <div class="body-user-page">
    <CarouselWrapper />
    <DiscountHomePage />
    <ProductCategory />
    <HotProduct title="SẢN PHẨM BÁN CHẠY"/>
    <HotProduct title="SẢN PHẨM MỚI"/>
    <ListProductGird/>
    <TechnologyPosts />
    <QuantityProductPosts />
    <IntroductionTashapy />
    <ExpertOpinion />
    <ListBlog />
    <FooterPage />
  </div>
</template>
  
<script>
import CarouselWrapper from '@/components/common/CarouselWrapper.vue'
import IntroductionTashapy from '@/view/home/IntroductionTashapy.vue';
import QuantityProductPosts from '@/view/home/QuantityProductPosts.vue';
import TechnologyPosts from '@/view/home/TechnologyPosts.vue';
import ExpertOpinion from '@/view/home/ExpertOpinion.vue';
import DiscountHomePage from '@/view/home/DiscountHomePage.vue';
import ProductCategory from '@/view/home/ProductCategory.vue'
import HotProduct from './HotProduct.vue';
import ListBlog from './ListBlog.vue';
import FooterPage from '@/view/home/FooterPage.vue';
import ListProductGird from '@/components/product/ListProductGird.vue';
export default {
  name: 'App',
  components: {
    CarouselWrapper,
    IntroductionTashapy,
    QuantityProductPosts,
    TechnologyPosts,
    ExpertOpinion,
    DiscountHomePage,
    ProductCategory,
    HotProduct,
    ListBlog,
    FooterPage,
    ListProductGird
  }
}
</script>