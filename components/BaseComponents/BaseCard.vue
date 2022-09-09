<template>
    <div class="container-card flex">
        <img :src="imgLink" :alt="title">
        <div class="card-text">
            <div class="card-title">{{ title }}</div>
            <p>{{ description }}</p>
        </div>
        <div class="btn">
            <nuxt-link :to="slugLink">
                <BaseButton size="long" backgroundColor="bg-white">View Campground</BaseButton>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
    props: {
        title: {
            required: true,
            type: String,
        },
        description: {
            required: true,
            type: String,
        },
        imgLink: {
            required: true,
            type: String,
        },
        campSlug: {
            required: true,
            type: String,
        }
    },
    components: { BaseButton },
    computed: {
        slugLink() {
            return `/campgrounds/${this.campSlug}`
        }
    }
}
</script>

<style scoped>
.container-card {
    border: 1px solid rgba(128, 128, 128, 0.608);
    margin: 1rem 0;
    padding: 1.2rem;
    border-radius: 8px;
}

.flex {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
}

img {
    object-fit: cover;
    width: 100%;
    height: 15rem;
    border-radius: 8px;
}

.card-text {
    margin: 1rem 0;
}

.card-title {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
}

.card-text>p {
    line-height: 1.5;
    color: rgba(128, 128, 128);
    font-size: 1.2rem;
    font-weight: 500;
}

a {
    text-decoration: none;
}

.btn {
    width: 100%;
}

@media screen and (min-width: 768px) {
    .container-card {
        margin: 0;
    }
}
</style>