<script>
import Counter from "./components/Counter.vue";
import MovieList from "./components/MovieList.vue";
import User from "./components/User.vue";
import baseButton from "./components/base-button.vue";
import Layout from "./components/layout.vue";

export default {
    components: {
        Counter,
        MovieList,
        User,
        baseButton,
        Layout,
    },
    data() {
        return {
            favoriteMovie: [],
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
                name: "Heng",
                job: "Web developer",
                favoriteFrameWork: ["React", "Vue", "Typescript"],
            },
            lightData: [
                {
                    name: "kitchen",
                    isOn: false,
                },
                {
                    name: "bedroom",
                    isOn: false,
                },
                {
                    name: "living room",
                    isOn: false,
                },
            ],
        };
    },
    computed: {
        userInformation() {
            return {
                name: this.userData.name,
                job: this.userData.job,
            };
        },
    },
    methods: {
        changeName() {
            this.userData.name = "Charlie";
        },
        addFavorite(payload) {
            this.favoriteMovie.push(payload);
        },
        onToggle(name) {
            for (light of this.lightData) {
                if (light.name === name) {
                    light.isOn = !light.isOn;
                }
            }
        },
    },
};
</script>

<template>
    <Layout>
        <template v-slot:footer>
            <User :user="userInformation" @change-name="changeName" />
        </template>
        <template v-slot:sidebar>
            <Counter />
            <MovieList :movies="movies" @favorite="addFavorite" />
        </template>
        <template v-slot:main>
            <h2>Favorite Movies</h2>
            <ul>
                <li v-for="favorite in favoriteMovie">{{ favorite }}</li>
            </ul>
        </template>

    </Layout>
</template>
