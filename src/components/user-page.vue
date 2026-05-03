<script>
import {ref, computed} from 'vue'
export default {
    async setup() {
        const user_number = ref([1, 2, 3])
        const sortedData = computed(() => userData.length)

        async function fetchUserData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
            return response

        }
        const userData = await fetchUserData()

        return {
            userData,
            user_number,
            sortedData,
        }
    },
    // created() {
    //     console.log(this.userData)
    // }
    }
</script>
<template>
    <header>
        <h1>User Data Page</h1>
        <h1>{{ user_number }}</h1>
        <h1>{{ sortedData }}</h1>
    </header>
    <ul>
        <li v-for="user in userData" :key="user.id">{{ user.name }}: {{ user.website }}</li>
    </ul>


</template>