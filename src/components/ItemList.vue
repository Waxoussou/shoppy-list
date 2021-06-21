<template>
    <v-card v-if="items.length">
        <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
                <v-container>
                    <v-row>
                        <v-list-item-action-text>
                            X {{ item.quantity || 1 }}
                        </v-list-item-action-text>
                        <v-list-item-content>
                            {{ item.name || item }}
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-row>
                                <v-btn
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
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {
    computed: {
        items() {
            return this.$store.state.selection.items;
        },
    },
    methods: {
        isLastItem(item) {
            const len = this.items.length;
            const index = this.items.indexOf(item);
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

<style scoped>
.v-card {
    width: 80%;
}
</style>