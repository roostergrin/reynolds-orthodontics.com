import { mount } from '@vue/test-utils'
import CustomSection from './custom-section.vue'

describe('CustomSection', () => {
  const wrapper = mount(CustomSection)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance(CustomSection))
  })

  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
})
