<template>
    <div id="header" :class="this.isRenderClassMenu ? 'scroll-header nav-bar-component' : 'nav-bar-component'">
        <v-app-bar color="#f5f5f500" dense dark class="nav-bar">
            <div class="left">
                <div class="logo">
                    <img class="logo-img" src="@/assets/logo-medicime.png" alt="logo" />
                </div>
                <div class="nav-bar-title">
                    <ul class="menu">
                        <li class="nav-bar-title-item" v-for="(item, index1) in menuItems" :key="index1">
                            <div v-if="item.children.length === 0" @click="handleClickTitle(item.path)">{{ item.title }}
                            </div>
                            <v-menu v-else offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <div color="#fff" v-bind="attrs" v-on="on">{{ item.title }}</div>
                                </template>
                                <v-list>
                                    <v-list-item v-for="(itemChildren, index) in item.children" :key="index" link
                                        @click="handleClickTitle(itemChildren.path)">
                                        <v-list-item-title>{{ itemChildren.title }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </li>
                        <li class="nav-bar-title-item">
                            <v-menu offset-y :close-on-content-click="false" ref="menu">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="#fff" v-bind="attrs" v-on="on">mdi-menu-down</v-icon>
                                </template>
                                <v-card class="mx-auto" width="300">
                                    <NavBarItemCommon :subMenuItem="subMenuItem" :handleClickTitle="handleClickTitle" />
                                </v-card>
                            </v-menu>
                        </li>
                    </ul>
                </div>
                <div :class="isOpenMenuMobile ? 'menu-mobile active-menu-mobie' : 'menu-mobile'">
                    <div class="btn-close" @click="closeMenuMobile">Đóng</div>
                    <div class="menu-primary">
                        <NavBarItemCommon :subMenuItem="menuMobie" class="sub-menu" />
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="search">
                    <v-btn icon class="search-icon">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                    <input type="text" placeholder="Tìm kiếm" />
                </div>
                <div class="cart noselect" @click="goToCart()">
                    <v-icon>mdi-shopping-outline</v-icon>
                    <div class="title-cart">GIỎ HÀNG</div>
                </div>
                <div class="number-contact">
                    <div class="content-number">0974 722 827</div>
                </div>
            </div>
            <v-btn icon class="menu-icon" @click="openMenuMobile">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>
<script>
import NavBarItemCommon from './NavBarItemCommon.vue';
import {TypePageName} from '@/constant/blog/blogEditer';
export default {
    name: 'NavBar',
    components: {
        NavBarItemCommon
    },
    created() {
        window.addEventListener("scroll", this.handleMenuWhenScroll)
        window.addEventListener("resize", this.handleMenuResize)
    },
    data() {
        return {
            isOpenTab: false,
            isFixMenu: false,
            isOpenMenuMobile: false,
            menuItems: [
                {
                    title: 'TRANG CHỦ',
                    path: "/",
                    children: [
                    ]
                },
                {
                    title: 'GIỚI THIỆU',
                    children: [
                        { title: 'THƯ NGỎ HOẶC THÔNG ĐIỆP', path: "/thu" },
                        { title: 'SỨ MỆNH - TẦM NHÌN', path: "/gold" },
                        { title: 'THÀNH TỰU', path: "/exp" },
                        { title: 'LỊCH SỬ HÌNH THÀNH', path: "/history" },
                    ]
                },
                {
                    title: 'SẢN PHẨM',
                    path: "/product",
                    children: [
                    ]
                },
                {
                    title: 'TIN TỨC',
                    children: [
                        {
                            title: 'Tin mới nhất',
                            path: `/page/${TypePageName.BLOG}`
                        },
                        {
                            title: 'Tin tức khuyến mại',
                            path: "/sale_new"
                        },
                        {
                            title: 'Tin HINA',
                            path: `/page/${TypePageName.COMMIT}`
                        },
                        {
                            title: 'HINA với cộng đồng',
                            path: `/page/${TypePageName.TECHNOLOGY_RESEARCH}`
                        },
                        {
                            title: 'Cẩm nang sức khỏe',
                            path: `/page/${TypePageName.QUALITY}`
                        },
                        {
                            title: 'Hỏi đáp từ chuyên gia',
                            path: `/page/${TypePageName.EXPERT_OPINION}`
                        }
                    ]
                }
            ],
            subMenuItem: [
                {
                    title: 'CỬA HÀNG',
                    path: "/store",
                    children: []
                },
                {
                    title: 'LIÊN HỆ',
                    path: "/contact",
                    children: []
                },
            ],
            menuMobie: [
                {
                    title: 'TRANG CHỦ',
                    path: "/",
                    children: [
                    ]
                },
                {
                    title: 'GIỚI THIỆU',
                    children: [
                        { title: 'THƯ NGỎ HOẶC THÔNG ĐIỆP', path: "/thu" },
                        { title: 'SỨ MỆNH - TẦM NHÌN', path: "/a" },
                        { title: 'THÀNH TỰU', path: "/exp" },
                        { title: 'LỊCH SỬ HÌNH THÀNH', path: "/history" },
                    ]
                },
                {
                    title: 'SẢN PHẨM',
                    path: "/product",
                    children: [
                    ]
                },
                {
                    title: 'TIN TỨC',
                    children: [
                        {
                            title: 'Tin mới nhất',
                            path: "/new"
                        },
                        {
                            title: 'Tin tức khuyến mại',
                            path: "/sale_new"
                        },
                        {
                            title: 'Tin HINA',
                            path: "/hina_new"
                        },
                        {
                            title: 'HINA với cộng đồng',
                            path: "/comunicate_new"
                        },
                        {
                            title: 'Cẩm nang sức khỏe',
                            path: "/sk_new"
                        },
                        {
                            title: 'Hỏi đáp từ chuyên gia',
                            path: "/ref"
                        }
                    ]
                },
                {
                    title: 'CỬA HÀNG',
                    path: "/store",
                    children: []
                },
                {
                    title: 'LIÊN HỆ',
                    path: "/contact",
                    children: []
                },
                {
                    title: 'BLOG',
                    path: "/blog",
                    children: []
                },
            ]
        }
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleMenuWhenScroll);
    },
    methods: {
        goToCart() {
            this.$router.push('/product')
        },
        handleClickTitle(pathUrl) {
            this.$router.push(pathUrl);
            if (this.$refs.menu) {
                this.$refs.menu.save();
            }
        },
        handleMenuWhenScroll() {
            const scrollY = window.pageYOffset;
            if (scrollY >= 150) {
                this.isFixMenu = true;
            }
            else {
                this.isFixMenu = false;
            }
        },
        handleSetMenu(sizeMenu) {
            while (this.subMenuItem.length > 0 && this.menuItems.length > 0) {
                if (this.menuItems.length > sizeMenu) {
                    const lastItem = this.menuItems[this.menuItems.length - 1];
                    this.menuItems.pop();
                    this.subMenuItem.unshift(lastItem);
                }
                else if (this.menuItems.length < sizeMenu) {
                    if (this.subMenuItem.length > 0) {
                        const fisrtItemSubMenu = this.subMenuItem[0];
                        this.subMenuItem.shift();
                        this.menuItems.push(fisrtItemSubMenu);
                    }
                }
                else {
                    break;
                }

            }
        },
        handleMenuResize() {
            const width = window.innerWidth;
            if (width < 800) {
                this.handleSetMenu(1);

            }
            else if (width < 950) {
                this.handleSetMenu(2);
            }
            else if (width < 1088) {
                this.handleSetMenu(3);
            }
            else {
                this.handleSetMenu(4);
            }
        },
        openMenuMobile() {
            this.isOpenMenuMobile = true;
        },
        closeMenuMobile() {
            this.isOpenMenuMobile = false;
        }
    },
    computed: {
        isRenderClassMenu() {
            return this.isFixMenu;
        }
    }
}
</script>
<style scoped>
.left {
    min-width: 48%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.right {
    min-width: 48%;
    display: flex;
    justify-content: flex-start;
}

.search {
    display: flex;
    color: #fff;
    border-radius: 15px;
    border: 1px solid;
    display: inline-flex;
    padding: 0px 10px;
    margin-right: 10px;
}

.search input {
    color: #fff;
}

.search input:focus-visible {
    outline: unset;
}


.cart {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 10px;
    padding: 2px 10px;
    border: solid 1px rgb(212, 102, 5);
    background-color: rgb(212, 102, 5);
    border-radius: 16px;
    min-width: 125px;
    cursor: pointer;

}

.number-contact {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 10px;
    border: solid 1px rgb(212, 102, 5);
    background-color: rgb(212, 102, 5);
    border-radius: 16px;
    min-width: 125px
}

.title-cart {
    margin-left: 10px;
}

.nav-bar {
    display: flex;
    align-items: center;
}

.nav-bar-title {
    min-width: 55%;
}

.menu {
    margin-left: 30px;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
}

.nav-bar-title-item {
    border-bottom: 2px solid #f5f5f500;
    margin-right: 18px;

}

.nav-bar-title-item:hover {
    border-bottom: 2px solid #ffff;
    cursor: pointer;

}

.logo-img {
    width: 90px;
}

.nav-bar-component {
    background: rgb(1, 64, 35);
    position: relative;
    width: 100%;
    z-index: 1000;
    font-size: 14px;
}

.search-icon {
    width: 30px !important;
    height: 30px !important;
}

#header.scroll-header {
    background: rgb(1, 64, 35);
    position: fixed;
    top: 0;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    z-index: 3;
    animation: slide-down 0.5s;
}

@media only screen and (max-width: 1044px) {
    .number-contact {
        display: none;
    }

}

@media only screen and (max-width: 768px) {
    .search {
        width: 100%;
    }

    .active-menu-mobie {
        display: block !important;
    }

    .left {
        min-width: unset;
    }

    .right {
        min-width: 50%;
        justify-content: center;
    }

    .cart {
        display: none;
    }

    .nav-bar-title {
        display: none;
    }

    .menu-icon {
        display: block;
    }

    .menu-mobile {
        position: fixed;
        display: none;
        right: 0;
        top: 0;
        background: #292929c7;
        border-left: 1px solid #f0f0f0;
        height: 100vh;
        width: 55vw;
        z-index: 2;
        animation-name: menu-mobile-show;
        animation-duration: 1s;
    }

    .btn-close {
        margin-top: 26px;
        margin-bottom: 45px;
        color: white;
        display: flex !important;
        justify-content: flex-end;
        align-items: center;
        padding-right: 60px;
        text-transform: uppercase;
        cursor: pointer;
    }

    .menu-mobile-option {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .menu-mobile-option>li {
        margin-bottom: 20px;
    }

    .menu-mobile-option>li>a {
        color: #fff;
        border-bottom: 2px solid #f5f5f500;
        text-transform: uppercase;
        font-weight: 500;
    }

    .menu-mobile-option>li>a:hover {
        border-bottom: 2px solid #fff;
        cursor: pointer;
    }

}

@media only screen and (max-width: 768px) {
    .search {
        display: none;
    }
}

@media only screen and (min-width: 768px) {
    .menu-mobile {
        display: none;
    }

    .menu-icon {
        display: none;
    }
}
</style>