<template>
    <div class="footer">
    <div class="footer-wrap">
        <div class="content-detail">
            <v-row justify="center">
                <v-col lg="3"  cols="12">
                    <div class="logo-page">
                <img src="@/assets/logo-medicime.png" alt/>
            </div>
                </v-col>
                <v-col lg="9" cols="12"> <h1 class="content-title">TASHAPY - Món Qùa Sức Khỏe Từ Thiên Nhiên</h1></v-col>
                <v-col lg="3" md="4" sm="6" cols="12">
                    <div class="address-page">
                        <h1 class="title-address">CÔNG TY CỔ PHẦN SẢN XUẤT THƯƠNG MẠI VÀ DỊCH VỤ HINA</h1>
                        <p class="address">Số 87, 173/68/147 Hoàng Hoa Thám, Phường Ngọc Hà, Quận Ba Đình</p>
                        <p class="number-phone">T: 0974772827</p>
                        <p class="email">E: hina.jsc@gmail.com</p>
                        <p class="address-page">W: thaoduoctashapy.com</p>
                        <p>Giấy phép đăng ký kinh doanh số 0109951525 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp</p>
                    </div>
                </v-col>
                <v-col lg="2" md="4" sm="6" cols="12">
                    <div class="about-tashapy">
                        <h1>VỀ CHÚNG TÔI</h1>
                        <p>Giới Thiệu</p>
                        <p>Cam Kết</p>
                        <p>Tin Tức</p>
                    </div>
                    <div class="follow-on">
                        <h1>THEO DÕI TASHAPY TRÊN</h1>
                     <div class="facebook"><img src="@/assets/facebook-icon.png" alt/><p>Facebook</p></div>
                     <div class="instagram"><img src="@/assets/instagram-icon.png" alt/><p>Instagram</p></div>
                     <div class="youtube"><img src="@/assets/youtube.png" alt/><p>Youtube</p></div>
                     <div class="ticktok"><img src="@/assets/ticktok-icon.png" alt/><p>Ticktok</p></div>
                    </div>
                    
                </v-col>
                <v-col lg="2" md="4" sm="6" cols="12">
                    <div class="care-customer">
                        <h1>CHĂM SÓC KHÁCH HÀNG</h1>
                        <p>Trung tâm trợ giúp</p>
                        <p>Tashapy blog</p>
                        <p>Cửa hàng tashapy</p>
                        <p>Hướng dẫn mua hàng</p>
                        <p>Thanh toán</p>
                        <p>Vận chuyển</p>
                        <p>Chính sách & Điều khoản</p>
                        <p>Chăm sóc khách hàng</p>
                    </div>
                </v-col>
                <v-col lg="2" md="4" sm="6" cols="12">
                    <div class="payment">
                        <h1>THANH TOÁN</h1>
                        <div class="lits-bank">
                            <div>
                                <img src="@/assets/visa-icon.png" alt>
                            <img src="@/assets/MasterCard_Logo.png" alt>
                            </div>
                           <div>
                            <img src="@/assets/jsc-icon.png" alt>
                           </div>
                           
                        </div>
                    </div>
                    <div class="shipment">
                        <h1>ĐƠN VỊ VẬN CHUYỂN</h1>
                        <div class="lits-shipment">
                            <div>
                                <img src="@/assets/viettell-icon.png" alt>
                            </div>
                           
                        </div>
                    </div>
                </v-col>
                <v-col lg="3" md="4" sm="6" cols="12">
                    <div class="registry-information">
                       <h1>ĐĂNG KÝ NHÂN TIN & TƯ VẤN</h1>
                       <div class="form-registry">
                        <input type="text" placeholder="Địa chỉ email của Bạn"/>
                        <button>Đăng ký</button>
                       </div>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
    </div>
</template>



<script>
export default {
    name: 'FooterPage'
}


</script>
<style scoped>
.footer{
    background-color: rgb(242, 242, 242);
    padding-bottom: 50px;
    padding: 40px;
}
.footer-wrap{
   max-width: 1000px;
   margin: 0 auto;
}
.title{
}
.content-title{
    font-size: 30px;
    color: rgb(217,103,4);
    line-height: 150px;
}
.logo-page{
}
.logo-page img{
    height: 100px;
}
p{
    margin: 12px 0px;
}
.about-tashapy h1{
    /* font-size: ; */
}
.facebook, .instagram, .youtube, .ticktok{
    display: flex;
    align-items: center;
}
.facebook img, .instagram img, .youtube img, .ticktok img{
    height: 24px;
    width: 24px;
    margin-right: 5px;
}
.payment img, .lits-shipment img{
    height: 24px;
    margin-right: 5px;
    margin-top: 10px;
}
.shipment{
    margin-top: 50px;
}
h1{
    font-weight: 700;
}
.form-registry{
    display: flex;
    margin-top: 10px;
    border: 1px solid rgb(217,103,4);
    height: 35px;
    justify-content: space-between;
}
.form-registry button{
    background-color: rgb(217,103,4);
    width: 40%;
}
.form-registry input{
    margin-left: 5px;
    margin-right: 5px;
    width: 60%;
}
.form-registry input:focus-visible{
    outline: unset;
}
@media only screen and (max-width: 1044px) {
    .title{
      display: block;
    }

}
</style>