<script>
import CounterMixins from '../mixins/Counter';

export default {
  mixins: [CounterMixins],
};
</script>

<template>
  <div>
    <button @click="incrementCount">Clicked {{ count }} times</button>
  </div>
</template>

<style scoped></style>
