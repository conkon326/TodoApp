<script setup>
import { useCounterStore } from "~/stores/counter";

const counter = useCounterStore();
</script>

<template>
  <div>
    {{ counter.counter }}
    <button @click="counter.counter++">button</button>

  </div>
  <NuxtLink to="/">index</NuxtLink>
  
  
</template>
