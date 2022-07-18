<script setup>
import Experience from "../Molecules/Experience.vue";
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
      <h1 class="text-primary font-bold dark:text-primaryDark text-5xl">
        About Me
      </h1>
      <p class="font-medium text-xl max-w-[800px]">
        Hello, I am a Front-End Developer who has experience using React Js,
        Tailwind CSS, Git, and Github. I can use other frameworks like next and
        vue although not as expert as react, i'm currently studying Back-End
        development using node js, express js, and also mongodb. I am looking
        for opportunity to be able to work as Front-End Developer at a
        collaborative company
      </p>
    </div>
    <div
      data-aos="fade-left"
      data-aos-delay="4000"
      class="flex gap-9 flex-col items-center"
    >
      <h1 class="text-primary font-bold dark:text-primaryDark text-5xl">
        Work Experience
      </h1>
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
