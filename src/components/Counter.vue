<script>
export default {
  data: () => ({
    count: 0,
    incrementAmount: 10,
  }),
  methods: {
    changeIncrementAmount(event) {
      this.incrementAmount = event.target.value;
    },
    incrementCounter() {
      this.count += this.incrementAmount;
    },
  },
};
</script>

<template>
  <h1>Counter</h1>
  <p>{{ count }}</p>
  <button v-on:click="incrementCounter">Increment Count</button>
  <div>
    <p>{{ incrementAmount }}</p>
    <label>Increment by:</label>
    <input
      type="number"
      v-bind:value="incrementAmount"
      ,
      v-on:input="changeIncrementAmount"
    />
  </div>
</template>
