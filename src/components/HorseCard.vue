<script setup>
defineProps({
  horse: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="horse-card">
    <div class="horse-header">
      <span class="horse-color" :style="{ backgroundColor: horse.color }" />
      <strong>{{ horse.name }}</strong>
    </div>
    <div class="condition-label">Condition: {{ horse.condition }}/100</div>
    <div class="condition-bar">
      <div
          class="condition-fill"
          :style="{ width: horse.condition + '%', backgroundColor: horse.color }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.horse-card {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.horse-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
}

.horse-color {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #ccc;
}

.condition-label {
  font-size: 14px;
  color: #555;
}

.condition-bar {
  width: 100%;
  height: 10px;
  background-color: #e5e7eb;
  border-radius: 5px;
  overflow: hidden;
}

.condition-fill {
  height: 100%;
  transition: width 0.3s ease;
}
</style>
