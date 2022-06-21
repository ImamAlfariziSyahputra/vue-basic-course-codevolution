<script>
import { inject, toRefs } from 'vue';

export default {
  components: {},
  setup() {
    const usernameFromParent = inject('c_username', 'Default username'); // Second Argument for default value
    const countFromParent = inject('c_count', 0);
    const incrementCount = inject('incrementCount');
    const HeroFromParent = inject('c_hero', {});

    return {
      usernameFromParent,
      countFromParent,
      incrementCount,
      ...toRefs(HeroFromParent),
    };
  },
  data() {
    return {};
  },
  inject: ['username'],
};
</script>

<template>
  <div>
    <h3>Child Component C Option API Inject Username - {{ username }}</h3>
    <h3>
      Child Component C Composition API Inject Username -
      {{ usernameFromParent }}
    </h3>
    <h3>
      Child Component C Composition API Inject Count -
      {{ countFromParent }}
    </h3>
    <h3>
      Child Component C Composition API Inject Hero -
      {{ firstName }} {{ lastName }}
    </h3>

    <button @click="incrementCount">Increment Count form Child</button>
  </div>
</template>

<style scoped></style>
