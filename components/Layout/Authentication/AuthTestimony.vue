<template>
  <div class="container-main">
    <div class="container-text">
      <p class="large-text">"Yelpcamp has provided me with a profound sense of content similar to the chimichanga I ate a while ago."
      </p>
      <div class="author">
        <img :src="profilePic" alt="">
        <div class="author-description">
          <p class="author-name">Mrs. Rogers</p>
          <p class="job">Professional Scrabble Player</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profilePic from '@/assets/images/deadpool-heart.jpg'
export default {
  data() {
    return {
      profilePic
    }
  }
}
</script>

<style scoped>
.container-main {
  background-color: rgba(128, 128, 128, 0.109);
  display: flex;
  justify-content: center;
  height: 35vh;
}

.container-text {
  width: 90%;
  margin: 0 auto;
}

.large-text {
  font-size: 1.3rem;
  line-height: 1.5;
  font-weight: 700;
}

.author {
  margin-top: 1rem;
  display: flex;
  align-items: center;
}

.author-description {
  margin-left: .5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img {
  object-fit: contain;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.author-name {
  font-size: .95rem;
  font-weight: 700;
}

.job {
  font-size: .90rem;
  font-weight: 500;
  color: grey;
} 

@media screen and (min-width: 1024px) {
  .container-main {
    align-items: center;
    height: 100%;
  }

  .container-text {
    width: 60%;
  }
}
</style>