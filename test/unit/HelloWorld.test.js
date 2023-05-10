import { describe, expect, test } from 'vitest'
import HelloWorld from '@/components/HelloWorld.vue'
import { mount } from '@vue/test-utils'

describe('HelloWorld.vue', () => {
  test('debería representar el título correctamente', () => {
    const msg = 'You’ve successfully created a project with'

    const wrapper = mount(HelloWorld, {
      props: {
        msg,
      },
    })

    const h1 = wrapper.get('h1')
    expect(h1.text()).toBe(msg)
  })
})
