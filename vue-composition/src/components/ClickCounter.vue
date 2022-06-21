<script>
// import CounterMixins from '../mixins/Counter';
import useCounter from '../hooks/useCounter';

export default {
  setup() {
    const { count, incrementCount } = useCounter(100, 10);

    return {
      count,
      incrementCount,
    };
  },
  // mixins: [CounterMixins],
};
</script>

<template>
  <div>
    <button @click="incrementCount">Clicked {{ count }} times</button>
  </div>
</template>

<style scoped></style>
