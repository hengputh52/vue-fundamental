<script>
export default {
  props: {
    light: {
      type: Object,
      required: true,
    },
  },
  emits: ["turnon-light"],
  methods: {
    turnOnLight() {
      this.$emit("turnon-light");
    },
  },
};
</script>

<template>
  <h2>{{ light.name }}</h2>
  <p>{{ light.isOn ? "Light is ON" : "Light is OFF" }}</p>
  <button @click="turnOnLight">{{ light.isOn ? "Turn off the light" : "Turn on the light" }}</button>
    

  <!-- <h2 v-if="(light.isOn)">The Light is On</h2>
    <h2 v-else>The Light is off</h2>
    <button v-if="(!light.isOn)" @click="$emit('turnon-light')">Turn on the Light</button>
    <button v-else @click="$emit('turnon-light')">Turn off the Light</button>
     -->
</template>
