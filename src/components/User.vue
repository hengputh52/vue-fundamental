<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
     user: {
            type: Object,
        },
})

const emit = defineEmits(['change-name'])

const onClick = () => {
    emit('change-name')
}
</script>

<template>
    <h1>User Information</h1>

    <h2>name: {{ user.name }}</h2>
    <h2>Job: {{ user.job }}</h2>
    <button @click="onClick">Change Name</button>
</template>
