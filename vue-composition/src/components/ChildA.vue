<script>
import ChildB from './ChildB.vue';

export default {
  components: { ChildB },
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <h3>Child Component A</h3>

    <hr />
    <ChildB />
  </div>
</template>

<style scoped></style>
