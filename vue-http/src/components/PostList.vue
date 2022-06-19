<script>
import axios from 'axios';

export default {
  created() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
      errMsg: null,
    };
  },
  methods: {
    getPosts() {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          this.posts = res.data;
        })
        .catch((err) => {
          console.log('err => ', err);
          this.errMsg = 'Something went wrong...';
        });
    },
  },
};
</script>

<template>
  <div>
    <!-- <button @click="getPosts">Load Posts</button> -->
    <p v-if="errMsg" style="color: red">{{ errMsg }}</p>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.id }}. {{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <hr />
    </div>
  </div>
</template>

<style scoped></style>
