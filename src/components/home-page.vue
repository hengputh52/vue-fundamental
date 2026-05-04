<script setup>
import { useCount } from '../composables/CountStore'
import Counter from './Counter.vue';

const homeCount = useCount()

</script>

<template>
    <div class="homepage">
        <h1>Home Page</h1>
    </div>
    <p>global count:{{ homeCount.globalCount }}</p>
    <p>global count:{{ homeCount.localCount }}</p>
    <button @click="homeCount.incrementGlobalCount">Global Count</button>
    <button @click="homeCount.incrementLocalCount">Local Count</button>
    <hr />
    <Counter />

</template>

<style>
.homepage{
    display: flex;
    justify-content: center;
}
</style>
