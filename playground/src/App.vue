<script>
import { Suspense } from 'vue';
import user from '../components/user.vue'

export default {
  components: {
    user
  }
}
</script>

<template>
  <h1>New App</h1>
  <Suspense>
      <user />
      
      <template v-slot:fallback>
        loading user.....
      </template>
  </Suspense>

</template>
 
