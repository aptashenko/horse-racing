<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import {SCREEN_ENUMS, useViewSettings} from "@/composables/useViewSettings.js";
import BaseButton from "@/shared/base/BaseButton.vue";
import {useGameStore} from "@/stores/index.js";
import {storeToRefs} from "pinia";

const { sideBarOpened, setScreenView } = useViewSettings();
const store = useGameStore();
const { horses, currentRound } = storeToRefs(store);
</script>

<template>
  <div class="layout">
    <the-header />

    <div class="main">
      <the-sidebar :class="{ collapsed: !sideBarOpened }" class="sidebar" />
      <div class="page-content">
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
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f9fafb;
}

.main {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.page-content {
  flex: 1;
  padding: 32px;
  overflow-y: auto;

  display: grid;
  place-items: center;
}

@media (max-width: 480px) {
  .page-content {
    padding: 0;
    gap: 40px;
  }
}

.sidebar {
  width: 240px;
  transition: width 0.3s ease;
  background-color: #1f2937;
  color: white;
  min-height: 100%;
}

@media (max-width: 480px) {
  .sidebar {
    display: none;
  }
}

.sidebar.collapsed {
  width: 72px;
}
.sidebar-nav {
  width: 100%;
  box-sizing: border-box;
  background-color: #1f2937;
  padding: 20px;
  display: none;
}

@media (max-width: 480px) {
  .sidebar-nav {
    display: block;
  }
}
.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.sidebar-nav li:not(:last-child) {
  margin-bottom: 12px;
}

.sidebar-nav button {
  text-decoration: none;
  color: #000;
  font-size: 16px;
  text-align: center;
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
</style>
