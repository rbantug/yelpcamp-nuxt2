<template>
    <div class="btn-container" :class="[size, backgroundColor]">
        <div>
            <span v-if="commentIcon">
                <fa icon="far fa-comment-dots"></fa>
            </span>
            <slot></slot>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        size: {
            required: true,
            type: String,
            /* Accepts 'long', 'small' or 'medium-campground' only */
        },
        backgroundColor: {
            type: String,
            default: 'bg-black',
            /* Accepts 'bg-black' and 'bg-white' */
        },
        commentIcon: {
            required: false,
            type: Boolean,
            default: false,
        }
    },
}
</script>

<style>
.btn-container {
    padding: 1rem;
    display: flex;
    justify-content: center;
    border-radius: 5px;
}

.btn-container:hover {
    cursor: pointer;
    opacity: 90%
}

.long {
    max-width: 500px;
    font-size: 1.2rem;
    font-weight: 700;
}

.small {
    max-width: 170px;
    font-size: 0.9rem;
    font-weight: 500;
}

.medium-campground {
    font-size: 1.2rem;
    font-weight: 700;
}

.bg-black {
    background-color: black;
    color: white;
}

.bg-white {
    background-color: white;
    color: black;
    border: 1px solid rgba(128, 128, 128, 0.605);
}

span {
    padding-right: 0.3rem;
}

</style>