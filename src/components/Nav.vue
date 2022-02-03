<template>
    <div>
        <nav>
            <a href="#" id="home">Home</a>
                <a href="#" id="profile" v-if="isLoggedIn">Profile</a>
        </nav>
    </div>
</template>
<script>
export default {
    name:"Nav",
    data() {
        return {
            isLoggedIn:false,
        }
    }
}
</script>