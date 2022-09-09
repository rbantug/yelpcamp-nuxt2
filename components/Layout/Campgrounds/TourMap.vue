<template>
  <div class="main-container">
    <img :src="imgLink" alt="">
  </div>
</template>

<script>

export default {
    props: {
        imgLink: {
            type: String,
            required: true,
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
    width: 95%;
    margin-top: 0;
    margin-bottom: 3rem;
    margin-left: auto;
    margin-right: auto;
}

img {
    object-fit: contain;
    width: 100%;
    margin: 0 auto;
}

@media screen and (min-width: 768px) {
  .main-container {
    padding: 3rem;
  }

  img {
    object-fit: cover;
    object-position: top;
    height: 400px;
    width: 600px;
  }
}

/* @media screen and (min-width: 1024px) {
  img {
    object-fit: cover;
    width: 150px;
    height: 200px; 
  }
} */

@media screen and (min-width: 1024px) {
  * {
    box-sizing: initial;
  }

  .main-container {
    padding: 1rem;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>