<template>
    <div v-if="isVisible" class="bg-black">
        <div class="container">
            <p>This project was made by Ron Bantug and designed by <a href="https://www.codewell.cc/">Codewell</a></p>
            <div class="closeBtn" @click="method">
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: true,
        }
    },
    methods: {
        method() {
            this.isVisible = !this.isVisible
        }
    },
}
</script>

<style scoped>
* {
    font-weight: 700;
}

.bg-black {
    background-color: black;
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

a {
    color: rgba(149, 205, 228, 1)
}

.closeBtn div::before,
.closeBtn div::after {
    content: '';
    background-color: grey;
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