<script setup>
import { fetchUserData, userNumber} from '../composables/useUserStore'
const users = await fetchUserData()
console.log(users.userList.value)

</script>
<template>
  <header>
    <h1>User Data Page</h1>
    <h1>{{ userNumber }}</h1>
  </header>
  <ul>
    <li v-for="user in users.userList.value" :key="user.id">
      <pre>
      {{ user.name }} : {{ user.website }}
      </pre>
    </li>
  </ul>
</template>
