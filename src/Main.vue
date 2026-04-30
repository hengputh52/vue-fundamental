<script>
import LightBulb from "./components/light_bulb/LightBulb.vue";

export default {
  components: {
    LightBulb,
  },
  data() {
    return {
      nameList: [],
      name: "",
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
          light.isOn = !light.isOn;
          console.log(light.isOn);
        }
      }
    },
    onAdd(name) {
      this.nameList.push(name);
    },
  },
};
</script>

<template>
  <h1>Hello Vue Js</h1>
  <ol>
    <li v-for="lightbulb in lightData">
      <LightBulb :light="lightbulb" @turnon-light="onToggle(lightbulb.name)" />
    </li>
  </ol>
  <label>Add Name</label>
  <input type="string" v-model="name" @keyup.enter="onAdd(name)" />
  <ul>
    <li v-for="n in nameList">{{ n }}</li>
  </ul>
</template>
