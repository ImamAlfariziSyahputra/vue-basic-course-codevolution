<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        userId: '',
        title: '',
        body: '',
      },
    };
  },
  methods: {
    addPost() {
      axios
        .post('https://jsonplaceholder.typicode.com/posts', this.formData)
        .then((res) => {
          console.log('res => ', res);
        })
        .catch((err) => {
          console.log('err => ', err);
        });
    },
  },
};
</script>

<template>
  <div>
    <form @submit.prevent="addPost">
      <div>
        <label for="userId">Post User Id</label>
        <input type="text" id="userId" v-model="formData.userId" />
      </div>
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" v-model="formData.title" />
      </div>
      <div>
        <label for="body">Body</label>
        <input type="text" id="body" v-model="formData.body" />
      </div>

      <button>Create Post</button>
    </form>
  </div>
</template>

<style scoped></style>
