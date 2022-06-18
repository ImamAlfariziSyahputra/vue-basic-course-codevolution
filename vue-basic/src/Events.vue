<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
  name: 'App',
  data() {
    return {
      name: 'Ahok',
      count: 0,
    };
  },
  methods: {
    changeName(e) {
      console.log('event => ', e);
      this.name = 'Batman';
    },
    increment(num, e) {
      console.log('event => ', e);
      this.count += num;
    },
    decrement(num) {
      this.count -= num;
    },
  },
};
</script>

<template>
  <h2>{{ name }}</h2>

  <div>
    <button @click="changeName($event), increment(1, $event)">
      Change Name
    </button>
    <br />

    <h2>{{ count }}</h2>
    <button @click="increment(1, $event)">Increment Count</button>
    <button @click="decrement(1)">Decrement Count</button>
    <br />
    <br />
    <button @click="increment(5)">Increment Count 5</button>
    <button @click="decrement(5)">Decrement Count 5</button>
  </div>
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
