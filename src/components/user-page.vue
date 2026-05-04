<script setup>
import { dataUser, userNumber} from '../composables/useUserStore'


</script>
<template>
  <header>
    <h1>User Data Page</h1>
    <h1>{{ userNumber }}</h1>
  </header>
  <ul>
    <l v-for="user in dataUser" :key="user.id">
      <pre>
     {{ user.name }}: {{ user.website }}
      </pre>
    </l>
  </ul>
</template>
