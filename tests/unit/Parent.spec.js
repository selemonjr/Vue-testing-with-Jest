import {mount} from "@vue/test-utils";
import Parent from "@/components/Parent.vue";
describe("Parent.vue", () => {
    it("testing shallowMount", () => { // mount tests all the components found in the main component
        const wrapper = mount(Parent); // ShallowMount tests the main component and not the components imported in the main component
        expect(wrapper.text()).toContain("Parent")
        // In our case "Parent" string while be present in the Child component and the test will pass when we use mount.
        // In shallowMount the test will fail because the "Parent" string is not in the Parent component
    })

})