<script setup>
import Navbar from "./Components/Molecules/Navbar.vue";
import MainLayout from "./Components/Layouts/MainLayout.vue";
import Hero from "./Components/Molecules/Hero.vue";
import About from "./Components/Molecules/About.vue";
import Skills from "./Components/Molecules/Skills.vue";
</script>

<template>
  <div class="bg-lightMode dark:bg-darkMode flex items-center justify-center">
    <MainLayout>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </MainLayout>
  </div>
</template>
