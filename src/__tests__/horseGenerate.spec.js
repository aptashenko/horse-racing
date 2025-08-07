import { describe, it, expect } from 'vitest'
import {generateHorses} from "@/utils/horsesGenerator.js";
import {HORSES_COLORS} from "@/common/constants/colors.js";

describe('horseGenerate', () => {
  const mockColors = HORSES_COLORS;
  it('should return array with length equal to colors quantity', () => {
    const horses = generateHorses(mockColors.length, mockColors)
    expect(horses).toHaveLength(mockColors.length)
  })
  it('colors should be unique', () => {
    const horses = generateHorses(mockColors.length, mockColors)
    const horsesColors  = horses.map(horse => horse.color);
    const uniqColors = new Set(horsesColors);
    expect(horsesColors.length).toBe(uniqColors.size);
  })
  it('condition must be from 1 to 100', () => {
    const horses = generateHorses(mockColors.length, mockColors)
    const horsesConditions  = horses.map(horse => horse.condition);
    horsesConditions.forEach(condition => {
      expect(condition).toBeGreaterThanOrEqual(1)
      expect(condition).toBeLessThanOrEqual(100)
    })
  })
  it('id must be uniq', () => {
    const horses = generateHorses(mockColors.length, mockColors)
    const horsesIds  = horses.map(horse => horse.id);
    const uniqIds = new Set(horsesIds)
    expect(uniqIds.size).toBe(horsesIds.length)
  })
  it('each horse should have id, name, color, condition', () => {
    const horses = generateHorses(mockColors.length, mockColors)
    horses.forEach(horse => {
      expect(horse).toHaveProperty('id')
      expect(horse).toHaveProperty('name')
      expect(horse).toHaveProperty('color')
      expect(horse).toHaveProperty('condition')
    })
  })
})
