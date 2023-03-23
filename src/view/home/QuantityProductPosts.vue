<template>
  <div class="quantity-product-posts">
    <div class="wrap-posts">
    <div class="posts-content">
      <div class="posts-title">
        <div class="title">
          <h1>ĐIỀU GÌ QUYẾT ĐỊNH CHẤT LƯỢNG CỦA ĐÔNG TRÙNG HẠ THẢO</h1>
        </div>
        <div class="border-bottom-posts-title"></div>
      </div>
      <div class="content">
        <p class="content-bold">Đầu tiên Đông trùng hạ thảo nên là sản phẩm hoang dã tự nhiên. Đông trùng hạ thảo
          Hymalya tốt vì được khai thác trên đỉnh núi cao với độ thanh khí tốt. Có 2 vị trí được coi là hàng tốt nhất về
          xuất xứ là: Nugu Tây Tạng & Thung lũng Dolpa của Nepal.</p>
        <p class="content-no-bold">Tâm tư của những người đi mua Đông Trùng Hạ Thảo luôn muốn mua được sản phẩm thật,
          chất lượng tốt. Đến với Hina bạn sẽ được tư vấn để có thể lựa chọn sản phẩm chất lượng, an toàn sử dụng thực sự
          tốt cho sức khỏe.</p>
      </div>
    </div>

    <div class="posts-image">
      <img src="@/assets/quality-logo.png" alt/>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'QuantityProductPosts',

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