<template>
    <div class="technology-wrap">
        <div class="title-posts">
            <h1 class="title-primary">TASHAPY &</h1>
            <h1 class="title-sub">KIỂM ĐỊNH - NGHIÊN CỨU - CÔNG NGHỆ</h1>
        </div>
        <div class="posts">
            <div class="posts-left">
                <TechnologyItem :dataPosts="dataPosts[0]"/>
            </div>
            <div class="posts-right">
                <div class="posts-right-top">
                    <TechnologyItem :dataPosts="dataPosts[1]"/>
                </div>
                <div class="posts-right-bottom">
                    <TechnologyItem :dataPosts="dataPosts[2]"/>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import TechnologyItem from '@/components/technology/TechnologyItem.vue';
export default {
    name: 'TechnologyPosts',
    components:{
        TechnologyItem
    },
    data() {
        return {
            dataPosts: [
                {
                    title: 'Kiểm Định Bởi Viện Vệ Sinh An Toàn Thực Phẩm Việt Nam',
                    content: 'Đầu tiên Đông trùng hạ thảo nên là sản phẩm hoang dã tự nhiên. Đông trùng hạ thảo Hymalya tốt vì được khai thác trên đỉnh núi cao với độ thanh khí tốt. Có 2 vị trí được coi là hàng tốt nhất về xuất xứ là: Nugu Tây Tạng & Thung lũng Dolpa của Nepal.',
                    image: '@/assets/vstp-1.jpg'
                },
                {
                    title: 'Nghiên cứu',
                    content: 'Đầu tiên Đông trùng hạ thảo nên là sản phẩm hoang dã tự nhiên. Đông trùng hạ thảo Hymalya tốt vì được khai thác trên đỉnh núi cao với độ thanh khí tốt. ',
                    image: '@/assets/vstp-1.jpg'
                },
                {
                    title: 'Ngiên cứu',
                    content: 'Đầu tiên Đông trùng hạ thảo nên là sản phẩm hoang dã tự nhiên. Đông trùng hạ thảo Hymalya tốt vì được khai thác trên đỉnh núi cao với độ thanh khí tốt. ',
                    image: '@/assets/vstp-1.jpg'
                },
            ]
        }
    }
}
</script>

<style scoped>
.technology-wrap {
    padding: 20px 0px;
    background-color: rgb(1, 64, 35);
}

.title-posts {
    width: 60%;
    margin: 0 auto;
}

.title-primary,
.title-sub {
    font-size: 28px;
    color: rgb(242, 160, 41);
}
.posts{
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
}
.posts-left{
width: 500px;
margin: 10px;
height: 350px;
}

.posts-right{
width: 400px;
margin: 5px;
height: 350px;
}
.posts-right-top{
height: calc(50% - 10px);
margin: 5px 0px 15px 0px;
}
.posts-right-bottom{
height: calc(50% - 5px);
}
@media only screen and (max-width:  947px) {
    /* .posts-left{
        height: 250px;
    } */
    .posts-right{
        width: 500px;
    }
}
</style>
