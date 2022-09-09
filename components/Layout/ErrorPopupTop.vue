<template>
    <div v-if="isVisible" class="bg-red">
        <div class="container">
            <p>{{$store.state.errorMsg}}</p>
            <div class="closeBtn" @click="methodCloseBtn">
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: null,
        }
    },
    methods: {
        methodCloseBtn() {
            this.isVisible = false
            this.$store.commit('showErrorPopup', { value: false })
        },
    },
    computed: {
        test() {
            return this.$store.state.errorIsVisible
        }
    },
    watch: {
        test() {
            this.isVisible = this.test
        }
    }
}
</script>

<style scoped>
* {
    font-weight: 700;
}

.bg-red {
    background-color: red;
    width: 100%;
    z-index: 1;
}

.container {
    padding: 1rem;
    display: flex;
    justify-content: center;
    margin: auto;
    max-width: 700px;
}

p {
    color: white;
    text-align: center;
    width: 80%;
    line-height: 1.5;
    max-width: 600px;
}

.closeBtn div::before,
.closeBtn div::after {
    content: '';
    background-color: white;
    position: absolute;
    width: 18px;
    height: 2px;
    border-radius: 2px;
    cursor: pointer;
}

.closeBtn div::before {
    transform: rotate(45deg);
}

.closeBtn div::after {
    transform: rotate(-45deg);
}

.closeBtn {
    display: flex;
    align-items: center;
    padding-left: 1rem;
}
</style>