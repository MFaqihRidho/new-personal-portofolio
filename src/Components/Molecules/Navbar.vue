<script setup>
import SocialMedia from "./SocialMedia.vue";
import NavLink from "./NavLink.vue";
</script>

<template>
  <nav class="flex justify-between items-center">
    <img class="w-24 h-24" src="../../Assets/Icons/logo.png" alt="logo" />
    <div class="flex gap-12 items-center">
      <NavLink />
      <SocialMedia />
    </div>
  </nav>
</template>
