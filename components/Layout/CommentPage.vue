<template>
    <div class="container-comment">
        <h1>Add New Comment</h1>
        <p class="description">Description</p>
        <BaseInputField @emit-data="modifyComment" textarea :margin="false" bg-color="grey"
            :placeholder="newComment.placeholder" />
        <div @click="submitComment">
            <BaseButton class="btn" size="medium">Post Comment</BaseButton>
        </div>
    </div>

</template>

<script>
import BaseInputField from '../BaseComponents/BaseInputField.vue';
import BaseButton from '@/components/BaseComponents/BaseButton'
export default {
    props: {
        campID: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        }
    },
    components: {
        BaseButton,
        BaseInputField
    },
    data() {
        return {
            newComment: {
                val: '',
                isValid: true,
                errorMsg: 'Please add a comment',
                placeholder: 'This was probably the best camp I\'ve visited this past year, definitely recommend visiting any time soon.'
            },
        }
    },
    computed: {
        newCommentPlaceholder() {
            return this.newComment.isValid ? this.newComment.placeholder : this.newComment.errorMsg;
        }
    },
    methods: {
        modifyComment(data) {
            this.newComment.val = data
        },
        async submitComment() {
            try {
                await this.$axios.post('api/v1/reviews', {
                    review: this.newComment.val,
                    camp: this.campID,
                    user: this.$auth.user.data.name 
                })
                this.$router.push(`/campgrounds/${this.slug}`)
            } catch(err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
.container-comment {
    width: 90%;
    margin: 2rem auto;
}

.container-comment>h1 {
    margin-bottom: 2rem;
}

.description {
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.btn {
    margin-top: 1.5rem;
}

@media screen and (min-width: 768px) {
    .container-comment {
        margin-left: 2rem;
        margin-right: 0;
        max-width: 500px;
    }
}

@media screen and (min-width: 1024px) {
    .container-comment {
        margin-left: auto;
        margin-right: auto;
    }
}
</style>

