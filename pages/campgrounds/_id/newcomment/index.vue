<template>
    <div>
        <CommentPage :campID="singlecamp._id" :slug="singlecamp.slug" />
    </div>
</template>

<script>
import CommentPage from '@/components/Layout/CommentPage.vue'
export default {
    middleware: 'auth',
    components: {
        CommentPage
    },
    async asyncData({ params, $axios, error }) {
        try {
            const result = await $axios.$get(`api/v1/camps/${params.id}`)
            const singlecamp = result.data[0];
            return { 
                singlecamp,
                }
        } catch (e) {
            error({ statusCode: e.statusCode, message: e.message })
            console.log(`${e.statusCode}: ${e.message}`)
        }
    },
}
</script>

<style scoped>

</style>

