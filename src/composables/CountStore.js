import { ref } from "vue";

const globalCount = ref(100);
const incrementGlobalCount = () => (globalCount.value += 100);
export function useCount() {
  const localCount = ref(10);

  const incrementLocalCount = () => (localCount.value += 10);

  return {
    globalCount,
    localCount,
    incrementGlobalCount,
    incrementLocalCount,
  };
}
