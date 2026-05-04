<script setup>
import { ref } from "vue";
import LightBulb from "./components/light_bulb/LightBulb.vue";
import User from "./components/User.vue"
import Layout from "./components/layout.vue";

const nameList = ref([])
const name = ref('')
const lightData = ref([
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
])

const user = ref({
  name: 'heng',
  job: 'web developer'
})

const changeName = () => {
  user.value.name = 'Charlie'
}


function onToggle(name) {
  for (const light of lightData.value) {
    if (light.name === name) {
      light.isOn = !light.isOn;
      console.log(light.isOn);
    }
  }
}

function onAdd(name) {
  nameList.value.push(name);
}


</script>

<template>
  <h1>Hello Vue Js</h1>
  <Layout v-slot:sidebar>
      <User :user="user" @change-name="changeName"/>
  </Layout>

    <Layout v-slot:main>
        <ol>
    <li v-for="lightbulb in lightData">
      <LightBulb :light="lightbulb" @turnon-light="onToggle(lightbulb.name)" />
    </li>
  </ol>
    </Layout>

  <Layout v-slot:footer>
     <label>Add Name</label>
  <input type="string" v-model="name" @keyup.enter='onAdd(name)' />
  <ul>
    <li v-for="n in nameList">{{ n }}</li>
  </ul>
  </Layout>

 
</template>
