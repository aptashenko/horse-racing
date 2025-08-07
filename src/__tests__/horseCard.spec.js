import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HorseCard from '@/components/HorseCard.vue';

describe('HorseCard.vue', () => {
    const mockHorse = {
        id: 1,
        name: 'Thunder',
        color: 'blue',
        condition: 85,
    }

    it('renders horse name, color and condition', () => {
        const wrapper = mount(HorseCard, {
            props: { horse: mockHorse }
        })

        expect(wrapper.text()).toContain('Thunder')
        expect(wrapper.text()).toContain('85')
        expect(wrapper.find('.horse-color').attributes('style')).toContain('blue')
    })
})
