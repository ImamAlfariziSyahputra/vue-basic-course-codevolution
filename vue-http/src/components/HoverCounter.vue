<script>
import CounterMixins from '../mixins/Counter';

export default {
  mixins: [CounterMixins],
};
</script>

<template>
  <div>
    <h2 @mouseover="incrementCount">Hovered {{ count }} times</h2>
  </div>
</template>

<style scoped></style>
