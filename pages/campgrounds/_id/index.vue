<template>
    <div class="main-container">
        <div class="right-col-desktop">
            <div class="tour-description">
                <TourDescription :title="singleCamp.name" :price="singleCamp.price"
                    :description="singleCamp.description"
                    :author="singleCamp.createdBy" :imgLink='singleCamp.coverImgLink' />
            </div>
            <div class="tour-comments">
                <TourComments :reviews="singleCamp.reviews" />
            </div>
        </div>
        <div class="left-col-desktop">
            <div class="tour-map">
                <TourMap :imgLink="singleCamp.mapImgLink" />
            </div>
        </div>
    </div>
</template>

<script>
import TourDescription from '@/components/Layout/Campgrounds/TourDescription.vue'
import TourComments from '@/components/Layout/Campgrounds/TourComments.vue'
import TourMap from '@/components/Layout/Campgrounds/TourMap.vue'

export default {
    components: {
        TourDescription,
        TourComments,
        TourMap,
    },
    async asyncData({ params, $axios, error }) {
        try {
            const result = await $axios.$get(`api/v1/camps/${params.id}`)
            const singleCamp = result.data[0];
            return { singleCamp }
        } catch (e) {
            error({ statusCode: e.statusCode, message: e.message })
            console.log(`${e.statusCode}: ${e.message}`)
        }
    }
}
</script>

<style scoped>
.main-container {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.right-col-desktop {
    order: 1
}

.left-col-desktop {
    order: 2
}

.tour-description,
.tour-comments,
.tour-map {
    margin-top: 2rem;
}

@media screen and (min-width: 1024px) {
    .main-container {
        flex-direction: row;
        width: 80%;
        max-width: 900px;
    }

    .right-col-desktop {
        order: 2;
        width: 65%;
        display: flex;
        flex-direction: column;
    }

    .left-col-desktop {
        order: 1;
        width: 35%;
    }

}
</style>