<template>
    <div id="app">
        <v-app>
            <v-main>
                <v-container fluid style="height: 100%">
                    <router-view></router-view>
                </v-container>
            </v-main>

            <v-footer app> </v-footer>
        </v-app>
    </div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    // min-height: 100vh;
}

#nav {
    padding: 30px;
}
#nav a {
    font-weight: bold;
    color: #2c3e50;
}
#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
