<script>
// import CounterMixins from '../mixins/Counter';
import useCounter from '../hooks/useCounter';

export default {
  setup() {
    const { count, incrementCount } = useCounter();

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
    <h2 @mouseover="incrementCount">Hovered {{ count }} times</h2>
  </div>
</template>

<style scoped></style>
