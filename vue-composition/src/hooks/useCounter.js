import { ref } from 'vue';

export default function useCounter(initialCount = 0, plusSize = 1) {
  const count = ref(initialCount);

  function incrementCount() {
    count.value += plusSize;
  }

  return {
    count,
    incrementCount,
  };
}
