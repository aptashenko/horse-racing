<script setup>
import BaseButton from "@/shared/base/BaseButton.vue";
import {SCREEN_ENUMS, useViewSettings} from "@/composables/useViewSettings.js";
import {useGameStore} from "@/stores/index.js";
import {storeToRefs} from "pinia";
const { sideBarOpened, toggleSideBar, setScreenView } = useViewSettings();
const store = useGameStore();
const { horses, currentRound } = storeToRefs(store);
</script>

<template>
  <aside class="sidebar">
    <h2 class="sidebar-title">Menu</h2>
    <nav class="sidebar-nav">
      <ul>
        <li>
          <base-button
              @click="setScreenView(SCREEN_ENUMS.SETTINGS)"
          >
            Main
          </base-button>
        </li>
        <li>
          <base-button
              :disabled="!horses.length"
              @click="setScreenView(SCREEN_ENUMS.LIST)"
          >
            Horses
          </base-button>
        </li>
        <li>
          <base-button
              :disabled="currentRound === 0"
              @click="setScreenView(SCREEN_ENUMS.RESULTS)"
          >
            Results
          </base-button>
        </li>
      </ul>
    </nav>
    <button class="toggle-button" @click="toggleSideBar">
      {{sideBarOpened ? '-' : '+'}}
    </button>
  </aside>
</template>

<style scoped>
.sidebar {
  position: relative;
  width: 240px;
  background-color: #1f2937;
  color: white;
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.sidebar-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav li {
  margin-bottom: 12px;
}

.sidebar-nav button {
  text-decoration: none;
  color: #000;
  font-size: 16px;
  text-align: left;
  width: 100%;
  display: block;
  padding: 8px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.sidebar-nav button:hover {
  background-color: #374151;
  color: #fff;
}

.toggle-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  background-color: #374151;
  color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: absolute;
  right: -15px;
  top: 15px;
  cursor: pointer;
  transition: all .25s ease;
}

.toggle-button:hover {
  transform: scale(1.1);
}
</style>
