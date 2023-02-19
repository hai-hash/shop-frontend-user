<template>
    <div class="order-sidebar sidebar-left">
        <div class="cat-title">Danh mục</div>
        <div class="list-cat">
            <div class="cat-item">
                <div class="cat-name">Món nổi bật</div>
                <div class="cat-amount">24</div>
            </div>
            <div class="cat-item">
                <div class="cat-name">Trà Sữa</div>
                <div class="cat-amount">14</div>
            </div>
            <div class="cat-item">
                <div class="cat-name">Fresh Fruit Tea</div>
                <div class="cat-amount">10</div>
            </div>
            <div class="cat-item">
                <div class="cat-name">Macchiato Cream Cheese</div>
                <div class="cat-amount">7</div>
            </div>
            <div class="cat-item">
                <div class="cat-name">Sữa Chua Dẻo</div>
                <div class="cat-amount">10</div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'OrderSidebar'
}
</script>
<style scoped>
.order-sidebar {
    width: 300px;
    max-width: 25%;
    margin: 0 16px;
    color: #282828;
    background: #ffffff;
    height: fit-content;
    box-shadow: 0 2px 7px 0 rgb(0 0 0 / 5%);
    border-radius: 4px;
    padding-bottom: 12px;
}
.cat-title {
    padding: 10px 20px;
    font-size: 14px;
    border-bottom: 1px solid #f1f1f1;
    text-transform: uppercase;
    font-weight: bold;
}
.list-cat {
    padding: 0 16px;
}
.cat-item {
    display: flex;
    padding: 8px 0px;
    justify-content: space-between;
    border-bottom: 1px solid #f1f1f1;
    cursor: pointer;
}
.cat-amount {
    color: #8a733f;
}
</style>