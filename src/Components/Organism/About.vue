<script setup>
import Experience from "../Molecules/Experience.vue";
import SectionTitle from "../Atoms/SectionTitle.vue";
</script>

<template>
  <section
    id="about"
    class="flex flex-col justify-center text-center xl:text-start items-center xl:flex-row xl:justify-between xl:items-start gap-14 xl:gap-9"
  >
    <div
      data-aos="fade-right"
      class="flex gap-9 min-h-[200px] flex-col items-center"
    >
      <SectionTitle> About Me </SectionTitle>
      <p class="font-medium text-xl max-w-[800px]">
        Hello, I am a Front-End Developer who has experience using React Js, Vue
        Js, Tailwind CSS, Git, and Github. I can use other frameworks like next
        and vue although not as expert as react, i'm currently studying Back-End
        development using node js, express js, and also mongodb
      </p>
    </div>
    <div
      data-aos="fade-left"
      data-aos-delay="4000"
      class="flex gap-9 flex-col items-center"
    >
      <SectionTitle> Work Experience </SectionTitle>
      <Experience
        title="Front-End Developer Intern"
        company="KMPlus Consulting"
        location="Remote"
        date="Apr 2022 - July 2022"
        contract="Internship"
      />
      <Experience
        title="Junior Front-End Developer"
        company="Lolipad"
        location="Bandung"
        date="July 2022 - Present"
        contract="Contract"
      />
    </div>
  </section>
</template>
