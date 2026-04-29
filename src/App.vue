<script>
import Counter from './components/Counter.vue';
import MovieList from './components/MovieList.vue';
import User from './components/User.vue';

export default {
  components: {
    Counter,
    MovieList,
    User
  },
  data() {
    return {
      movies: [
        {
          title: "blade runner 2049",
          cast: ["Ryan Gosling", "Charlie Puth"],
          isFavorite: true,
        },
        {
          title: "lala land",
          cast: ["Ryan Gosling", "Emma Stone"],
          isFavorite: false,
        },
        { title: "Notebook", cast: [], isFavorite: true },
        { title: "Ben 10", cast: ["Charlie Puth"], isFavorite: false },
        { title: "The Boys", cast: ["heng", "meng"], isFavorite: true },
      ],
      userData: {
        name: 'Heng',
        job: 'Web developer',
        favoriteFrameWork: ['React', 'Vue', 'Typescript']
      },
      lightData: [
        {
          name: 'kitchen',
          isOn: false
        },
        {
          name: 'bedroom',
          isOn: false
        },
        {
          name: 'living room',
          isOn: false
        },
        
      ]
    }
  },
  computed: {
    userInformation() {
      return {
        name: this.userData.name,
        job: this.userData.job
      }
    }
  },
  methods: {
    changeName() {
      this.userData.name = 'Charlie'
    }
  },
  onToggle(name)
  {
    for (light of this.lightData) {
      if (light.name === name) {
        light.isOn = !light.isOn
      }
    }
  }
}


</script>

<template>
  <!-- <User :name="userData.name" :job="userData.job"/> -->
  <User :user="userInformation" @change-name="changeName"/>
  <Counter />
  <MovieList :movies="movies" />
</template>
