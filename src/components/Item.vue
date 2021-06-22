<template>
    <v-container>
        <v-row>
            <v-list-item-action-text>
                X {{ item.quantity || 1 }}
            </v-list-item-action-text>

            <v-list-item-content class="ml-3">
                {{ item.name || item }}
            </v-list-item-content>

            <v-list-item-action>
                <v-row>
                    <v-btn
                        x-small
                        @click="openUpdateItemModal(item)"
                        color="primary"
                        fab
                        icon
                    >
                        <v-icon> mdi-pencil </v-icon>
                    </v-btn>
                    <v-btn
                        @click="removeItem(item)"
                        color="success"
                        icon
                        fab
                        x-small
                    >
                        <v-icon>mdi-check</v-icon>
                    </v-btn>
                </v-row>
            </v-list-item-action>
        </v-row>
        <v-row v-if="!isLastItem(item)">
            <v-col cols="12">
                <v-divider></v-divider>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: {
        item: { type: Object, required: true },
    },
    methods: {
        isLastItem(item) {
            const items = this.$store.state.selection.items;
            const len = items.length;
            const index = items.indexOf(item);
            return index + 1 === len;
        },

        openUpdateItemModal(item) {
            this.$store.commit("selection/select", item);
        },

        removeItem(item) {
            this.$store.commit("selection/removeItem", item);
        },
    },
};
</script>

<style>
</style>