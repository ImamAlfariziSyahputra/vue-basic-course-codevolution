<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    const c_firstName = ref('Clark');
    const c_lastName = ref('Kent');
    const c_heroName = ref('Superman');

    const greet = `Hello ${c_firstName.value}`;
    const greetHero = `Hello ${c_firstName.value} ${c_lastName.value} a.k.a ${c_heroName.value}`;

    const state = reactive({
      firstName: 'Princess',
      lastName: 'Diana',
      heroName: 'Wonder Woman',
    });

    const reactiveGreetHero = `Hello ${state.firstName} ${state.lastName} a.k.a ${state.heroName}`;

    return {
      // option API
      c_firstName,
      c_lastName,
      c_heroName,
      // composition API
      greet,
      greetHero,
      // reactive => composition API
      state,
      reactiveGreetHero,
    };
  },
  data() {
    return {
      o_firstName: 'Bruce',
      o_lastName: 'Wayne',
      o_heroName: 'Batman',
    };
  },
};
</script>

<template>
  <div>
    <h2>
      Option API - {{ o_firstName }} {{ o_lastName }} a.k.a {{ o_heroName }}
    </h2>
    <hr />

    <h2>
      Composition API - {{ c_firstName }} {{ c_lastName }} {{ c_heroName }}
    </h2>
    <h2>Composition API - {{ greetHero }}</h2>
    <hr />

    <h2>
      Composition API => {{ state.firstName }} {{ state.lastName }}
      {{ state.heroName }}
    </h2>
    <h2>Composition API => {{ reactiveGreetHero }}</h2>
  </div>
</template>

<style scoped></style>
