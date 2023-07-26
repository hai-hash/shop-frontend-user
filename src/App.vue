<template>
  <v-app>
    <router-view></router-view>
    <DialogConfirm/>
    <ToastComponent/>
  </v-app>
</template>

<script>
import DialogConfirm from '@/components/common/DialogConfirm.vue';
import ToastComponent from './components/common/Toast.vue';
import axios from 'axios';
export default {
  name: 'App',
  components:{
    DialogConfirm,
    ToastComponent
  },
  created(){
    this.initConfig();
  },
  methods:{
    initConfig(){
      axios.defaults.baseURL = "http://localhost:8080";
      axios.defaults.headers.common['content-type'] = 'application/json';
      axios.defaults.timeout = 5000;
      axios.interceptors.request.use(async (config) =>{
        const token = localStorage.getItem("token");
        if(token){
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      })

      axios.interceptors.response.use((response) =>{
        if(response && response.data){
          return response.data;
        }
      },(error) =>{
        debugger;
        if(error && error.response.status === 401){
          this.$router.push('/login');
        }
        else{
          throw error;
        }
      })
    }

  }
}
</script>
