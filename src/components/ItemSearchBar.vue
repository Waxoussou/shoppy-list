<template>
    <v-row justify="center" no-gutters>
        <v-col cols="7" align-self="center">
            <v-autocomplete
                v-model="select"
                :items="items"
                clearable
                solo
                hide-selected
                @keyup="updateCurrentValue"
            >
                <template v-slot:no-data>
                    <v-list-item class="d-flex flex-column space-around">
                        <v-list-item-title> No result </v-list-item-title>
                        <v-list-item-content>
                            <ItemCreationModal />

                            <!-- <v-btn
                                @click="$emit('open-dialog')"
                                color="primary"
                            >
                                Add a new Item</v-btn
                            > -->
                        </v-list-item-content>
                    </v-list-item>
                </template>
                <!-- <template v-slot:append-outer>
                    <v-btn fab color="primary">Add</v-btn>
                </template> -->
            </v-autocomplete>
        </v-col>

        <v-col cols="1">
            <v-btn
                :disabled="!select"
                @click="addItemToSelection"
                fab
                color="success"
                ><v-icon> mdi-plus </v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
import { ItemCreationModal } from "@/components";
export default {
    name: "ItemSearchBar",
    components: { ItemCreationModal },
    data() {
        return {
            select: null,
        };
    },

    computed: {
        items() {
            return this.$store.getters["product/byName"];
        },
    },

    methods: {
        updateCurrentValue(e) {
            console.log(e.target.value);
            return e.target.value;
        },
        addItemToSelection() {
            this.$store.commit("selection/addItem", { name: this.select });
        },
    },
};
</script>

<style>
</style>