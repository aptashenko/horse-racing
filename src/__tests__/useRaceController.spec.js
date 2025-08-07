import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useRaceController } from '@/composables/useRaceController'

vi.mock('@/stores/index.js', () => ({
    useGameStore: () => ({
        schedule: [
            { participants: Array(10).fill({}).map((_, i) => ({ id: i })) }
        ],
        currentRound: 0,
        isGameEnded: false
    })
}))

const setScreenViewMock = vi.fn()

vi.mock('@/composables/useViewSettings.js', () => ({
    SCREEN_ENUMS: { RESULTS: 'RESULTS' },
    useViewSettings: () => ({
        setScreenView: setScreenViewMock
    })
}))

describe('useRaceController', () => {
    let controller

    beforeEach(() => {
        vi.useFakeTimers();
        controller = useRaceController()
        controller.horseRefs.value = Array(10).fill(null).map((_, i) => ({
            runHorse: vi.fn().mockResolvedValue(i * 10)
        }))
    })

    it('registers horse element correctly', () => {
        const mockEl = { runHorse: vi.fn() }
        controller.register(mockEl, 2)
        expect(controller.horseRefs.value[2]).toStrictEqual(mockEl)
    })

    it('calls runHorse on all registered horses', async () => {
        await controller.start()
        controller.horseRefs.value.forEach(horse => {
            expect(horse.runHorse).toHaveBeenCalled()
        })
    })

    it('startRace updates participants and handles end of game', async () => {
        await controller.startRace()
        vi.runAllTimers()
        expect(setScreenViewMock).not.toHaveBeenCalled()
        expect(controller.running.value).toBe(false)
    })
})
