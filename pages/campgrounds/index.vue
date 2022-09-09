<template>
    <div class="container-main">
        <CampgroundWelcome @emit-camp-filter="setCampFilter"/>
        <div class="cards">
            <BaseCard v-for="element of allCamps.data" :key="element._id" :title="element.name" :description="element.description" :img-link="element.coverImgLink"
            :campSlug="element.slug" />
            
        </div>
    </div>


</template>

<script>
import BaseCard from '@/components/BaseComponents/BaseCard.vue'
import CampgroundWelcome from '@/components/Layout/CampgroundWelcome.vue'

export default {
    components: {
    BaseCard,
    CampgroundWelcome
    },
    async asyncData({ params, $axios, error }) {
        try {
            const allCamps = await $axios.$get('api/v1/camps')
            return { 
                allCamps, 
                campFilter: '', 
                }
        } catch (e) {
            error({ statusCode: e.statusCode, message: e.message })
            console.log(`${e.statusCode}: ${e.message}`)
        }
    },
    async fetch() {
        const result = await this.$axios.$get(`api/v1/camps?name=${this.campFilter}`)
        this.allCamps = result
    },
    methods: {
        setCampFilter(filter) {
            this.campFilter = filter
            this.$fetch()
        },
    }

}
</script>

<style scoped>
.cards {
    display: block;
}

.container-main {
    display: block;
    width: 90%;
    margin: auto;
}

@media screen and (min-width: 760px) {
    .cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
}

@media screen and (min-width: 1024px) {
    .cards {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .container-main {
        width: 80%;
    }
}

</style>