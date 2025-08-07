import { describe, it, expect } from 'vitest'
import {generateSchedule} from "@/utils/scheduleGenerator.js";
import {DISTANCES} from "@/common/constants/distances.js";

describe('scheduleGenerate', () => {
  const mockHorses = [
    'horse1', 'horse2', 'horse3', 'horse4', 'horse5',
    'horse6', 'horse7', 'horse8', 'horse9', 'horse10',
    'horse11', 'horse12', 'horse13', 'horse14', 'horse15',
    'horse16', 'horse17', 'horse18', 'horse19', 'horse20'
  ];

  const numberOfLaps = DISTANCES.length;
  it(`should return array with length equal to ${numberOfLaps} laps`, () => {
    const laps = generateSchedule(mockHorses)
    expect(laps).toHaveLength(numberOfLaps)
  })

  it('should return minimum 10 participants per lap', () => {
    const laps = generateSchedule(mockHorses)
    laps.forEach(lap => {
      expect(lap.participants.length).toBe(10)
    })
  })

  it('each round should have correct distance', () => {
    const schedule = generateSchedule(mockHorses)
    schedule.forEach((round, i) => {
      expect(round.distance).toBe(DISTANCES[i])
    })
  })

  it('each lap should have unique participants', () => {
    const laps = generateSchedule(mockHorses)
    laps.forEach(lap => {
      const set = new Set(lap.participants)
      expect(set.size).toBe(lap.participants.length)
    })
  })
})
