<script setup>
import { useGameStore } from '@/stores/index.js'
import { storeToRefs } from 'pinia'
import {ref} from "vue";
import LapTab from "@/components/LapTab.vue";

const store = useGameStore()
const { schedule, currentRound } = storeToRefs(store);
const openedLap = ref(0);
</script>

<template>
  <div class="round-selector">
    <lap-tab
        v-for="(round, i) in schedule"
        :index="i"
        :key="i"
        v-model="openedLap"
        :disabled="currentRound <= i"
    />
  </div>

  <div class="results" v-if="schedule[openedLap]">
    <h3>Results: Lap {{ openedLap + 1 }} ({{ schedule[openedLap].distance }}m)</h3>
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Horse</th>
        <th>Color</th>
        <th>Condition</th>
        <th>Result</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="(horse, i) in schedule[openedLap].participants"
          :key="horse.id"
      >
        <td>
          {{ i + 1 }}
          <span v-if="i === 0">🥇</span>
          <span v-if="i === 1">🥈</span>
          <span v-if="i === 2">🥉</span>
        </td>
        <td>
          {{ horse.name }}
        </td>
        <td>
            <span
                class="color-indicator"
                :style="{ backgroundColor: horse.color }"
            ></span>
          {{ horse.color }}
        </td>
        <td>{{ horse.condition }}</td>
        <td>{{ horse.result }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.round-selector {
  display: flex;
  gap: 12px;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.round-selector {
  display: flex;
  gap: 12px;
  margin: 1rem 0;
  flex-wrap: wrap;
  box-sizing: border-box;
}

@media (max-width: 480px) {
  .round-selector {
    padding: 0 20px;
  }
}

.round-label input[type="radio"] {
  accent-color: #2e7d32;
}

.results {
  background: #fff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  overflow-x: auto;
  width: 100%;
  box-sizing: border-box;
}

@media (max-width: 480px) {
  .results {
    margin-top: 150px;
    padding: 0 20px;
  }
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: #f0f0f0;
}


th, td {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

@media (max-width: 480px) {
  th, td {
    font-size: 11px;
  }
}

.color-indicator {
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 6px;
  border: 1px solid #888;
  vertical-align: middle;
}
</style>
