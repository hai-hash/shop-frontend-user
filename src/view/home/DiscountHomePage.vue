<template>
    <div class="discount">
        <div class="top-discount">
            <div class="discount-1">
                <img src="@/assets/discount-1.png" alt/>
            </div>
            <div class="discount-2">
                <img src="@/assets/discount-2.png" alt/>
            </div>
        </div>
        <div class="bottom-discount">
            <div class="wrap-discount">
                <p class="buy-online">Mua Trực Tuyến</p>
           <h1 class="discount-title">ƯU ĐÃI ĐẾN 30%</h1>
           <p class="discount-code">CODE:TETTASHPY</p>
           <div class="used-now"><v-btn >Dùng Ngay</v-btn></div>
            </div>
          
        </div>
    </div>

</template>
<script>
export default {
    name: 'DiscountHomePage',
}
</script>
<style scoped>
.discount{
    background-color: rgb(1, 64, 35);
}
.top-discount{
    display: flex;
    justify-content: center;
    padding: 50px 0px;
    flex-wrap: wrap;
}
.discount-1 img,.discount-2 img{
   width: 465px;
}
.bottom-discount{
    background-color: rgb(217,103,4);
    display: flex;
    height: 60px;
    justify-content: center;
}
.wrap-discount{
    display: flex;
    justify-content: flex-start;
}
.buy-online{
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 60px;
    border-bottom: 3px solid rgb(242, 160, 41);
    margin-right: 20px;
}
.discount-title{
    font-size: 38px;
    line-height: 60px;
    color: #fff;
    margin: 0px 20px;
}
.discount-code{
    color:#000;
    font-size: 20px;
    line-height: 60px;
    background-color: #fff;
    margin-bottom: 0px;
    padding: 0px 20px;
    font-weight: 700;
}
.used-now{
    padding: 0px 20px;
    align-items: center;
    display: flex;
}
</style>