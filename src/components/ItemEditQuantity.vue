<template>
    <v-bottom-sheet v-model="dialog">
        <v-sheet class="text-center" height="200px">
            <v-btn
                class="mt-6"
                text
                color="red"
                @click="$store.commit('selection/select', null)"
            >
                close
            </v-btn>
            <div class="py-3">
                <v-form>
                    <v-container>
                        <v-row justify="center" align="center" no-gutters>
                            <v-col cols="2">Qt :</v-col>
                            <v-col cols="3">
                                <v-text-field
                                    type="number"
                                    v-model="quantity"
                                />
                            </v-col>
                            <v-col cols="2">
                                <v-btn @click="updateQuantity" fab small
                                    ><v-icon>mdi-update</v-icon></v-btn
                                >
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </div>
        </v-sheet>
    </v-bottom-sheet>
</template>

<script>
export default {
    data() {
        return { dialog: false, quantity: null };
    },

    computed: {
        select() {
            return this.$store.state.selection.currentSelection;
        },
    },

    methods: {
        updateQuantity() {
            this.$store.commit("selection/updateItem", {
                ...this.select,
                quantity: this.quantity,
            });
            this.$store.commit("selection/select", null);
        },
    },

    watch: {
        select() {
            this.quantity = (this.select && this.select.quantity) || null;
            this.dialog = !!this.select;
        },
    },
};
</script>

<style>
</style>