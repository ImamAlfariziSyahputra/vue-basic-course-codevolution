<script>
import Popup from './components/Popup.vue';

export default {
  name: 'App',
  components: {
    Popup,
  },
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    closePopup(name) {
      this.showPopup = false;
      console.log('name => ', name);
    },
  },
};
</script>

<template>
  <button @click="showPopup = true">Show Popup</button>
  <Popup v-show="showPopup" @closePopup="closePopup" />
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
