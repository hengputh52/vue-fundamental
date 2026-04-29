<script>
export default {
  // props: ['movies'] basic way to declare props
  props: {
    movies: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <ul v-for="movie in movies">
    <li v-if="movie.isFavorite">
      {{ movie.title.toString() }}
      <ul>
        <li>
          <p v-if="movie.cast.length > 0">{{ movie.cast.toString() }}</p>
          <button>Add to Favorite</button>
        </li>
      </ul>
    </li>
  </ul>
</template>
