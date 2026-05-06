<script setup>
import { useCount } from "../composables/CountStore";
import Counter from "./Counter.vue";
import { ref } from "vue";
const homeCount = useCount();
const colorPreference = ref("black");
</script>

<template>
  <div class="homepage">
    <h1>Home Page</h1>
  </div>
  <h2>{{ colorPreference }}</h2>
  <input type="color" v-model="colorPreference"/>
  <div class="wrapper">
    <p>global count:{{ homeCount.globalCount }}</p>
    <p>global count:{{ homeCount.localCount }}</p>
    <button @click="homeCount.incrementGlobalCount">Global Count</button>
    <button @click="homeCount.incrementLocalCount">Local Count</button>
  </div>

  <hr />
  <Counter />
</template>

<style>
.homepage {
  display: flex;
  justify-content: center;
}

.wrapper{
    background-color: v-bind(colorPreference);
}

html {
  background-color: aquamarine;
}

button {
  background-color: green;
}
</style>
