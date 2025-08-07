<script setup>
import { useGameStore } from "@/stores/index.js";
import { storeToRefs } from "pinia";
import HorseCard from '@/components/HorseCard.vue'

const store = useGameStore();
const { horses } = storeToRefs(store);
</script>

<template>
  <div class="horses-list">
    <h2>Horses List</h2>
    <div class="horse-container">
      <HorseCard
          v-for="horse in horses"
          :key="horse.id"
          :horse="horse"
      />
    </div>
  </div>
</template>

<style scoped>
.horses-list {
  width: 90%;
  padding: 1rem;
  margin: 0 auto;
}

.horse-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

@media (max-width: 480px) {
  .horse-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
