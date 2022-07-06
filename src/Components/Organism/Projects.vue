<script setup>
import SectionTitle from "../Atoms/SectionTitle.vue";
import SectionSubTitle from "../Atoms/SectionSubTitle.vue";
import ProjectCard from "../Molecules/ProjectCard.vue";
</script>

<template>
  <section
    id="projects"
    class="w-full flex justify-center flex-col gap-24 items-center"
  >
    <div class="flex flex-col justify-center items-center gap-10">
      <SectionTitle>Projects</SectionTitle>
      <SectionSubTitle>Things I’ve built so far</SectionSubTitle>
    </div>
    <div class="grid grid-cols-3 gap-24">
      <ProjectCard
        title="Calories Counter"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere odio, amet minus soluta ut quae vel culpa beatae est quis praesentium voluptas incidunt laboriosam ipsa magni mollitia porro saepe doloremque aspernatur ex, aperiam maiores? Vitae rem recusandae neque dolore, nemo libero porro laudantium, molestias a, itaque quam harum quasi nihil!"
        stack="Vue, Tailwind"
      >
        <template #image>
          <img
            class="object-cover w-full h-full"
            src="../../Assets/Images/Project/CaloriesCounter.png"
            alt=""
          /> </template
      ></ProjectCard>
      <ProjectCard
        title="Anime Finder"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere odio, amet minus soluta ut quae vel culpa beatae est quis praesentium voluptas incidunt laboriosam ipsa magni mollitia porro saepe doloremque aspernatur ex, aperiam maiores? Vitae rem recusandae neque dolore, nemo libero porro laudantium, molestias a, itaque quam harum quasi nihil!"
        stack="React, Tailwind"
      >
        <template #image>
          <img
            class="object-cover w-full h-full"
            src="../../Assets/Images/Project/AnimeFinder.png"
            alt=""
          /> </template
      ></ProjectCard>
      <ProjectCard
        title="Movie Finder"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere odio, amet minus soluta ut quae vel culpa beatae est quis praesentium voluptas incidunt laboriosam ipsa magni mollitia porro saepe doloremque aspernatur ex, aperiam maiores? Vitae rem recusandae neque dolore, nemo libero porro laudantium, molestias a, itaque quam harum quasi nihil!"
        stack="React, Tailwind"
      >
        <template #image>
          <img
            class="object-cover w-full h-full"
            src="../../Assets/Images/Project/MovieFinder.png"
            alt=""
          /> </template
      ></ProjectCard>
    </div>
  </section>
</template>
