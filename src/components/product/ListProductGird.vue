<template>
    <div class="product-category-wrap">
        <div class="title-product-category">
            <h1 class="title-list-category">{{ title }}</h1>
            <div class="border-bottom-title"></div>
        </div>
        <div class="list-product-sline">
            <div id="slide" class="owl-carousel owl-theme">
                <div> Your Content </div>
                <div> Your Content </div>
                <div> Your Content </div>
                <div> Your Content </div>
                <div> Your Content </div>
                <div> Your Content </div>
                <div> Your Content </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'ListProductGrid',
    created() {
        document.addEventListener("DOMContentLoaded", () => {
           document.getElementById('slide').owlCarousel();
        });
    },
    props: {
        title: String
    },
    data() {
        return {
        }
    }
}
</script>
<style scoped>
.description-product {
    margin: 5px;
}

.sale-price {
    color: red;
    font-weight: 700;
    margin: 5px 5px 0px 5px;
}

.primary-price {
    margin: 0px 5px;
    font-weight: 700;
    text-decoration: line-through;
}

.image-item-product {
    height: 70%;
    max-width: 200px;
    margin: 0 auto;
}

.image-item-product img {
    height: 100%;
    width: 100%;
    object-fit: fill;
}

.product-item {
    height: 100%
}

.product-category-wrap {
    padding: 20px 0px;
    margin: 0 auto;
}

.title-product-category {
    margin: 20px 5px;
}

.title-list-category {
    font-size: 28px;
    color: rgb(242, 160, 41);
}

.border-bottom-title {
    width: 100px;
    border-bottom: 4px solid rgb(242, 160, 41);
}

.list-product-category {
    display: flex;
    flex-wrap: wrap;
}

@media (min-width: 960px) {
    .product-category-wrap {
        max-width: 1000px;
        min-width: 960px
    }
}

@media only screen and (max-width: 960px) {
    .title-product-category {
        margin-left: 5px;
    }

    .product-category-wrap {
        width: 100%;
    }

    .primary-price,
    .description-product,
    .sale-price {
        text-align: center;
    }
}

@media only screen and (max-width: 768px) {
    .product-category-wrap {
        max-width: 550px;
        min-width: 400px
    }
}
</style>