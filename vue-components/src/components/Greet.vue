<script>
export default {
  name: 'Greet',
  props: ['name', 'channel'],
};
</script>

<template>
  <h2>
    Hello {{ name ?? 'unknown' }}, My Channel is {{ channel ?? 'unknown' }}
  </h2>
</template>

<style lang="scss" scoped></style>
