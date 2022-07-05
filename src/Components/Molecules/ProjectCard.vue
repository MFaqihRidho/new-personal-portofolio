<script setup>
defineProps({
  title: String,
  desc: String,
});
</script>

<template>
  <div class="w-[375px] max-h-[567px]">
    <div class="w-full h-[200px] rounded-t-[20px] overflow-hidden">
      <slot name="image"></slot>
    </div>
    <div
      class="
        bg-white
        dark:bg-[#363636]
        min-h-[310px]
        py-6
        px-7
        rounded-b-[20px]
        flex flex-col
        items-center
        gap-3
      "
    >
      <div class="flex flex-col justify-center items-center gap-4 text-left">
        <h5 class="text-3xl text-black dark:text-primaryDark font-medium">
          {{ title }}
        </h5>
        <p
          class="
            text-lg
            font-light
            text-primaryDark
            leading-6
            max-h-36
            overflow-clip
          "
        >
          {{ desc }}
        </p>
      </div>
      <div class="self-start">
        <p class="text-[16px]">
          Tech Stack : <span class="text-sm font-light">Vue</span>
        </p>
        <div></div>
      </div>
    </div>
  </div>
</template>

