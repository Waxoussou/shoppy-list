<template>
    <v-container style="height: 100%">
        <v-row justify="center">
            <ItemList />
        </v-row>
        <v-row align="end" class="searchBar">
            <ItemSearchBar @open-dialog="dialog = !dialog" />
        </v-row>
        <ItemEditQuantity />
    </v-container>
</template>

<script>
import {
    ItemSearchBar,
    ItemList,
    ItemEditQuantity,
} from "@/components";

export default {
    name: "ShoppingList",
    components: {
        ItemList,
        ItemSearchBar,
        ItemEditQuantity,
    },
    data() {
        return { dialog: false };
    },
    created() {
        this.$store.dispatch("product/_init");
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