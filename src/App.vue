<script setup>
import { reactive, ref } from "vue";

const red = ref(0);
const green = ref(0);
const blue = ref(0);

// const color = ref({
//   red: 0,
//   green: 0,
//   blue: 0,
// });

const color = reactive({
  red: 0,
  green: 0,
  blue: 0,
});

function generatoColor() {
  // red.value = Math.floor(Math.random() * 255);
  // green.value = Math.floor(Math.random() * 255);
  // blue.value = Math.floor(Math.random() * 255);

  color.red = Math.floor(Math.random() * 255);
  color.green = Math.floor(Math.random() * 255);
  color.blue = Math.floor(Math.random() * 255);
}

const refValue = ref("hello");
const reactiveValue = reactive({
  greeting: "hello",
});

refValue.value = true;
reactiveValue.greeting = false;

console.log(refValue.value);
console.log(reactiveValue);
</script>
<template>
  <main
    :style="{
      backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
    }"
  >
    <div>
      <input type="number" placeholder="red" v-model="color.red" id="" />
      <input type="number" placeholder="green" v-model="color.green" id="" />
      <input type="number" placeholder="blue" v-model="color.blue" id="" />
      <button @click="generatoColor">Generate</button>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: rgb(122, 50, 255);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  display: flex;
  flex-direction: column;
}
</style>
