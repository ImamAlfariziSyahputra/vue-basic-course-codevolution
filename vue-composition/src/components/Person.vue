<script>
import { ref } from 'vue';
import PersonGreeting from './PersonGreeting.vue';

export default {
  components: {
    PersonGreeting,
  },
  setup() {
    const firstName = ref('');
    const lastName = ref('');

    function callHeroes(hero) {
      alert(`Calling ${hero}`);
    }

    return {
      firstName,
      lastName,
      callHeroes,
    };
  },
};
</script>

<template>
  <div>
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />

    <PersonGreeting
      :firstName="firstName"
      :lastName="lastName"
      @callHeroes="callHeroes"
    />
  </div>
</template>

<style scoped></style>
