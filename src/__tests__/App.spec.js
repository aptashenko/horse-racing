import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

import { createPinia, setActivePinia } from 'pinia'

describe('App.vue', () => {
  it('mounts renders properly', () => {
    const pinia = createPinia()
    setActivePinia(pinia)

    const wrapper = mount(App, {
      global: {
        plugins: [pinia],
      },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
