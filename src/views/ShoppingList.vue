<template>
    <v-container style="height: 100%">
        <v-row justify="center">
            <ItemList />
        </v-row>
        <v-row align="end" class="searchBar">
            <ItemSearchBar />
        </v-row>
    </v-container>
</template>

<script>
import ItemSearchBar from "@/components/ItemSearchBar.vue";
import ItemList from "@/components/ItemList.vue";

export default {
    name: "ShoppingList",
    components: { ItemList, ItemSearchBar },
    data() {
        return {};
    },
};
</script>

<style  scoped>
.searchBar {
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
}
</style>