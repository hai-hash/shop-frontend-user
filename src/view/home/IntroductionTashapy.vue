<template>
    <div class="introduction">
        <h1 class="title-introduction">TASHAPY NGHIÊN CỨU & CUNG CẤP</h1>
        <h2 class="sub-title-introduction">Đông trùng hạ thảo chất lượng cao, tương thích với từng nhu cầu của Bạn</h2>
        <div class="content-introduction">
            <div class="content-item-introduction">
                <div class="title-content">
                    <h1>TASHAPY CAM KẾT</h1>
                    <div class="border-botom-title"></div>
                </div>
                <CardItem />
            </div>
        </div>
    </div>
</template>

<script>
import CardItem from '@/components/introduction/CardItem.vue'
export default {
    name: 'IntroductionTashapy',
    components: {
        CardItem
    }
}
</script>

<style scoped>
.introduction {
    padding: 20px;
    background: rgb(1, 64, 35);
}

.title-introduction {
    text-align: center;
    font-size: 28px;
    color: rgb(210 163 47);
}

.sub-title-introduction {
    text-align: center;
    font-size: 28px;
    color: rgb(210 163 47);
}

.content-introduction {
    margin-top: 40px;
    display: flex;
    justify-content: center;
}

.content-item-introduction {
    display: flex;
    width: 64%;
    margin: o auto;
    justify-content: center;
}

.title-content {
    width: 20%;
}
.border-botom-title{
    border-bottom: 4px solid rgb(242, 160, 41);
    width: 100px;
    
}

.title-content h1 {
    font-size: 28px;
    color: rgb(242, 160, 41);
}

@media only screen and (max-width: 1044px) {
    .border-botom-title{
        display: none;
    }
    .content-item-introduction {
        display: block;
    }

    .title-content {
        width: 100%;
    }

    .title-content h1 {
        text-align: center;
    }

    .content-item-introduction {
        width: 100%;
    }

}</style>