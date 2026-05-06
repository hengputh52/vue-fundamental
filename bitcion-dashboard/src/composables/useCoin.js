import { ref } from 'vue'
const price = ref([])


export async function fetchData() {
    price.value = await fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR').then((response) => response.json())

    return {price}
}


