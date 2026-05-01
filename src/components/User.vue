<script>
export default {
    props: {
        // basic way to declare props
        user: {
            type: Object,
            required: true,
        },

        // optimized the props avoid passing all the data
        // name: {
        //     type: String,
        //     required: true
        // },
        // job: {
        //     type: String,
        //     required: true
        // },
    },
    emits: ['change-name']
}
</script>

<template>
    <h1>User Information</h1>
    <!-- <h2>name: {{ name }}</h2>
    <h2>Job: {{ job }}</h2> -->

    <h2>name: {{ user.name }}</h2>
    <h2>Job: {{ user.job }}</h2>
    <button @click="$emit('change-name')">Change Name</button>
    <!-- <ul>
        <li v-for="tech in user.favoriteFrameWork">
            {{tech }}
        </li>
    </ul> -->
</template>
