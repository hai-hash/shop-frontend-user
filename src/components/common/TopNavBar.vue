<template>
    <div class="wrap">
        <div class="top-nav-bar">
            <div class="left-top-nav" @click="selectLangule()">
                <div class="icon-langule"></div>
                <div class="langule-select">VN</div>
                <v-icon color="#fff">mdi-menu-down</v-icon>
                <div class="select-langule">
                    <v-card class="mx-auto" min-width="200">
                        <v-list-item v-for="(item, i) in items" :key="i">
                            <!-- <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon> -->
                            <v-list-item-content>
                                <v-list-item-title v-text="item.name" class="item-langule"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </div>
            </div>
            <div class="right-top-nav">
                <div class="login">Đăng Nhập</div>
                <div class="registry">Đăng ký</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TopNavBar',
    computed:{
        isOpenSelectLangule(){
            return this.isOpenListLangule;
        }
    },
    data() {
        return {
            isOpenListLangule: true,
            selection: 'vn',
            items: [
                {
                    name: 'VN',
                    id: 1,
                },
                {
                    name: 'NG',
                    id: 2,
                }
            ],
        }
    },
    methods:{
        selectLangule(){
            console.log('da nhay vao day')
            this.isOpenListLangule = !this.isOpenListLangule;
        }
    }
}

</script>

<style scoped>
.wrap {
    background-color: #000;
    position: relative;
}

.top-nav-bar {
    display: flex;
    width: 70%;
    justify-content: space-between;
    margin: auto;
}

.right-top-nav {
    display: flex;

}

.login,
.registry {
    padding: 0px 10px;
    color: #fff;
    cursor: pointer;
}
.login{
border-right: 1px solid #fff;
}

.left-top-nav {
    display: flex;
}
.select-langule{
    display: none;
    top: 20px;
    position: absolute;
    z-index: 2000;
}
.langule-select{
   color: #fff;
}
</style>