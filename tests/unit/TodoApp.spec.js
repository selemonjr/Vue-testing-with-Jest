import {mount} from "@vue/test-utils";
import TodoApp from "@/components/TodoApp.vue";

describe("TodoApp.vue", () => {
    let wrapper;
    beforeEach(() => { // to reduce the redundancy of our code
        wrapper = mount(TodoApp);
    });
    it("should render todo text", () => {
        const todo = wrapper.get('[data-test="todo"]')
        expect(todo.text()).toBe("Go to the doctor")
    });
    it("should add a new todo", async() => {
        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);
       await wrapper.get('[data-test="new-todo"]').setValue("newTodo"); // Add a new todo
        await wrapper.get('[data-test="form"]').trigger('submit'); // triggering the button
        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
    });

    it("should be able to complete a todo" , async () => {
        await wrapper.get('[data-test ="todo-checkbox"]').setValue(true);
        expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed') // contain the class of 'completed'
    })
})