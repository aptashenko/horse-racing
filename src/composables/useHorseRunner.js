import { ref } from 'vue'

export function useHorseRunner(condition = 50) {
    const position = ref(0)
    const speed = ref(condition / 1000)
    let animationFrameId = null
    let resolveFinish = null
    let startTime = 0

    const run = () => {
        return new Promise((resolve) => {
            resolveFinish = resolve
            speed.value = condition / 1000
            position.value = 0
            cancelAnimationFrame(animationFrameId)
            startTime = 0
            animationFrameId = requestAnimationFrame(animate)
        })
    }

    const animate = (timestamp) => {
        if (!startTime) startTime = timestamp

        position.value += speed.value

        if (position.value < 98) {
            animationFrameId = requestAnimationFrame(animate)
        } else {
            position.value = 98
            cancelAnimationFrame(animationFrameId)
            const finishTime = performance.now()
            const elapsed = (finishTime - startTime) / 1000
            startTime = 0
            if (resolveFinish) resolveFinish(elapsed.toFixed(2))
        }
    }

    return {
        position,
        run
    }
}
