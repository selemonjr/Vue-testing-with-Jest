import {mount} from "@vue/test-utils";
import Nav from "@/components/Nav.vue";
import { isVoidTag } from "@vue/shared";

describe("Nav.vue", () => {
    it("profile should only render when the user is logged in", () => {
        const wrapper = mount(Nav, {
            data() {
                return {
                    isLoggedIn:true,
                }
            }
        });
        const profileLink = wrapper.get("#profile");
        expect(profileLink.text()).toEqual("Profile")
    });

    it("profile exists ??", () => {
        const wrapper = mount(Nav, {
            data() {
                return {
                    isLoggedIn:false,
                }
            }
        });
        const profileLink = wrapper.find("#profile"); // we can also get elements by using their id and class
        expect(profileLink.exists()).toBe(false)
    });


})