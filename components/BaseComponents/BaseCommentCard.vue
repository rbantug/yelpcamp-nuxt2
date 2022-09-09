<template>
  <div>
    <div class="author-date">
        <span>{{author}}</span>
        <span>{{date}}</span>
    </div>
    <div class="comment">
        {{comment}}
    </div>
    <div class="border-bottom"></div>
  </div>
</template>

<script>
export default {
    props: {
        author: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>

.author-date {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.author-date span:nth-of-type(1) {
    font-weight: 700;
}

.author-date span:nth-of-type(2) {
    font-weight: 500;
    font-size: 0.8rem;
}

.comment {
    font-size: 0.9rem;
    color: grey;
    line-height: 1.5;
}

.border-bottom {
    border-bottom: 1px solid rgba(128, 128, 128, 0.5);
    margin: 1rem 0;
}
</style>