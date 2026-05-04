<script setup>
import { ref} from "vue";
const user_number = ref([1, 2, 3]);
const userData = ref('')

async function fetchUserData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  ).then((response) => response.json());
  return response;
}
userData.value = await fetchUserData();

</script>
<template>
  <header>
    <h1>User Data Page</h1>
    <h1>{{ user_number }}</h1>
  </header>
  <ul>
    <li v-for="user in userData" :key="user.id">
      {{ user.name }}: {{ user.website }}
    </li>
  </ul>
</template>
