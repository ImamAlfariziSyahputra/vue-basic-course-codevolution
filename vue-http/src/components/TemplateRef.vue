<script>
import PostListVue from './PostList.vue';

export default {
  components: { PostListVue },
  mounted() {
    console.log(this.$refs.postListRef);
    this.$refs.inputRef.focus();
  },
};
</script>

<template>
  <div>
    <input type="text" ref="inputRef" />

    <PostList ref="postListRef" />
  </div>
</template>

<style scoped></style>
