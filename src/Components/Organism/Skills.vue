<script setup>
import SectionTitle from "../Atoms/SectionTitle.vue";
import SkillsLogo from "../Molecules/SkillsLogo.vue";
import SectionSubTitle from "../Atoms/SectionSubTitle.vue";
</script>

<template>
  <section
    id="skills"
    data-aos="zoom-out"
    class="w-full flex justify-center flex-col gap-24 items-center"
  >
    <div class="flex flex-col justify-center items-center gap-10">
      <SectionTitle>My Skills</SectionTitle>
      <SectionSubTitle>
        Technologies I’ve been working with recently</SectionSubTitle
      >
    </div>
    <SkillsLogo />
  </section>
</template>
