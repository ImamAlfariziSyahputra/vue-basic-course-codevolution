<script>
import ClickCounter from './components/ClickCounter.vue';
import HoverCounter from './components/HoverCounter.vue';

export default {
  components: {
    ClickCounter,
    HoverCounter,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <ClickCounter />
  <HoverCounter />
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
