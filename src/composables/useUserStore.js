import { ref } from 'vue'
const userList = ref([])
export async function fetchUserData() {
  userList.value = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  ).then((response) => response.json());
  return {
    userList
  };
}

export const userNumber = ref([1, 2, 3])



 