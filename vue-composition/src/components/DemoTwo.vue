<script>
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const state = reactive({
      firstName: 'Bruce',
      lastName: 'Wayne',
    });

    setTimeout(() => {
      state.firstName = 'Clark';
      state.lastName = 'Kent';

      console.log('state =>', state);
    }, 2000);

    return toRefs(state);
  },
};
</script>

<template>
  <div>
    <h2>{{ firstName }} {{ lastName }}</h2>
  </div>
</template>

<style scoped></style>
