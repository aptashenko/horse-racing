import {DISTANCES} from "@/common/constants/distances.js";

function shuffle(array) {
    return array
        .map((item) => ({ item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ item }) => item)
        .slice(0, 10)
}

export function generateSchedule(horses) {
    if (horses.length < 10) {
        throw new Error("minimum 10 horses needed");
    }

    return DISTANCES.map((distance, index) => {
        return {
            round: index + 1,
            distance,
            participants: shuffle(horses)
        }
    })
}
