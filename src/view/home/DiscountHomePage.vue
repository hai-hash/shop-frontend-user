<template>
    <div class="discount">
        <div class="top-discount">
            <div class="discount-1">
                <img src="@/assets/discount-1.png" alt />
            </div>
            <div class="discount-2">
                <img src="@/assets/discount-2.png" alt />
            </div>
        </div>
        <div class="bottom-discount">
            <p class="buy-online">Mua Trực Tuyến</p>
            <p class="discount-title">ƯU ĐÃI ĐẾN 30%</p>
            <p class="discount-code">CODE:TETTASHPY</p>
            <div class="used-now"><v-btn>Dùng Ngay</v-btn></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DiscountHomePage',
}
</script>
<style scoped>
.discount {
    background-color: rgb(1, 64, 35);
    min-width: 400px;
}

.top-discount {
    display: flex;
    justify-content: center;
    padding: 50px 0px;
    flex-wrap: wrap;
}

.discount-1 img,
.discount-2 img {
    width: 465px;
}

.bottom-discount {
    background-color: rgb(217, 103, 4);
    display: flex;
    height: 60px;
    justify-content: center;
}

.wrap-discount {
    display: flex;
    justify-content: flex-start;
    min-width: 400px;
}

.buy-online {
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 60px;
    border-bottom: 3px solid rgb(242, 160, 41);
    margin-right: 20px;
}

.discount-title {
    font-size: 38px;
    line-height: 60px;
    color: #fff;
    margin: 0px 20px;
}

.discount-code {
    color: #000;
    font-size: 20px;
    line-height: 60px;
    background-color: #fff;
    margin-bottom: 0px;
    padding: 0px 20px;
    font-weight: 700;
}

.used-now {
    padding: 0px 20px;
    align-items: center;
    display: flex;
}

@media only screen and (max-width: 960px) {
    .two-col {
        width: 480px;
        min-width: 480px;
        height: 260px;

        margin-right: 10px;
        margin-top: 10px;

        display: flex;
        text-align: justify;
    }

    .bottom-discount {
        display: block;
        position: relative;
        height: 120px;
    }

    .buy-online {
        width: 50%;
        top: 0px;
        left: 0px;
        height: 60px;

        margin-right: 0px;

        display: inline-block;
        text-align: center;
        position: absolute;
    }

    .discount-title {
        width: 50%;
        top: 0px;
        left: 50%;
        margin-left: 0px;

        font-size: 26px;
        height: 60px;
        
        display: inline-block;
        text-align: center;
        position: absolute;
    }

    .discount-code {
        width: 50%;
        top: 60px;
        left: 0px;
        height: 60px;
        display: inline-block;
        text-align: center;
        position: absolute;
    }

    .used-now {
        width: 50%;
        top: 60px;
        left: 50%;
        height: 60px;
        line-height: 60px;
        display: inline-block;
        position: absolute;
        text-align: center;
    }
}

@media only screen and (max-width: 768px) {

    .discount-1 img,
    .discount-2 img {
        width: 380px;
    }

    .bottom-discount {
        display: block;
        position: relative;
        height: 120px;
    }

    .buy-online {
        width: 50%;
        top: 0px;
        left: 0px;
        height: 60px;
        display: inline-block;
        position: absolute;
    }

    .discount-title {
        width: 50%;
        top: 0px;
        left: 50%;

        height: 60px;
        font-size: 20px;

        display: inline-block;
        text-align: center;
        position: absolute;
    }

    .discount-code {
        width: 50%;
        top: 60px;
        left: 0px;

        height: 60px;
        font-size: 18px;

        text-align: center;
        display: inline-block;
        position: absolute;
    }

    .used-now {
        width: 50%;
        top: 60px;
        left: 50%;
        height: 60px;
        line-height: 60px;
        display: inline-block;
        position: absolute;
        text-align: center;
    }
}</style>