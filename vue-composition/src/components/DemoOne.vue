<script>
import { ref } from 'vue';

export default {
  setup() {
    const name = ref('Lazy');

    setTimeout(() => {
      name.value = 'Ahok Jarot';
      console.log(name);
    }, 2000);

    return {
      name,
    };
  },
};
</script>

<template>
  <div>
    <h2>{{ name }}</h2>
  </div>
</template>

<style scoped></style>
