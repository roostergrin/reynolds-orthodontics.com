import { shallowMount } from '@vue/test-utils'
import Tech from '@/components/custom/custom-treatments-tech/custom-treatments-tech'

const mount = (content) => shallowMount(Tech, { propsData: { content } })

describe('custom-treatments-tech', () => {
  it('renders a payload shaped exactly as the ACF group returns it', () => {
    // mirrors acf/treatments-technology.json: icon is a URL field, so a string,
    // and the columns select returns its value as a string
    const w = mount({
      title: 'Technology',
      intro: 'Tools we use to plan your treatment more precisely.',
      columns: '3',
      items: [
        { icon: 'https://cdn.example.com/airway.png', title: 'Airway Assessment', body: 'copy one' },
        { icon: 'https://cdn.example.com/dm.png', title: 'Dental Monitoring', body: 'copy two' },
        { icon: 'https://cdn.example.com/itero.png', title: 'iTero Digital Scanning', body: 'copy three' }
      ]
    })
    expect(w.findAll('.custom-treatments-tech__tile')).toHaveLength(3)
    expect(w.find('.custom-treatments-tech__title').text()).toBe('Technology')
    expect(w.findAll('.custom-treatments-tech__icon-img').at(0).attributes('src'))
      .toBe('https://cdn.example.com/airway.png')
    expect(w.find('.custom-treatments-tech__grid').classes())
      .toContain('custom-treatments-tech__grid--3')
  })

  it('hides the intro when the optional field is left blank', () => {
    // the ACF instructions tell editors to clear intro to hide it, so a blank
    // value must not take any other field down with it
    const w = mount({ title: 'Technology', intro: '', items: [{ title: 'A', body: 'b' }] })
    expect(w.find('.custom-treatments-tech__intro').exists()).toBe(false)
    expect(w.find('.custom-treatments-tech__title').exists()).toBe(true)
    expect(w.findAll('.custom-treatments-tech__tile')).toHaveLength(1)
  })

  it('renders a tile with no icon rather than an empty image', () => {
    const w = mount({ title: 'T', items: [{ title: 'A', body: 'b' }] })
    expect(w.find('.custom-treatments-tech__icon').exists()).toBe(false)
    expect(w.findAll('.custom-treatments-tech__tile')).toHaveLength(1)
  })

  it('collapses the whole section when there is nothing to show', () => {
    expect(mount({}).element.innerHTML).toBeFalsy()
    expect(mount({ items: [] }).element.innerHTML).toBeFalsy()
    expect(mount(undefined).element.innerHTML).toBeFalsy()
  })

  it('honours the ACF column choice, defaulting to 3', () => {
    expect(mount({}).vm.columns).toBe(3)
    expect(mount({ columns: '4' }).vm.columns).toBe(4)
    expect(mount({ columns: 4 }).vm.columns).toBe(4)
    expect(mount({ columns: '3' }).vm.columns).toBe(3)
    expect(mount({ columns: 'nonsense' }).vm.columns).toBe(3)
  })
})
