<template>
  <div class="main-container">
    <div>
      <div class="comment-cards">
        <BaseCommentCard v-for="singleReview of reviews" :key="singleReview._id" :author="singleReview.user" :date="sampleComputed(singleReview.createdAt)" :comment="singleReview.review" />
      </div>
      <div class="btn">
        <nuxt-link :to="newCommentRoute">
          <BaseButton v-if="$auth.loggedIn" size="small" commentIcon>Leave a Review</BaseButton>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat itaque voluptate quod! Dolorum beatae corrupti provident vero nam sapiente consectetur.

<script>
import BaseCommentCard from '@/components/BaseComponents/BaseCommentCard.vue'
import BaseButton from '@/components/BaseComponents/BaseButton.vue'
export default {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  components: {
    BaseCommentCard,
    BaseButton
  },
  computed: {
    newCommentRoute() {
      return `/campgrounds/${this.$route.params.id}/newcomment`
    },
    
  },
  methods: {
    sampleComputed(e) {
      let duration
      const test = Date.now() - Date.parse(e)
      // Years
      if (test >= 31557600000) {
        duration = Math.floor(test / 31557600000)
        return `${duration} y`
      }
      // Months
      if (test < 31557600000 && test >= 2629800000 ) {
        duration = Math.floor(test / 2629800000)
        return `${duration} m`
      }

      // Days
      if (test < 2629800000 && test >= 86400000 ) {
        duration = Math.floor(test / 86400000)
        return `${duration} d`
      }

      // Hours
      if (test < 86400000 && test >= 3600000) {
        duration = Math.floor(test / 3600000)
        return `${duration} h`
      }

      // Minutes
      if (test < 3600000 && test >= 60000) {
        duration = Math.floor(test / 60000)
        return `${duration} min`
      }

      // Seconds
      if (test < 60000 && test >= 1000) {
        duration = Math.floor(test / 1000)
        return `${duration} s`
      }

      if (test < 1000) {
        return 'Just now'
      }
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.main-container {
  border: 1px solid rgba(128, 128, 128, 0.20);
  border-radius: 5px;
  padding: 1.5rem;
  margin: 0 auto;
  width: 95%;
  /* display: flex;
  flex-direction: column; */
}

.btn {
  display: flex;
  justify-content: flex-start;
}

a {
  text-decoration: none;
} 

@media screen and (min-width: 768px) {
  .main-container {
    padding: 3rem;
  }
}

@media screen and (min-width: 1024px) {
  * {
    box-sizing: initial;
  }

  .main-container {
    width: 100%;
  }
}
</style>