<script>
import Portal from './components/Portal.vue';

export default {
  name: 'App',
  components: { Portal },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <teleport to="#portal-root">
    <Portal />
  </teleport>
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
