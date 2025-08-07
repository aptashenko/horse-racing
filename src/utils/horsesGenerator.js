
export function generateHorses(quantity, colors) {
    return Array.from({ length: quantity }, (_, i) => ({
        id: i + 1,
        name: `Horse ${i + 1}`,
        color: colors[i],
        condition: Math.floor(Math.random() * 100) + 1,
    }));
}
