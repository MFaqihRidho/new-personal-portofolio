<script setup>
import { onMounted } from "vue";

onMounted(() => {});
</script>

<template>
  <section
    id="hero"
    class="flex gap-10 lg:gap-0 lg:flex-row flex-col-reverse w-full items-center justify-between"
  >
    <h1
      data-aos="zoom-in-right"
      class="text-center text-3xl lg:text-start md:text-5xl xl:text-[58px] xl:leading-[70px] font-bold text-primary dark:text-primaryDark"
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
      class="h-72 w-72 xl:h-[350px] xl:w-[350px] lg:h-[250px] lg:w-[250px] bg-gradient-to-t from-leftGradient to-rightGradient p-2 overflow-hidden rounded-full"
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
