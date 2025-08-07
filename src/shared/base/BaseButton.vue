<script setup>
defineProps({
  type: String
})
</script>

<template>
  <button class="base-button" :class="[type]">
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease, opacity 0.2s ease;
}

.base-button.primary {
  background-color: #2563eb;
  color: white;
}

.base-button.primary:hover {
  background-color: #1d4ed8;
}

.base-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    color: #fff;
}
</style>
