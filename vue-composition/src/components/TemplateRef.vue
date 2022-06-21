<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const inputRef = ref(null);

    onMounted(() => {
      inputRef.value.focus(); // always access ".value" when using ref()
    });

    return {
      inputRef,
    };
  },
  // mounted() {
  //   this.$refs.inputRef.focus();
  // },
};
</script>

<template>
  <div>
    <input type="text" ref="inputRef" />
  </div>
</template>

<style scoped></style>
