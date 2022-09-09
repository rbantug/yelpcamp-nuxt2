<template>
  <div class="main-container">
    <div class="flex">
        <img :src="imgLink" alt="">
        <div class="title-price">
            <span>{{title}}</span>
            <span>${{price}}/night</span>
        </div>
        <div class="description">
            {{description}}
        </div>
        <div class="submittedby">
            Submitted by {{author}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
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
    margin: 0 auto;
    width: 100%;
}

img {
    object-fit: contain;
    width: 100%;
}

.title-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
}

.title-price span:nth-of-type(1) {
    font-size: 1.3rem;
    font-weight: 700;
}
.title-price span:nth-of-type(2) {
    font-size: 0.9rem;
    font-weight: 700;
}

.description {
    line-height: 1.5;
    font-size: 0.9rem;
    color: rgba(128, 128, 128)
}

.submittedby {
    font-size: 0.9rem;
    color: rgba(128, 128, 128);
    padding-top: 1rem;
    font-style: italic;
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
}



</style>