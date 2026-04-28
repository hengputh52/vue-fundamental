<script>
import Counter from './components/Counter.vue';
export default {
  components: {
    Counter
  },
  data() {
    return {
      message: "Not Found",
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
    };
  },
};
</script>

<template>
  <Counter />
  <ul v-for="movie in movies">
    <li v-if="movie.isFavorite">
      {{ movie.title.toString() }}
      <ul>
        <li>
          <p v-if="movie.cast.length > 0">{{ movie.cast.toString() }}</p>
          <p v-else>{{ message }}</p>
        </li>
      </ul>
    </li>
  </ul>
</template>
