<script setup>
import { onMounted } from "vue";

onMounted(() => {});
</script>

<template>
  <section id="hero" class="flex w-full items-center justify-between">
    <h1
      data-aos="zoom-in-right"
      class="text-[58px] glitch leading-[70px] font-bold text-primary dark:text-primaryDark"
    >
      Hi 👋, <br />
      My name is<br />
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-leftGradient to-rightGradient"
        >Muhammad Faqih Ridho</span
      >
      <br />
      Front-End Developer
    </h1>

    <div
      data-aos="zoom-in-left"
      class="h-[350px] w-[350px] bg-gradient-to-t from-leftGradient to-rightGradient p-2 overflow-hidden rounded-full"
    >
      <img
        class="rounded-full w-full h-full object-cover"
        src="../../Assets/Images/Profile.png"
        alt=""
      />
    </div>
  </section>
</template>

<script>
export default {};
</script>
