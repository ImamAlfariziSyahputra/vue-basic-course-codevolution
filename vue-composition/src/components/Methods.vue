<script>
import { ref, reactive, toRefs } from 'vue';

export default {
  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    const state = reactive({
      firstName: 'Bruce',
      lastName: 'Wayne',
    });

    function changeHero() {
      state.firstName = 'Clark';
      state.lastName = 'Kent';
    }

    return {
      count,
      increment,
      ...toRefs(state),
      changeHero,
    };
  },
  data() {
    return {
      name: 'Bruce',
    };
  },
  methods: {
    setName() {
      this.name = 'Clark';
    },
  },
};
</script>

<template>
  <div>
    <h2>{{ name }}</h2>
    <button @click="setName">Change Name</button>

    <h2>{{ count }}</h2>
    <button @click="increment">Increment</button>

    <h2>{{ firstName }} {{ lastName }}</h2>
    <button @click="changeHero">Change Hero</button>
  </div>
</template>

<style scoped></style>
