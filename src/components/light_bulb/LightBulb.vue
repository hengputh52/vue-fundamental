<script>
export default {
    props: {
        light: {
            type: Object,
            required: true
            }
        }, emits : ['turnon-light']
    }
</script>

<template>
    <h2>{{light.name}}</h2>
    <h2 v-if="(light.isOn)">The Light is On</h2>
    <h2 v-else>The Light is off</h2>
    <button @click="$emit('turnon-light')">Light Button</button>
</template>