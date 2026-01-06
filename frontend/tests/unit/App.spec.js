import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'


describe('App.vue', () => {
it('renders content', () => {
const wrapper = mount(App)
expect(wrapper.html()).toContain('<div')
})
})
