<script>
export default {
  name: 'Article',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Article Default Title',
    },
    likes: Number,
    isPublished: Boolean,
  },
  inheritAttrs: false,
};
</script>

<template>
  <div>
    <h2>Article Component</h2>
    <h2 v-bind="$attrs">{{ title }}</h2>
    <h2>Likes - {{ likes }}</h2>
    <h2>Published - {{ isPublished ? 'Yes' : 'No' }}</h2>
  </div>
</template>

<style lang="scss" scoped></style>
