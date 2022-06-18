<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
  name: 'App',
  data() {
    return {
      baseMultiplier: 5,
      baseValue: 2,
    };
  },
  methods: {
    add(a, b, c) {
      return a + b + c;
    },
    multiply(num) {
      return num * this.baseMultiplier;
    },
  },
};
</script>

<template>
  <h2>{{ 5 + 5 }}</h2>

  <h2>Add method = {{ add(2, 3, 5) }}</h2>
  <h2>Add method = {{ add(5, 5, 5) }}</h2>
  <h2>Multiply method = {{ multiply(baseValue) }}</h2>
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
