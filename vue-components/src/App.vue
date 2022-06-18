<script>
import Greet from './components/Greet.vue';

export default {
  name: 'App',
  components: {
    Greet,
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
  <Greet :name="name" :channel="channel" />
  <Greet name="Jarot" />
  <Greet name="Matt" />
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
