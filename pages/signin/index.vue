<template>
    <div class="container-main">
        <div class="fields">
            <AuthFields type="signin" />
        </div>
        <div class="testimony">
            <AuthTestimony />
        </div>
    </div>
</template>

<script>
import AuthFields from '@/components/Layout/Authentication/AuthFields.vue'
import AuthTestimony from '@/components/Layout/Authentication/AuthTestimony.vue'
export default {
    layout: 'NoMenuLayout',
    components: {
        AuthFields,
        AuthTestimony,
    }

}
</script>

<style scoped>

.container-main {
    display: flex;
    flex-direction: column;
}

.fields {
    width: 90%;
    margin: 0 auto;

}

@media screen and (min-width: 768px) {

    span,
    a {
        font-size: 1rem;
    }
}

@media screen and (min-width: 1024px) {
    .container-main {
        flex-direction: row;
    }

    .fields {
        justify-content: center;
        max-width: 500px;
        width: 60%;
    }

    .testimony {
        height: 100vh;
        width: 40%;
    }
}
</style>