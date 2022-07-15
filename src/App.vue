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

const homeDuration = 0.4;
const aboutDuration = 0.4;
const skillsDuration = 0.4;
const projectsDuration = 0.4;
const contactDuration = 0.4;
const sosmedDuration = 0.4;
const sosmedDelay =
  homeDuration +
  aboutDuration +
  skillsDuration +
  projectsDuration +
  contactDuration +
  sosmedDuration;

const store = useStore();
console.log(store.getters.getHomeDelay);

onMounted(() => {
  animate(
    ".intro",
    { y: ["0px", -window.innerHeight] },
    { duration: 2, easing: "ease-in-out" }
  );
  animate(
    ".intro2",
    { y: ["0px", -window.innerHeight] },
    { duration: 2, easing: "ease-in-out", delay: 1 }
  );
  animate(
    ".logo-navbar",
    { x: ["-30px", "0px"], opacity: [0, 1] },
    { duration: 0.5, easing: "ease-out", delay: store.getters.getHomeDelay }
  );
  animate(
    ".home",
    { y: ["-30px", "0px"], opacity: [0, 1] },
    { duration: homeDuration, easing: "ease-out", delay: 0.4 }
  );
  animate(
    ".about",
    { y: ["-30px", "0px"], opacity: [0, 1] },
    {
      duration: aboutDuration,
      easing: "ease-out",
      delay: homeDuration + aboutDuration,
    }
  );
  animate(
    ".skills",
    { y: ["-30px", "0px"], opacity: [0, 1] },
    {
      duration: skillsDuration,
      easing: "ease-out",
      delay: homeDuration + aboutDuration + skillsDuration,
    }
  );
  animate(
    ".projects",
    { y: ["-30px", "0px"], opacity: [0, 1] },
    {
      duration: projectsDuration,
      easing: "ease-out",
      delay: homeDuration + aboutDuration + skillsDuration + projectsDuration,
    }
  );
  animate(
    ".contact",
    { y: ["-30px", "0px"], opacity: [0, 1] },
    {
      duration: contactDuration,
      easing: "ease-out",
      delay:
        homeDuration +
        aboutDuration +
        skillsDuration +
        projectsDuration +
        contactDuration,
    }
  );
  animate(
    ".sosmed",
    { x: ["30px", "0px"], opacity: [0, 1] },
    {
      duration: sosmedDuration,
      easing: "ease-out",
      delay: sosmedDelay,
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
