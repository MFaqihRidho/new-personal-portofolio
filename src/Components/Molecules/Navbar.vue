<script setup>
import NavbarSocialMediaLink from "../Atoms/NavbarSocialMediaLink.vue";
</script>

<template>
  <nav class="flex justify-between items-center">
    <img class="w-24 h-24" src="../../Assets/Icons/logo.png" alt="logo" />
    <div class="flex gap-12 items-center">
      <div class="items-center flex gap-14 text-xl font-medium font-DMSans">
        <button>Home</button>
        <button>About</button>
        <button>Skills</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
      <NavbarSocialMediaLink />
    </div>
  </nav>
</template>