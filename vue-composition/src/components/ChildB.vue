<script>
import ChildC from './ChildC.vue';

export default {
  components: { ChildC },
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <h3>Child Component B</h3>

    <hr />
    <ChildC />
  </div>
</template>

<style scoped></style>
