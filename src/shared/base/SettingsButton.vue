<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
  disabled?: boolean;
}>();
</script>

<template>
  <button :disabled="disabled" :class="['card', { disabled }]">
    <div class="img-wrapper">
      <slot />
    </div>
    <h2 class="card-title">
      {{title}}
    </h2>
  </button>
</template>

<style scoped>
.card {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.img-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(229, 231, 235, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.card-title {
  position: absolute;
  top: 100%;
  text-wrap: nowrap;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

.card.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}
</style>
