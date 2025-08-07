<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {useViewSettings} from "@/composables/useViewSettings.js";
import {useGameStore} from "@/stores/index.js";

const { screenView } = useViewSettings();
const { generateNewHorses } = useGameStore();

generateNewHorses();
</script>

<template>
  <default-layout>
    <component :is="screenView" />
  </default-layout>
</template>

<style scoped></style>
