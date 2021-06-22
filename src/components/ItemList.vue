<template>
    <v-card v-if="items.length">
        <v-list dense>
            <v-list-group
                v-for="(category, index) of itemsByCategory"
                :key="index"
                multiple
                no-action
            >
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title
                            v-text="category.name"
                        ></v-list-item-title>
                    </v-list-item-content>
                </template>
                <v-list-item
                    v-for="(item, index) in category.values"
                    :key="index"
                >
                    <Item :item="item" />
                </v-list-item>
                <!-- <v-divider></v-divider> -->
            </v-list-group>
        </v-list>
    </v-card>
    <v-row v-else justify="center" align="center" style="min-height: 500px">
        <v-spacer></v-spacer>
        <v-col cols="12">
            <p>No product recorded yet.</p>
            <p>Start adding one</p>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</template>

<script>
import Category from "@/services/Category";
import Item from "./Item.vue";
export default {
    components: {
        Item,
    },
    data() {
        return { categories: [] };
    },

    computed: {
        items() {
            return this.$store.state.selection.items;
        },
        itemsByCategory() {
            // return [
            //     { name: "other", values: ["value1", "value2"] },
            //     { name: "fruits & légume", values: ["banane", "orange"] },
            // ];
            return this.$store.getters["selection/byCategory"];
        },
        // categories() {
        //     return [...Object.keys(this.itemsByCategory)];
        // },
    },

    async created() {
        await Category.fetchData();
        this.categories = Category.getCategories();
    },
};
</script>

<style scoped>
.v-card {
    width: 80%;
}
</style>