<script>
export default {
  data() {
    return {
      names: [
        { firstName: 'Bruce', lastName: 'Wayne' },
        { firstName: 'Clark', lastName: 'Kent' },
        { firstName: 'Princess', lastName: 'Diana' },
      ],
    };
  },
};
</script>

<template>
  <h3 v-for="(name, idx) in names" :key="idx">
    <slot :firstName="name.firstName" :lastname="name.lastName"></slot>
  </h3>
</template>

<style></style>
