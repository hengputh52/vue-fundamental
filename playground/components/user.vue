<script setup>
import { ref, computed, reactive} from 'vue'

    const regionName = ref("kanto");
    const userData = await fetch(
      "https://jsonplaceholder.typicode.com/users",
    ).then((response) => response.json());

    const regionNameAllCap = computed(() => {
      return regionName.value.toUpperCase()
    })

    const stateAllCap = computed(() => {
      return state.message.toUpperCase()
    })

    const changeName = () => {
      regionName.value = 'Hoenn'
    }

    const state = reactive({
      message: 'hello'
    })
    console.log(changeName)
</script>

<template>
  <header>
    <h1>User Example</h1>
    <h2>{{ regionName }}</h2>
    <h2>{{ regionNameAllCap }}</h2>
    <h3>{{ stateAllCap }}</h3>
      <button @click="changeName">change name</button>
  </header>
  <ul>
    <li v-for="user in userData" :key="user.id">
      {{ user.name }}: {{ user.website }}
    </li>
  </ul>

</template>
