<template>
    <div class="order-header">
        <a class="logo" @click="goToHome">
            <img src="@/assets/logo-medicime.png" alt/>
        </a>
        <div class="search">
            <input class="input-search" type="text" placeholder="Tìm Kiếm Sản Phẩm..." value/>
        </div>
        <div class="right">
            <div class="login-button">Đăng Nhập</div>
        </div>
    </div>

</template>
<script>
export default {
    name:'HeaderOrderPage',
    methods: {
    goToHome(){
        this.$router.push("/");
    }
},
}
</script>
<style scoped>
.order-header {
    display: flex;
    justify-content: space-between;
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 6%);
    height: 50px;
    align-items: center;
    padding: 0 16px;
    background: #ffffff;
    position: relative;
}
.logo {
    width: 150px;
    height: 40px;
}

.logo img {
   height: 100%;
}

.input-search {
    width: 500px;
    border-radius: 30px;
    border: none;
    background: #fbfbfb;
    height: 32px;
    font-size: 14px;
    padding: 0 20px 0 30px;
    background-image: url(https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/icon-search.svg);
    background-repeat: no-repeat;
    background-position: 8px 10px;
    background-size: 14px 14px;
}
.login-button {
    padding: 6px 15px;
    background: #d8b979;
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    line-height: normal;
    border-radius: 25px;
    white-space: nowrap;
    cursor: pointer;
}
@media only screen and (max-width: 768px){
    .logo{
        display: none !important;
    }
.order-header .input-search {
    width: 100%;
}
}
</style>