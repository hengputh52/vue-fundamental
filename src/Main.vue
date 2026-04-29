<script>
import LightBulb from './components/light_bulb/LightBulb.vue';

export default {
    components: {
        LightBulb
    },
    data() {
        return {
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
    methods: {
        onToggle(name) {
            for (const light of this.lightData) {
                if (light.name === name) {
                    light.isOn = !light.isOn
                    console.log(light.isOn)
                }
            }

        },
    },
};
</script>

<template>
    <h1>Hello Vue Js</h1>
    <ul v-for="lightbulb in lightData">
        <LightBulb :light="lightbulb" @turnon-light="onToggle(lightbulb.name)" />
    </ul>


</template>
