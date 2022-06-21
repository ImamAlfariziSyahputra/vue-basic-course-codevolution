<script>
import { ref, reactive, toRefs } from 'vue';

export default {
  setup() {
    const heroName = ref('');
    const state = reactive({
      firstName: '',
      lastName: '',
    });

    return {
      heroName,
      ...toRefs(state),
    };
  },
  data() {
    return {
      fName: '',
      lName: '',
    };
  },
};
</script>

<template>
  <div>
    <h2>Options API</h2>
    <input type="text" placeholder="First Name" v-model="fName" />
    <input type="text" placeholder="Last Name" v-model="lName" />

    <hr />

    <h2>Compositions API</h2>
    <input type="text" placeholder="Hero Name" v-model="heroName" />
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />
  </div>
</template>

<style scoped></style>
