<template>
    <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
            <img v-bind="attrs" v-on="on" src="@/assets/share-variant.svg" alt class="share-button" />
        </template>
        <div class="sharing-wrap">
            <p>Chia sẻ</p>
            <vueper-slides :bullets="false" ref="myVueperSlides" :arrows="false" class="no-shadow share-model"
                :visible-slides="6" slide-multiple :gap="3" :slide-ratio="1 / 4" :dragging-distance="200"
                :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
                <vueper-slide v-for="(network, index) in networks" :key="index">
                    <template v-slot:content>
                        <SharingItem :network="network" :sharing="sharing"/>
                    </template>
                </vueper-slide>
            </vueper-slides>
            <div class="copy-link">
                <input type="text" label="Outlined" outlined value="https://youtu.be/Dmg180UF6Yw" readonly/>
                <v-btn>Sao chép</v-btn>
            </div>
            <img src="@/assets/chevron-left.svg" alt class="arrow-left" @click="$refs.myVueperSlides.previous()" />
            <img src="@/assets/chevron-right.svg" alt class="arrow-right" @click="$refs.myVueperSlides.next()" />
        </div>
    </v-dialog>
</template>
  
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import SharingItem from '@/components/common/SharingItem.vue'
import 'swiper/css/swiper.css'
export default {
    name: 'MultiSharing',
    components: {
        VueperSlides,
        VueperSlide,
        SharingItem
    },
    methods: {

    },
    computed: {
        getOptionSwide() {
            return this.swiperOption
        }
    },
    data() {
        return {
            dialog: false,
            sharing: {
                url: 'https://thaoduoctashapy.com/san-pham/tra-sen/',
                title: 'Say hi to Vite! A brand new, extremely fast development setup for Vue.',
                description: 'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.',
                quote: 'The hot reload is so fast it\'s near instant. - Evan You',
                hashtags: 'vuejs,vite,javascript',
                twitterUser: 'youyuxi'
            },
            networks: [
                { network: 'baidu', name: 'Baidu', icon: 'fas fah fa-lg fa-paw', color: '#2529d8' },
                { network: 'buffer', name: 'Buffer', icon: 'fab fah fa-lg fa-buffer', color: '#323b43' },
                { network: 'email', name: 'Email', icon: 'far fah fa-lg fa-envelope', color: '#333333' },
                { network: 'evernote', name: 'Evernote', icon: 'fab fah fa-lg fa-evernote', color: '#2dbe60' },
                { network: 'facebook', name: 'Facebook', icon: 'fab fah fa-lg fa-facebook-f', color: '#1877f2' },
                { network: 'flipboard', name: 'Flipboard', icon: 'fab fah fa-lg fa-flipboard', color: '#e12828' },
                { network: 'hackernews', name: 'HackerNews', icon: 'fab fah fa-lg fa-hacker-news', color: '#ff4000' },
                { network: 'instapaper', name: 'Instapaper', icon: 'fas fah fa-lg fa-italic', color: '#428bca' },
                { network: 'line', name: 'Line', icon: 'fab fah fa-lg fa-line', color: '#00c300' },
                { network: 'linkedin', name: 'LinkedIn', icon: 'fab fah fa-lg fa-linkedin', color: '#007bb5' },
                { network: 'odnoklassniki', name: 'Odnoklassniki', icon: 'fab fah fa-lg fa-odnoklassniki', color: '#ed812b' },
                { network: 'pinterest', name: 'Pinterest', icon: 'fab fah fa-lg fa-pinterest', color: '#bd081c' },
                { network: 'pocket', name: 'Pocket', icon: 'fab fah fa-lg fa-get-pocket', color: '#ef4056' },
                { network: 'quora', name: 'Quora', icon: 'fab fah fa-lg fa-quora', color: '#a82400' },
                { network: 'reddit', name: 'Reddit', icon: 'fab fah fa-lg fa-reddit-alien', color: '#ff4500' },
                { network: 'skype', name: 'Skype', icon: 'fab fah fa-lg fa-skype', color: '#00aff0' },
                { network: 'sms', name: 'SMS', icon: 'far fah fa-lg fa-comment-dots', color: '#333333' },
                { network: 'stumbleupon', name: 'StumbleUpon', icon: 'fab fah fa-lg fa-stumbleupon', color: '#eb4924' },
                { network: 'telegram', name: 'Telegram', icon: 'fab fah fa-lg fa-telegram-plane', color: '#0088cc' },
                { network: 'messenger', name: 'Messenger', icon: 'fab fah fa-lg fa-facebook-messenger', color: '#0084ff' },
                { network: 'tumblr', name: 'Tumblr', icon: 'fab fah fa-lg fa-tumblr', color: '#35465c' },
                { network: 'twitter', name: 'Twitter', icon: 'fab fah fa-lg fa-twitter', color: '#1da1f2' },
                { network: 'viber', name: 'Viber', icon: 'fab fah fa-lg fa-viber', color: '#59267c' },
                { network: 'vk', name: 'Vk', icon: 'fab fah fa-lg fa-vk', color: '#4a76a8' },
                { network: 'weibo', name: 'Weibo', icon: 'fab fah fa-lg fa-weibo', color: '#e9152d' },
                { network: 'whatsapp', name: 'Whatsapp', icon: 'fab fah fa-lg fa-whatsapp', color: '#25d366' },
                { network: 'wordpress', name: 'Wordpress', icon: 'fab fah fa-lg fa-wordpress', color: '#21759b' },
                { network: 'xing', name: 'Xing', icon: 'fab fah fa-lg fa-xing', color: '#026466' },
                { network: 'yammer', name: 'Yammer', icon: 'fab fah fa-lg fa-yammer', color: '#0072c6' },
                { network: 'fakeblock', name: 'Custom Network', icon: 'fab fah fa-lg fa-vuejs', color: '#41b883' }
            ]
        }
    }
}
</script>
  
<style>
h1 {
    text-align: center;
    margin: 50px 0 80px;
}

.arrow-right {
    height: 40px;
    position: absolute;
    top: 58px;
    right: 0px;
    z-index: 1000;
    cursor: pointer;
    border-radius: 100%;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3), 0 0 4px rgba(0, 0, 0, 0.2);
    background-color: #FFFFFF;
}

.arrow-left {
    height: 40px;
    left: 1px;
    top: 58px;
    position: absolute;
    z-index: 1000;
    cursor: pointer;
    border-radius: 100%;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3), 0 0 4px rgba(0, 0, 0, 0.2);
    background-color: #FFFFFF;
}

.share-button {
    height: 30px;
}
.copy-link{
    border: 1px solid;
    min-height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 30px;
}
input{
    width: 80%;
    margin-right: 10px;
}
.sharing-wrap {
    background-color: #FFFFFF;
    padding: 10px;
    position: relative;
}
</style>