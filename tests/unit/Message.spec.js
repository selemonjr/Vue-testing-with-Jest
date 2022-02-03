import {mount} from "@vue/test-utils";
import Message from "@/components/Message.vue";

describe("Message.vue", () => {
    it("renders the prop.msg when passed", () => {
        const wrapper = mount(Message, {
            props: {
                msg:"Hello there"
            }
        });

        expect(wrapper.text()).toContain("Hello there") // Checks if the prop renders in the component
    })
})