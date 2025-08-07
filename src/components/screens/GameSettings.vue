<script setup>
import SettingsButton from "@/shared/base/SettingsButton.vue";
import {useGameStore} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {SCREEN_ENUMS, useViewSettings} from "@/composables/useViewSettings.js";
const store = useGameStore();
const { horses, schedule, isGameEnded } = storeToRefs(store);
const { setScreenView } = useViewSettings();

const startRace = () => {
  if (isGameEnded.value) {
    store.generateNewSchedule()
  }
  setScreenView(SCREEN_ENUMS.GAME)
}
</script>

<template>
  <div class="game-settings">
    <h2 class="game-settings-title">First generate schedule, then start the game</h2>
    <div class="play-panel">
      <settings-button
          :disabled="!horses.length"
          :title="schedule.length ? 'Regenerate schedule' : 'Generate schedule'"
          @click="store.generateNewSchedule"
      >
        <img src="@/assets/images/img2.png" style="display: block; width: 100%; height: 100%" />
      </settings-button>
      <settings-button
          :title="isGameEnded ? 'Restart race!' : 'Start Race!'"
          :disabled="!horses.length || !schedule.length"
          @click="startRace"
      >
        <img src="@/assets/images/img1.png" style="display: block; width: 100%; height: 100%" />
      </settings-button>
    </div>
  </div>
</template>

<style scoped>
.game-settings-title {
  text-align: center;
  margin: 0;
}
.play-panel {
  width: 70%;
  margin: 0 auto;

  padding: 20px;

  display: flex;
  gap: 20px;
}

@media (max-width: 480px) {
  .play-panel {
    width: 50%;
    flex-direction: column;
    gap: 80px;
  }
}
</style>
