<template>
    <div id="header" :class="this.isRenderClassMenu ? 'scroll-header nav-bar-component' : 'nav-bar-component'">
        <v-app-bar color="#f5f5f500" dense dark class="nav-bar">
            <div class="left">
                <div class="logo">
                    <img class="logo-img" src="@/assets/Logo-tea.png" alt="logo" />
                </div>
                <div class="nav-bar-title">
                    <ul class="menu">
                        <li class="nav-bar-title-item">
                            TRANG CHỦ
                        </li>
                        <li class="nav-bar-title-item">
                            GIỚI THIỆU
                        </li>
                        <li class="nav-bar-title-item">
                            SẢN PHẨM
                        </li>

                        <li class="nav-bar-title-item">TIN TỨC</li>
                        <li class="nav-bar-title-item">
                            CỬA HÀNG
                        </li>
                        <li class="nav-bar-title-item">
                            TUYỂN DỤNG
                        </li>
                        <li class="nav-bar-title-item">
                            NHƯỢNG QUYỀN
                        </li>
                    </ul>
                </div>
                <div class="menu-mobile" :style="isOpenMenuMobile ? 'display:block' : 'display:none'">
                    <div class="btn-close" @click="closeMenuMobile">Đóng</div>
                    <div class="menu-primary">
                        <ul id="menu-menu-chinh" class="menu-mobile-option">
                            <li><a>Trang Chủ</a></li>
                            <li><a>Giới Thiệu</a></li>
                            <li> <a>Sản Phẩm</a></li>
                            <li> <a>Tin Tức</a></li>
                            <li> <a>Cửa Hàng</a></li>
                            <li> <a>Nhượng Quyền</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="right">
                <v-btn icon class="search-icon">
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-btn icon class="menu-icon" @click="openMenuMobile">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
            </div>
        </v-app-bar>
    </div>
</template>
<script>
export default {
    name: 'NavBar',
    created() {
        window.addEventListener("scroll", this.handleMenuWhenScroll)
    },
    data() {
        return {
            isFixMenu: true,
            isOpenMenuMobile: false
        }
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleMenuWhenScroll);
    },
    methods: {
        handleMenuWhenScroll() {
            const scrollY = window.pageYOffset;
            if (scrollY >= 150) {
                this.isFixMenu = true;
            }
            else {
                this.isFixMenu = false;
            }
        },
        openMenuMobile(){
            this.isOpenMenuMobile = true;
        },
        closeMenuMobile(){
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
    min-width: 88%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-bar {
    display: flex;
    align-items: center;
}

.nav-bar-title {
    min-width: 78%;
}

.menu {
    margin-left: 30px;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
}

.nav-bar-title-item {
    border-bottom: 2px solid #f5f5f500;
    margin-right: 25px;

}

.nav-bar-title-item:hover {
    border-bottom: 2px solid #ffff;
    cursor: pointer;

}

.logo-img {
    width: 200px;
}

.nav-bar-component {
    position: absolute;
    width: 100%;
    z-index: 1000;
}

#header.scroll-header {
    background: #282828;
    position: fixed;
    top: 0;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    z-index: 3;
    animation: slide-down 0.5s;
}

@media only screen and (max-width: 768px) {

    .nav-bar-title,
    .search-icon {
        display: none;
    }
    .menu-icon{
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

@media only screen and (min-width: 768px) {
    .menu-mobile {
        display: none;
    }
    .menu-icon{
        display: none;
    }
}</style>