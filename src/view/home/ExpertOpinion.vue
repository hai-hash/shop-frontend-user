<template>
    <div class="quantity-product-posts">
      <div class="wrap-posts">
      <div class="posts-content">
        <div class="posts-title">
          <div class="title">
            <h1>Ý KIẾN TỪ CHUYÊN GIA</h1>
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
        <img src="@/assets/expert.png" alt/>
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
    justify-content: center;
  }
  .wrap-posts{
    display: flex;
  }
  .posts-title{
    margin-top: 30px;
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
    padding-right: 5px;
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
    width: 380px;
  }
  .posts-content{
    width: 550px;
    padding-left: 15px;
  }
  @media only screen and (max-width:  947px) {
    .border-bottom-posts-title{
        display: none;
    }
    .posts-image{
        text-align: center;
    }
    .content{
        padding: 10px 20px;
    }
    .posts-title{
        text-align: center;
    }
    .wrap-posts{
      display: block;
    }
    .quantity-product-posts{
      justify-content: center;
    }
    .posts-content{
    width: unset
  }
  }
  
  </style>