import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'

describe('LoginForm.vue', () => {
  it('emits an event whith a user data payload', () => {
    const wrapper = mount(LoginForm)
    // 1. Find text input
    const input = wrapper.find('input[type="text"]') // => bad
    // const input = wrapper.find('[data-testid="name-input"]') // => correct

    // 2. Set value for text input
    input.setValue('Rafael Sales')

    // 3. Simulate form subimission
    wrapper.trigger('submit')

    // 4. Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    // 5. Assert payload is correct
    const expectedPayload = { name: 'Rafael Sales' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
      expectedPayload
    )
  })
})
