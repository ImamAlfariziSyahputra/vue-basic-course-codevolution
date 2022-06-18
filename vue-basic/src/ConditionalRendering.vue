<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
  name: 'App',
  data() {
    return {
      num: 'asd',
      display: true,
      showElement: false,
    };
  },
};
</script>

<template>
  <h2 v-if="num === 0">The number is zero</h2>
  <h2 v-else-if="num < 0">The number is Negative</h2>
  <h2 v-else-if="num > 0">The number is Positive</h2>
  <h2 v-else>NOT a Number</h2>

  <template v-if="display">
    <h2>Matt</h2>
    <h2>Murdock</h2>
    <h2>Karen</h2>
  </template>

  <h2 v-show="showElement">Using v-show</h2>
  <h2 v-if="showElement">Using v-if</h2>
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
.underline {
  text-decoration: underline;
}
.italic {
  font-style: italic;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
