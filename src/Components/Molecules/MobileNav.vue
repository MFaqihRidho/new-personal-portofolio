<script setup>
import SocialMedia from "./SocialMedia.vue";
defineProps({
  open: Boolean,
});
</script>

<template>
  <div
    :class="`w-1/2 ${
      open ? ' left-0' : '-left-1/2'
    } bg-darkMode h-screen transition-all duration-150 flex md:hidden justify-between py-10 px-10 items-center flex-col fixed top-0 bottom-0 z-50`"
  >
    <div class="flex-col flex text-3xl gap-5">
      <button class="">Home</button>
      <button class="">About</button>
      <button class="">Skills</button>
      <button class="">Projects</button>
      <button class="">Contact</button>
    </div>
    <SocialMedia />
  </div>
</template>
