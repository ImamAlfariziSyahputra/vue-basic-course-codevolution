<script>
import ComponentC from './components/ComponentC.vue';

export default {
  name: 'App',
  components: {
    ComponentC,
  },
  data() {
    return {
      username: 'Lazy Pizy',
    };
  },
  provide() {
    return {
      username: this.username,
    };
  },
};
</script>

<template>
  <h3>App Component Username - {{ username }}</h3>
  <ComponentC />
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
