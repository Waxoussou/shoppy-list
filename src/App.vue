<template>
    <div id="app">
        <v-app>
            <v-main>
                <v-container fluid style="height: 100%">
                    <router-view></router-view>
                </v-container>
            </v-main>

            <v-footer app> </v-footer>
            <v-bottom-sheet v-model="dialog">
                <v-sheet class="text-center" height="200px">
                    <v-btn
                        class="mt-6"
                        text
                        color="red"
                        @click="dialog = !dialog"
                    >
                        close
                    </v-btn>
                    <div class="py-3">
                        <v-form>
                            <v-container>
                                <v-row>
                                    <v-col cols="6">
                                        <v-text-field v-model="quantity" />
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>
                    </div>
                </v-sheet>
            </v-bottom-sheet>

            <!-- <v-dialog
                v-model="dialog"
                transition="dialog-bottom-transition"
                fullscreen
                hide-overlay
            >
                <v-card>
                    <v-card-content>
                        {{ select }}
                    </v-card-content>
                </v-card>
            </v-dialog> -->
        </v-app>
    </div>
</template>

<script>
export default {
    data() {
        return { dialog: false, quantity: 1 };
    },
    computed: {
        select() {
            return this.$store.state.selection.currentSelection;
        },
    },
    watch: {
        select() {
            this.dialog = !this.dialog;
        },
    },
};
</script>

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
