<script>
export default {
  name: 'ComponentF',
  inject: ['username'],
};
</script>

<template>
  <h2>Component F</h2>
  <h3>Component F Username - {{ username }}</h3>
</template>

<style lang="scss" scoped></style>
