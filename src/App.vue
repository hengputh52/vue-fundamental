<script setup>
import { Suspense, ref } from 'vue';
import HomePage from './components/home-page.vue';
import LogInPage from './components/log-in.vue';
import UserDataPage from './components/user-page.vue'

const tech = ref([1, 2, 3])
const currrentPage = ref(HomePage)


const showHomePage = () => {
  currrentPage.value = HomePage
}
const showLogInPage = () => {
  currrentPage.value = LogInPage
}
const showUserDataPage = () => {
  currrentPage.value = UserDataPage
}

</script>

<template>
  <nav>
    <div>
      <h1>Home page</h1>
      <h2>{{ tech }}</h2>
      
    </div>
    <div class="right-side">
      <a href="#" @click.prevent="showHomePage">home page</a>
      <a href="#" @click.prevent="showLogInPage">log in</a>
      <a href="#" @click.prevent="showUserDataPage">User Page</a>
    </div>
  </nav>

  
  <Suspense>
     <component :is="currrentPage"/>

     <template v-slot:fallback>
      <p>loading data ....</p>
     </template>
  </Suspense>
 

</template>


<style>
  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid blue;
  }
  .right-side{
    display: flex;
    gap: 10px;
  }
</style>