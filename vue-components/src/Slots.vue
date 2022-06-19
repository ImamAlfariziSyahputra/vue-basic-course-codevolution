<script>
import Card from './components/Card.vue';
import NameList from './components/NameList.vue';

export default {
  name: 'App',
  components: { Card, NameList },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <!-- <Card></Card>
  <Card>
    <h2>Content Content 1</h2>
  </Card>
  <Card>
    <h2>Content Content 2</h2>
  </Card>
  <Card>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
      modi?
    </p>
  </Card>

  <Card>
    <template v-slot:header>
      <h3>The Header</h3>
    </template>
    <template v-slot:default><img src="https://picsum.photos/200" /></template>
    <template v-slot:footer><button>View Details</button></template>
  </Card> -->

  <NameList>
    <template v-slot:default="slotProps">
      <h3>{{ slotProps.firstName }} {{ slotProps.lastName }}</h3>
    </template>
  </NameList>

  <NameList>
    <template v-slot:default="slotProps">
      <h3>{{ slotProps.firstName }} 2</h3>
    </template>
  </NameList>
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
