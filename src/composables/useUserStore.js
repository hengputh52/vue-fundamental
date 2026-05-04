import { ref } from 'vue'
export async function fetchUserData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  ).then((response) => response.json());
  return response;
}
export const dataUser = await fetchUserData()
export const userNumber = ref([1, 2, 3])



 