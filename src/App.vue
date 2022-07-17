<script setup>
import Navbar from "./Components/Molecules/Navbar.vue";
import MainLayout from "./Components/Layouts/MainLayout.vue";
import Hero from "./Components/Organism/Hero.vue";
import About from "./Components/Organism/About.vue";
import Skills from "./Components/Organism/Skills.vue";
import Projects from "./Components/Organism/Projects.vue";
import Contact from "./Components/Organism/Contact.vue";
import Footer from "./Components/Organism/Footer.vue";
import Intro from "./Components/Molecules/Intro.vue";

import { useStore } from "vuex";
import { onMounted } from "vue";
import { animate } from "motion";

const store = useStore();
console.log(store.getters.getHomeDelay);

onMounted(() => {
  console.log(store.getters.getHomeDelay);
  animate(
    ".logo-navbar",
    { x: ["-30px", "0px"], opacity: [0, 1] },
    { duration: 0.5, easing: "ease-out", delay: store.getters.getLogoDelay }
  ),
    animate(
      ".sosmed",
      { x: ["30px", "0px"], opacity: [0, 1] },
      {
        duration: store.getters.sosmedDuration,
        easing: "ease-out",
        delay: store.getters.getSosmedDelay,
      }
    );
});
</script>

<template>
  <div
    class="bg-lightMode selection:bg-leftGradient dark:bg-darkMode flex items-center justify-center"
  >
    <MainLayout>
      <Intro />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </MainLayout>
  </div>
</template>
