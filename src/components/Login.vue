<template>
    <div class="container">
        <form class="login-form">
            <input
                type="text"
                placeholder="username"
                id="username"
                autocomplete="username"
                @input="handleChange"
            />
            <input
                type="password"
                autocomplete="current-password"
                placeholder="password"
                id="password"
                @input="handleChange"
            />
            <el-button type="primary" @click="login">Se connecter</el-button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return { username: null, password: null };
    },
    methods: {
        handleChange({ target }) {
            console.log(target.id);
            this[target.id] = target.value;
        },
        login(e) {
            e.preventDefault();
            this.$store.commit("logIn");
            console.log(this.username, this.password);
        },
    },
};
</script>

<style scoped>
</style>