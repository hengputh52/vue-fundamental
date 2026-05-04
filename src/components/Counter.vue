<script setup>
import { useCount } from '../composables/CountStore'

const count = useCount()
</script>

<template>
  <h1>Counter</h1>
  <p>global count:{{ count.globalCount }}</p>
  <p>local count:{{ count.localCount }}</p>
  <button @click="count.incrementGlobalCount">Global Count</button>
  <button @click="count.incrementLocalCount">Local Count</button>
</template>
