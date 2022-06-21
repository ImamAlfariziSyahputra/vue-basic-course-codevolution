<script>
import { ref, computed } from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, ctx) {
    console.log('ctx => ', ctx);
    console.log('props => ', props);

    const fullName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    function sendEvent() {
      ctx.emit('callHeroes', fullName.value);
    }

    return {
      fullName,
      sendEvent,
    };
  },
  // computed: {
  //   fullName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   },
  // },
};
</script>

<template>
  <div>
    <h4>Hello {{ fullName }}</h4>

    <button @click="sendEvent">Call Heroes</button>
  </div>
</template>

<style scoped></style>
