<script>
import Greet from './components/Greet.vue';
import Article from './components/Article.vue';

export default {
  name: 'App',
  components: {
    Greet,
    Article,
  },
  data() {
    return {
      name: 'Lazy',
      channel: 'Lazy Pizy',
    };
  },
};
</script>

<template>
  <!-- <Greet :name="name" :channel="channel" />
  <Greet name="Jarot" />
  <Greet name="Matt" /> -->

  <Article
    id="article-id"
    class="article-class"
    title="Article Title"
    :likes="50"
    :isPublished="true"
  />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
