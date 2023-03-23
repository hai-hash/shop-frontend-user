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
                <v-row>
                  <v-col class="sub-title">
                    DANH MỤC TIN TỨC
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="sub-title">
                    DANH MỤC TIN TỨC
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="sub-title">
                    DANH MỤC TIN TỨC
                  </v-col>
                </v-row>
              </v-sheet>
              <v-sheet class="pa-2 ma-2" id="content" v-html="dummydata">
              </v-sheet>
          </v-sheet>
          
        </v-container>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BlogView',
  components: {
  },
  data() {
      return {
        dummydata: '<h2 style="margin-left:0px;"><strong>Bị can Nguyễn Thị Bích Thủy (còn gọi là Bích Thủy TV) đã đưa ra thông tin giả Bệnh viện Q.Gò Vấp có chủ trương đấu thầu bãi giữ xe để chiếm đoạt 300 triệu đồng.</strong></h2><p>&nbsp;</p><h2 style="margin-left:0px;"><strong>Nổ quen biết giám đốc bệnh viện để  bao đấu thầu bãi xe</strong></h2><p style="margin-left:0px;">Viện KSND H.Bình Chánh (TP.HCM) đã hoàn tất cáo trạng, chuyển hồ sơ sang TAND H.Bình Chánh, đề nghị xét xử bị can Nguyễn Thị Bích Thủy (42 tuổi, còn gọi là <a href="https://thanhnien.vn/bich-thuy-tv.html">Bích Thủy TV</a>) về tội lừa đảo chiếm đoạt tài sản, theo khoản 3, Điều 174 bộ luật Hình sự, khung hình phạt từ 7 - 15 năm tù.</p><p style="margin-left:0px;">Bị can <a href="https://thanhnien.vn/nguyen-thi-bich-thuy.html">Nguyễn Thị Bích Thủy</a> bị tạm giam từ ngày 6.1.2021.</p><p><a href="https://images2.thanhnien.vn/528068263637045248/2023/3/23/bich-thuy-tv-16795527606341693776913.jpg"><img class="image_resized" style="width:640px;" src="https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/3/23/bich-thuy-tv-16795527606341693776913.jpg" alt="Bích Thủy TV tự nhận phóng viên để chiếm đoạt 300 triệu đồng - Ảnh 1."></a></p><p style="margin-left:0px;">Nguyễn Thị Bích Thủy vào thời điểm bị công an khởi tố, bắt giam</p><p style="margin-left:0px;">CÔNG AN CUNG CẤP</p><p style="margin-left:0px;">Theo cáo trạng, bà Trần Thị Loan quen biết với <a href="https://thanhnien.vn/khoi-to-bat-tam-giam-nguyen-thi-bich-thuy-chu-nhan-facebook-bich-thuy-ti-vi-1851026754.htm">Nguyễn Thị Bích Thủy</a>. Giữa năm 2017, Bích Thủy nói với bà Loan rằng Bệnh viện Q.Gò Vấp chuẩn bị thay đổi đơn vị quản lý bãi giữ xe, nếu đấu thầu đúng quy định phải hết tiền tỉ. Nhưng Thủy có "mối quan hệ thân thiết với Giám đốc Bệnh viện Q.Gò Vấp" nên ai muốn đấu thầu thì Thủy lo giúp với số tiền 500 triệu đồng.</p><p style="margin-left:0px;">Do bà Loan không có khả năng tài chính nên đã giới thiệu Nguyễn Hà Thu và Nguyễn Văn Tiến cho Thủy. Sau khi đến Bệnh viện Q.Gò Vấp khảo sát, 2 người này đồng ý tham gia đấu thầu và gọi điện nhờ Thủy giúp đỡ với thỏa thuận sẽ đưa trước 300 triệu đồng, sau khi trúng thầu sẽ đưa 200 triệu đồng còn lại.</p><p style="margin-left:0px;">Ngày 25.7.2017, khi gặp nhau đưa trước 300 triệu đồng, Bích Thủy tự giới thiệu mình là phóng viên Đài Truyền hình TP.HCM và quen biết giám đốc Bệnh viện Q.Gò Vấp nên có khả năng giúp trúng thầu.</p><p style="margin-left:0px;">Ông Thu đưa 300 triệu đồng cho Bích Thủy và yêu cầu viết giấy biên nhận với nội dung đúng như thỏa thuận. Đến giữa tháng 8.2017, Thủy trả lời lại không giúp được, nhưng không trả tiền và bỏ trốn.</p><h2 style="margin-left:0px;"><strong>Chiếm đoạt 300 triệu đồng</strong></h2><p style="margin-left:0px;">Tháng 8.2020, ông Tiến phát hiện Thủy đang livestream một sự việc tại Bình Dương nên đến địa điểm Thủy livestream đòi tiền nhưng Thủy nói không quen biết và bỏ đi. Ông Tiến đến công an phường trình báo vụ việc.</p><p style="margin-left:0px;">Tại cơ quan công an, Nguyễn Thị Bích Thủy khai được Bệnh viện Q.Gò Vấp nhờ Thủy đứng ra hỗ trợ một đội của bệnh viện tham gia gameshow. Nếu gameshow này có kết quả tốt thì Bích Thủy sẽ được giao dự án khu phức hợp trên tầng thượng của bệnh viện.</p><p style="margin-left:0px;">Vì vậy, theo Bích Thủy khai, bị can đã nhận tiền của 2 ông Nguyễn Hà Thu và Nguyễn Văn Tiến để cùng hợp tác dự án khu phức hợp của bệnh viện.</p><p style="margin-left:0px;">Công an thực hiện xác minh tại Bệnh viện Q.Gò Vấp, cho thấy những thông tin bị can Bích Thủy đưa ra là không có thật.</p><p>&nbsp;</p><p style="margin-left:0px;">Đồng thời, xác minh nhân sự tại Đài Truyền hình TP.HCM thì cơ quan này cũng trả lời không có phóng viên nào tên Nguyễn Thị Bích Thủy trong khoảng thời gian từ tháng 1.2015 đến thời điểm Công an H.Bình Chánh có công văn đề nghị.</p><p style="margin-left:0px;">TAND H.Bình Chánh dự kiến sẽ đưa vụ án liên quan đến Bích Thủy TV xét xử sơ thẩm vào ngày 7.4 tới.</p><p style="margin-left:0px;">Nguyễn Thị Bích Thủy là người được biết đến với tên gọi YouTuber Bích Thủy TV, hoặc chủ facebook Bích Thủy TV thu hút nhiều người theo dõi với những bài viết về công an, CSGT, về tranh chấp đất đai, ô nhiễm môi trường… được cho là có nội dung phiến diện, một chiều, gây mất tình hình an ninh trật tự…</p><p style="margin-left:0px;">Sau khi Nguyễn Thị Bích Thủy bị Công an H.Bình Chánh bắt giữ, nhiều tỉnh khác như Quảng Ngãi, Cà Mau… cũng phát thông báo tìm nạn nhân của Bích Thủy TV. Ai là nạn nhân, hoặc có thông tin, chứng cứ về hành vi vi phạm của Bích Thủy TV, cần đến cơ quan công an để trình báo vụ việc.</p><p style="margin-left:0px;">Theo hồ sơ vụ án, năm 2011, Bích Thủy TV từng bị TAND H.Xuân Lộc, tỉnh Đồng Nai tuyên phạt 2 năm 6 tháng tù nhưng cho hưởng án treo về tội lạm dụng tín nhiệm chiếm đoạt tài sản.</p>'
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
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bold;
}

.sub-title {
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;

  text-align: left;
  color: #282828;
  text-transform: uppercase;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding-left: 15%;
}

#content img {
  width: 100% !important;
  max-width: 100% !important;
  margin: 0px auto !important;
}

#content .image_resized{
  width: 100% !important;
  max-width: 100% !important;
  min-width: 400px;
  margin: 0px auto !important;
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