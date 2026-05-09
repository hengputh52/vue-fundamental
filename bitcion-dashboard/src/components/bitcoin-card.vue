<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import { fetchData } from '../composables/useCoin'



const reminderValue = ref()
const { price } =  fetchData()

 
watch(reminderValue, () => {
    if (Number(price.value.USD) >= reminderValue.value) {
        console.log('reminder has been alerted')
    }

})

const isTarget = computed(() => {
    return Number(price.value.USD) >= reminderValue.value
})

function setReminder(value) {
    reminderValue.value = value
    console.log(reminderValue.value)
}





</script>

<template>

    <!-- <ul v-for="remind in reminderList" class="p-8 bg-emerald-400 rounded-xl mx-10 mb-5">
        <li>{{ Number(price.USD) >= remind ? 'too high' : 'too low'}}</li>
    </ul> -->
    <div :class="{ 'bg-emerald-400 p-10 mx-10 mb-10 rounded-xl': isTarget }">
        <p class="text-center text-2xl text-amber-50 font-bold">{{ isTarget ? 'Price hit the target' : 'No alert message yet' }}</p>
    </div>





    <div class="flex justify-around items-center p-10 bg-amber-300 mx-10 rounded-2xl">
        <div class="flex gap-4 text-2xl items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1280px-Bitcoin.svg.png"
                class="mx-auto block h-10 rounded-full" />
            <h1>BitCoin</h1>
        </div>
        <div class="text-2xl">
            <h1><span class=" text-green-500 text-3xl">$</span> {{ price.USD }}</h1>
        </div>
        <div class="text-2xl">
            <h1><span class=" text-green-500 text-3xl">€</span> {{ price.EUR }}</h1>
        </div>
    </div>

    <div class="flex flex-col gap-2 p-10 bg-white m-10 rounded-2xl">
        <div>
            <label class="font-bold text-2xl">Enter the price to set reminder</label>
        </div>
        <div class="flex gap-3">
            <input v-model="reminderValue" type="number" placeholder="enter the price" class="border rounded-xl p-2" />
            <button @click="setReminder(reminderValue)"
                class="border-none rounded-xl p-2 bg-blue-400 font-medium text-amber-50">Set Reminder</button>
        </div>


    </div>

</template>
