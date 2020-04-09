import { shallowMount } from '@vue/test-utils'
// @ts-ignore
import modal from '../../src/components/Modal.vue'

describe('Modal.vue', () => {
  it("the modal will be closed by default", () => {

    const wrapper = shallowMount(modal, {
      propsData: {
        open: false
      }
    })

    expect(wrapper.vm.$refs.modalDialog).toBeFalsy()


  })
  it("the modal can be opened when setting prop open", () => {

    const wrapper = shallowMount(modal, {
      propsData: {
        open: true
      }
    })

    expect(wrapper.vm.$refs.modalDialog).toBeTruthy()

  })
  // it("the modal can be opened when setting prop open", () => {
  //   let props = {
  //     open: true
  //   }
  //   const wrapper = shallowMount(modal, {
  //     propsData: {
  //       ...props
  //     }
  //   })
  //   wrapper.vm.$on("close", () => {
  //     props.open = false
  //   });

  //   wrapper.vm.$refs.modalDialog
  //   expect(wrapper.vm.$refs.modalDialog).toBeTruthy()
  //   wrapper.vm.$emit("close")
  //   wrapper.vm.$nextTick(() => {
  //     expect(wrapper.vm.$refs.modalDialog).toBeFalsy()
  //   })
  // })
})
