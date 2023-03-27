<template>
    <div class="wrapper">
        <button class="btn btn--minus" @click="changeCounter('-1')" type="button" name="button">
            -
        </button>
        <input class="quantity" type="text" name="name" :value="counter">
        <button class="btn btn--plus" @click="changeCounter('1')" type="button" name="button">
            +
        </button>
    </div>
</template>
<script>
export default {
    name: 'CounterProduct',
    data() {
        return {
            counter: 1
        }
    },
    methods: {
        changeCounter: function (num) {
            this.counter += +num
            !isNaN(this.counter) && this.counter > 0 ? this.counter : this.counter = 0;
            this.$emit('input',this.counter);
        }
    },
}
</script>
<style scoped>
.wrapper {
    height: 30px;
    display: flex;
}

.quantity {
    -webkit-appearance: none;
    border: none;
    text-align: center;
    width: 30px;

    font-size: 16px;
    color: #43484D;
    font-weight: 300;
    border: 1px solid #E1E8EE;
}

.btn {
    border: 1px solid #E1E8EE;
    width: 30px;
    background-color: #E1E8EE;
    /*   border-radius: 6px; */
    cursor: pointer;
}

button:focus,
input:focus {
    outline: 0;
}
</style>