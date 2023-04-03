<template>
    <v-snackbar :value="show" :timeout="timeout" :top="top" :bottom="bottom" :left="left" :right="right"
        :multi-line="multiLine" :vertical="vertical" :color="color" :close-on-click="closeOnClick"
        :close-on-content-click="closeOnContentClick" @input="hideSnackbar">
        {{ message }}
        <template v-slot:action="{ attrs }">
            <v-btn text v-bind="attrs" @click="hideSnackbar()">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>
  
<script>
export default {
    name: 'ToastComponents',
    data() {
        return {
            show: false,
            message: '',
            color: 'primary',
            timeout: 6000,
            top: false,
            bottom: true,
            left: false,
            right: false,
            multiLine: false,
            vertical: false,
            closeOnContentClick: false,
            closeOnClick: true,
        };
    },

    methods: {
        hideSnackbar() {
            this.$store.dispatch('hideSnackbar');
        },
    },

    created() {
        this.$store.watch(
            state => state.snackbar.show,
            (value) => {
                this.show = value;
                this.message = this.$store.state.snackbar.message;
                this.color = this.$store.state.snackbar.color;
                this.timeout = this.$store.state.snackbar.timeout;
                this.top = this.$store.state.snackbar.top;
                this.bottom = this.$store.state.snackbar.bottom;
                this.left = this.$store.state.snackbar.left;
                this.right = this.$store.state.snackbar.right;
                this.multiLine = this.$store.state.snackbar.multiLine;
                this.vertical = this.$store.state.snackbar.vertical;
                this.closeOnContentClick = this.$store.state.snackbar.closeOnContentClick;
                this.closeOnClick = this.$store.state.snackbar.closeOnClick;
            }
        );
    }
};
</script>
  