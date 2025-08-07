import { ref } from 'vue'
import {useGameStore} from "@/stores/index.js";
import {SCREEN_ENUMS, useViewSettings} from "@/composables/useViewSettings.js";

const horseRefs = ref([])

export const useRaceController = () => {
    const store = useGameStore();
    const running = ref(false);
    const { setScreenView } = useViewSettings();
    const register = (el, index) => {
        horseRefs.value[index] = el
    }

    const start = async () => {
        return Promise.all(horseRefs.value.map(h => h?.runHorse()))
    }

    const startRace = async () => {
        running.value = true;
        const promises = await start();
        const results = await Promise.all(promises);
        store.schedule[store.currentRound].participants = store.schedule[store.currentRound].participants.map((horse, idx) => ({
            ...horse,
            result: results[idx],
        }));
        setTimeout(() => {
            store.currentRound++;
            running.value = false;
            if (store.isGameEnded) {
                setScreenView(SCREEN_ENUMS.RESULTS)
            }
        }, 1000)
    }

    return { horseRefs, running, register, start, startRace }
}
