<script setup>
import { computed } from 'vue'
import { useHorseRunner } from '@/composables/useHorseRunner'

const props = defineProps({
  condition: Number,
  color: String
})

const { position, run } = useHorseRunner(props.condition)

defineExpose({
  runHorse: run
})

const horseStyle = computed(() => ({
  left: `${position.value}%`,
  background: props.color || 'black'
}))
</script>

<template>
  <div class="horse" :style="horseStyle">
    <span>🐎</span>
  </div>
</template>

<style scoped>
.horse {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%) rotateY(180deg);
  transition: none;
  white-space: nowrap;
  font-weight: bold;
  font-size: 18px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.horse::after {
  content: '';
  width: 25px;
  height: 25px;
  background: #fff;
  position: absolute;
  border-radius: 50%;
  z-index: -1;
}
</style>
