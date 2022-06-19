<script>
import ComponentE from './ComponentE.vue';

export default {
  name: 'ComponentC',
  components: { ComponentE },
};
</script>

<template>
  <h2>Component C</h2>
  <ComponentE />
</template>

<style lang="scss" scoped></style>
