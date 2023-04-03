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
export default {
  name: 'App',
  components:{
    DialogConfirm,
    ToastComponent
  }
}
</script>
