<script>
import Counter from './components/Counter.vue';
import MovieList from './components/MovieList.vue';

export default {
  components: {
    Counter,
    MovieList
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
    }
  }
}


</script>

<template>
  <Counter />
  <MovieList :movies="movies" />
</template>
