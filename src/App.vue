<script>
import { Suspense } from 'vue';
import HomePage from './components/home-page.vue';
import LogInPage from './components/log-in.vue';
import UserDataPage from './components/user-page.vue'
export default {
  components: {
    HomePage,
    LogInPage,
    UserDataPage
  },  
  beforeCreate() {
    console.log('before created')
    console.log(this.pokemon)
  },

  data: () => {
    return {
      tech: [1, 2, 3],
        currrentPage: 'Home'
      }
  },
  computed: {
    renderPage() {
      return this.currrentPage + 'Page'
    }
  },  
  methods: {
    async fetchPokemon() {
        this.tech = await fetch('https://api.restful-api.dev/objects').then(response => response.json())
    },
    showHomePage() {
        this.currrentPage = 'Home'
    },
    showLogInPage() {
      this.currrentPage = 'LogIn'
    },
    showUserDataPage() {
      this.currrentPage = 'UserData'
    }
  },
  created() {
    console.log('created')
    this.fetchPokemon()
  }
  }
</script>

<template>
  <!-- <h1>New app</h1>
  <button @click="fetchPokemon">fetch pokemon</button>
  <pre>{{ tech }}</pre> -->
  <nav>
    <div>
      <h1>Home page</h1>
    </div>
    <div class="right-side">
      <a href="#" @click.prevent="showHomePage">home page</a>
      <a href="#" @click.prevent="showLogInPage">log in</a>
      <a href="#" @click.prevent="showUserDataPage">User Page</a>
    </div>
  </nav>

  
    <!-- <homePage v-if="currrentPage === 'Home'" />
    <LogIn v-else/> -->
  <Suspense>
     <component :is="renderPage"/>

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