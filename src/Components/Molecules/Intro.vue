<template>
  <div class="fixed intro top-0 right-0 left-0 z-40">
    <div
      class="fixed intro top-0 right-0 left-0 z-40 w-screen h-screen bg-darkMode"
    ></div>
    <div
      class="fixed intro2 top-0 right-0 left-0 z-20 w-screen h-screen bg-gradient-to-r from-leftGradient to-rightGradient"
    ></div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
console.log(store.getters.getHomeDelay);
</script>
