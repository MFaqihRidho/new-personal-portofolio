<script setup>
import { useStore } from "vuex";
import { onMounted } from "vue";
import { animate } from "motion";

const store = useStore();

onMounted(() => {
  animate(
    ".home",
    { y: ["-30px", "0px"], opacity: [0, 1] },
    {
      duration: store.state.homeDuration,
      easing: "ease-out",
      delay: store.getters.getHomeDelay,
    }
  ),
    animate(
      ".about",
      { y: ["-30px", "0px"], opacity: [0, 1] },
      {
        duration: store.state.aboutDuration,
        easing: "ease-out",
        delay: store.getters.getAboutDelay,
      }
    ),
    animate(
      ".skills",
      { y: ["-30px", "0px"], opacity: [0, 1] },
      {
        duration: store.state.skillsDuration,
        easing: "ease-out",
        delay: store.getters.getSkillsDelay,
      }
    ),
    animate(
      ".projects",
      { y: ["-30px", "0px"], opacity: [0, 1] },
      {
        duration: store.state.projectsDuration,
        easing: "ease-out",
        delay: store.getters.getProjectsDelay,
      }
    ),
    animate(
      ".contact",
      { y: ["-30px", "0px"], opacity: [0, 1] },
      {
        duration: store.state.contactDuration,
        easing: "ease-out",
        delay: store.getters.getContactDelay,
      }
    );
});
</script>

<template>
  <div
    class="items-center hidden lg:flex gap-14 text-xl font-medium font-DMSans"
  >
    <button class="home">Home</button>
    <button class="about">About</button>
    <button class="skills">Skills</button>
    <button class="projects">Projects</button>
    <button class="contact">Contact</button>
  </div>
</template>
