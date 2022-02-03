<template>
    <div>
        <Child/>
    </div>
</template>
<script>
import Child from "../components/Child.vue"
export default {
    name:"Parent",
    components: {
        Child
    }
}
</script>