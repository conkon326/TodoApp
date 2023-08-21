<script setup>
import { useCounterStore } from "~/stores/counter";

const counter = useCounterStore();
</script>

<template>
  <div>
    {{ counter.counter }}
  </div>
  <NuxtLink to="/">index</NuxtLink>
  
  
</template>
