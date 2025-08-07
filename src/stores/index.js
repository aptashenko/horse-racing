import { defineStore } from 'pinia';
import {computed, ref} from "vue";
import {generateHorses} from "@/utils/horsesGenerator.js";
import {generateSchedule} from "@/utils/scheduleGenerator.js";
import {HORSES_COLORS} from "@/common/constants/colors.js";

export const useGameStore = defineStore('gameStore', () => {
  const horses = ref([]);
  const schedule = ref([]);
  const currentRound = ref(0);

  const isGameEnded = computed(() => (currentRound.value === schedule.value.length) && schedule.value.length !== 0)

  const generateNewHorses = () => {
    horses.value = generateHorses(HORSES_COLORS.length, HORSES_COLORS);
  }

  const generateNewSchedule = () => {
    schedule.value = generateSchedule(horses.value)
    currentRound.value = 0;
  }

  return {
    horses,
    schedule,
    currentRound,
    isGameEnded,
    generateNewHorses,
    generateNewSchedule,
  }
})
