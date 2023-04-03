<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="350"
      >
        <v-card>
          <v-card-title class="text-h5">
            Confirm Dialog
          </v-card-title>
          <v-card-text>{{ message }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click=" handleCancel()"
            >
              Cancel
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="handleConfirmAccess()"
            >
              Ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

<script>
export default {
  data () {
    return {
      dialog: false,
      message:''
    }
  },
  methods:{
    handleCancel(){
        this.$store.dispatch('closeDialog');
    },
    handleConfirmAccess(){
      if(this.$store.state.common.dialog){
        const value = this.$store.state.common.dialog;
        if( value.callBackFunction){
            if(value.dataCallBack){
              value.callBackFunction(value.dataCallBack);
            }
        }
        else{
         value.callBackFunction();
        }
      }
    
    this.$store.dispatch('closeDialog');
    }
  },
  watch:{
    '$store.state.common.isShowDialog'(value){
        this.dialog = value;
    },
    '$store.state.common.dialog'(value){
        this.message = value.message;
    }
  }
}
</script>