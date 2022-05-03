<template>
  <div>
    <Accordion :activeIndex="index">
      <accordion-tab :key="1">test</accordion-tab>
      <accordion-tab :key="2">best</accordion-tab>
    </Accordion>
    <div class="card">
      <div
        class="flex flex-wrap align-items-center justify-content-center card-container blue-container"
      >
        <div
          class="transition-colors transition-duration-500 bg-blue-500 hover:bg-yellow-500 text-black hover:text-white flex align-items-center justify-content-center font-bold border-round cursor-pointer m-2 px-5 py-3"
        >
          Hover me
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";

const index = ref(1);
</script>

<style></style>
