<script>
import { provide, ref, reactive, toRefs } from 'vue';
import ChildA from './ChildA.vue';

export default {
  components: {
    ChildA,
  },
  setup() {
    const count = ref(0);

    const incrementCount = () => {
      count.value++;
    };

    const state = reactive({
      firstName: 'Bruce',
      lastName: 'Wayne',
    });

    provide('c_count', count);
    provide('incrementCount', incrementCount);
    provide('c_hero', state);
    provide('c_username', 'Ahok Jarot');

    return {
      count,
      incrementCount,
      ...toRefs(state),
    };
  },
  data() {
    return {
      username: 'Bruce Wayne',
    };
  },
  provide() {
    return {
      username: this.username,
    };
  },
};
</script>

<template>
  <div>
    <h3>Parent Component - {{ username }}</h3>
    <h3>Parent Component count - {{ count }}</h3>
    <h3>Parent Component hero - {{ firstName }} {{ lastName }}</h3>

    <button @click="incrementCount">Increment Count</button>

    <hr />
    <ChildA />
  </div>
</template>

<style scoped></style>
