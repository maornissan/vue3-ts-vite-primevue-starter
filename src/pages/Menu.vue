<template>
  <div class="card">
    <div class="flex card-container indigo-container">
      <div class="flex-1 h-4rem p-4 border-round">
        <Breadcrumb class="text-white" :home="home" :model="items" />
      </div>
      <div class="flex-1 h-4rem p-4 border-round mx-4">2</div>
      <div class="flex-1 h-4rem p-4 border-round">3</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const home = ref({
  icon: "pi pi-home",
  to: "/",
});
const items = ref([
  { label: "Computer" },
  { label: "Notebook" },
  { label: "Accessories" },
  { label: "Backpacks" },
  { label: "Item" },
]);
</script>

<style></style>
