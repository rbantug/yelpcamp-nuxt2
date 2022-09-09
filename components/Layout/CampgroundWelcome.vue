<template>
    <div class="bg-grey">
        <div class="container">
            <div class="welcome-title">Welcome to YelpCamp!</div>
            <p>View our hand-picked campgrounds from all over the world, or add your own.</p>
            <div class="input-btn">
                <BaseInputField magnifyIcon class="sample" placeholder="Search for camps" @emit-data="addCampFilter"/>
                <div class="btn" @click="emitCampFilter" >
                    <BaseButton size="medium-campground">Search</BaseButton>
                </div>
            </div>
            <nuxt-link v-if="$auth.loggedIn" to="/campgrounds/addcamp">Or add your own campground</nuxt-link>
        </div>
    </div>
</template>

<script>
import BaseButton from '../BaseComponents/BaseButton.vue';
import BaseInputField from '../BaseComponents/BaseInputField.vue';

export default {
    components: { BaseButton, BaseInputField },
    data() {
        return {
            campFilter: '',
        }
    },
    methods: {
        addCampFilter(filter) {
            this.campFilter = filter
        },
        emitCampFilter() {
            this.$emit('emit-camp-filter', this.campFilter)
        },
    }
}
</script>

<style scoped>
*, *::before, *::after {
  box-sizing: border-box;
}
/* For the input field placeholder */


.bg-grey {
    background-color: rgba(128, 128, 128, 0.10);
}

.container {
    margin: 1rem;
    padding: 2rem;
}

.welcome-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.container>p {
    line-height: 1.5;
    color: rgba(128, 128, 128);
    font-size: 0.95rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.container>a {
    color: grey;
}

.btn {
    margin: 1rem 0;
}

.input-btn {
    display: block;
}

/* 
///////////////////////
// Input Field Styling
///////////////////////
*/
.custom-field {
    font-size: 1rem;
    position: relative;
}

.custom-field input {
    border: 1px solid grey;
    background: #ffffff;
    padding: 1rem;
    border-radius: 3px;
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;
}

.custom-field .placeholder {
    position: absolute;
    left: 1rem;
    bottom: 50%;
    top: 2px;
    transform: translateY(-50%);
    width: calc(100% - 24px);
    color: rgba(128, 128, 128);
    white-space: nowrap;
    text-overflow: ellipsis;
}

.custom-field input:focus+.placeholder {
    display: none;
}

.placeholder>span {
    margin-left: 0.5rem;
}

@media screen and (min-width: 768px) {

    .container {
        max-width: 450px;
        padding: 3rem 2rem;
    }

    .input-btn {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .sample {
    margin-right: 1rem;
    }

    .custom-field .placeholder {
        top: 20px;
    }

    .custom-field input {
        margin-right: 1rem;
        margin-bottom: 0;
    }
}
</style>