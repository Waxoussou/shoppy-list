<template>
    <v-card v-if="items.length">
        <v-list>
            <!-- v-for="(category, index) in categories" :key="index" -->
            <!-- <v-subheader>{{ category }}</v-subheader> -->
            <v-list-item v-for="(item, index) in items" :key="index">
                <Item :item="item" />
            </v-list-item>
            <v-divider></v-divider>
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
            return this.$store.getters["selection/byCategory"];
        },
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