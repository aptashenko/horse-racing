<script setup>
defineProps({
  index: Number,
  disabled: Boolean,
})
const model = defineModel();
</script>

<template>
  <label
      class="round-label"
      :class="{disabled}"
  >
    <input
        type="radio"
        name="round"
        :value="index"
        :disabled="disabled"
        v-model="model"
    />
    Lap {{ index + 1 }}
  </label>
</template>

<style scoped>

.round-label {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
}

.round-label.disabled {
  cursor: not-allowed;
  opacity: 0.3;
}
</style>
