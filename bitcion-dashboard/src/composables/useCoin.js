import { ref, onMounted } from "vue";

export function fetchData() {
  const price = ref([]);
  let timer = null;
  const fetchPrice = async () => {
    try {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR",
      ).then((response) => response.json());

      price.value = response;
    } catch (error) {
      console.log("failed to fetch data", error);
    }
  };

  onMounted(() => {
    fetchPrice();
    timer = setInterval(fetchPrice, 3000);
  });
  return { price };
}
