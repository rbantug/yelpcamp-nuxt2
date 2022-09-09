<template>
    <div>
        <PopupTop/>
        <TheHeader/>
        <Nuxt keep-alive :keep-alive-props="{ max: 10 }" />
        <TheFooter />
    </div>
</template>

<script>
import PopupTop from '../components/Layout/PopupTop.vue';
import TheHeader from '../components/Layout/TheHeader.vue'
import TheFooter from '../components/Layout/TheFooter.vue';
export default {
    components: {
    PopupTop,
    TheHeader,
    TheFooter
}
}
</script>