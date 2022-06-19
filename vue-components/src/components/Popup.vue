<script>
export default {
  name: 'Popup',
  emits: {
    closePopup: (name) => {
      if (!name) {
        return false;
      } else {
        return true;
      }
    },
  },
  data() {
    return {
      name: '',
    };
  },
};
</script>

<template>
  <div>
    <h2>This is popup</h2>
    <input type="text" v-model="name" />
    <button @click="$emit('closePopup', name)">Close Popup</button>
  </div>
</template>

<style></style>
