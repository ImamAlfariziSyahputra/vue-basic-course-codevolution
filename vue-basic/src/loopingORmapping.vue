<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
  name: 'App',
  data() {
    return {
      names: ['Ahok', 'Jarot', 'Matt'],
      fullNames: [
        { first: 'Ahok', last: 'Cahya' },
        { first: 'Jarot', last: 'Santoso' },
        { first: 'Matt', last: 'Murdock' },
      ],
      actors: [
        { name: 'Tony Stark', movies: ['Iron Man', 'Avengers Endgame'] },
        {
          name: 'Chris Evans',
          movies: ['Captain America', 'Avengers Endgame'],
        },
      ],
      myInfo: {
        name: 'Imam Alfarizi',
        channel: 'Lazy Pizy',
        course: 'Vue 3',
      },
    };
  },
};
</script>

<template>
  <!-- <h2 v-for="(name, idx) in names" :key="name">{{ idx }} {{ name }}</h2>
  <h2 v-for="fullName in fullNames" :key="fullName.first">
    {{ fullName.first }} {{ fullName.last }}
  </h2>

  <div v-for="actor in actors" :key="actor.name">
    <h2>{{ actor.name }}</h2>
    <h3 v-for="movie in actor.movies" :key="movie">{{ movie }}</h3>
  </div>

  <h2 v-for="(value, key, index) in myInfo" :key="value">
    {{ index }} {{ key }} {{ value }}
  </h2>

  <template v-for="name in names" :key="name">
    <h2>{{ name }}</h2>
    <hr />
  </template> -->

  <template v-for="name in names" :key="name">
    <h2 v-if="name === 'Ahok'">{{ name }}</h2>
  </template>
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
