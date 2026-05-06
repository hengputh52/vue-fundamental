<script setup>
import { ref, Suspense } from 'vue'
import BitCoinCard from './components/bitcoin-card.vue';


</script>

<template>
  <Suspense>

    <body>


      <BitCoinCard />

    </body>
    <template v-slot:fallback>
      <p>data loading</p>
    </template>
  </Suspense>


</template>

<style>
body {
  background: url('https://assets-cms.kraken.com/images/51n36hrp/facade/65d4c7f0f651331255669ddc8a9af46aa937d941-1050x700.png?w=1536&fit=min') center / cover no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;


}
</style>
