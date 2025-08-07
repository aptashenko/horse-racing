<script setup>
import TheHorse from '@/components/TheHorse.vue'
import {useGameStore} from '@/stores/index.js'
import {storeToRefs} from 'pinia'
import BaseButton from "@/shared/base/BaseButton.vue";
import {useRaceController} from "@/composables/useRaceController.js";
import {computed} from "vue";
import LapTab from "@/components/LapTab.vue";

const store = useGameStore();
const {schedule, currentRound, isGameEnded} = storeToRefs(store);

const { register, horseRefs, startRace, running } = useRaceController();
register();

const disableStart = computed(() => isGameEnded.value || running.value)
</script>

<template>
  <div class="round-selector">
    <lap-tab
        v-for="(round, i) in schedule"
        :index="i"
        :key="i"
        v-model="currentRound"
        :disabled="currentRound !== i"
    />
  </div>
  <div class="race-track">
    <base-button type="primary" :disabled="disableStart" @click="startRace">Start Race!</base-button>
    <div
        class="track-line"
        v-for="(horse, i) in schedule[currentRound]?.participants"
        :key="currentRound"
    >
      <TheHorse
          ref="horseRefs"
          :condition="horse.condition"
          :color="horse.color"
      />
    </div>
  </div>
</template>

<style scoped>
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

.race-track {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: 12px;
  overflow: hidden;
  height: 600px;
  width: 100%;
  box-sizing: border-box;
}

@media (max-width: 480px) {
  .race-track {
    padding: 0 20px;
  }
}

.track-line {
  position: relative;
  height: 40px;
  background: #55884f;
  border: 1px dashed #ccc;
  border-radius: 4px;
}
.track-line::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 6px;
  height: 100%;
  background: repeating-linear-gradient(
      to bottom,
      white 0,
      white 5px,
      black 5px,
      black 10px
  );
}
</style>
