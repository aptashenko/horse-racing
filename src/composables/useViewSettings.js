import {computed, defineAsyncComponent, ref} from "vue";

export const SCREEN_ENUMS = {
    RESULTS: 'results',
    SETTINGS: 'settings',
    LIST: 'horsesList',
    GAME: 'game'
}

const screens = {
    settings: defineAsyncComponent(() => import('../components/screens/GameSettings.vue')),
    game: defineAsyncComponent(() => import('../components/screens/TheGame.vue')),
    horsesList: defineAsyncComponent(() => import('../components/screens/HorsesList.vue')),
    results: defineAsyncComponent(() => import('../components/screens/ResultsPage.vue'))
}

const sideBarOpened = ref(true);
const currentScreen = ref(SCREEN_ENUMS.SETTINGS);

export function useViewSettings() {

    const screenView = computed(() => screens[currentScreen.value])

    const toggleSideBar = () => {
        sideBarOpened.value = !sideBarOpened.value;
    }

    const setScreenView = (screen) => {
        currentScreen.value = screen;
        console.log(currentScreen.value)
    }

    return {
        toggleSideBar,
        sideBarOpened,
        screenView,
        setScreenView
    }
}
