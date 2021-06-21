<template>
    <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Add new item
            </v-btn>
        </template>

        <ItemCreationForm @close-modal="dialog = false" />
    </v-dialog>
</template>

<script>
import ItemCreationForm from "./ItemCreationForm.vue";
export default {
    components: { ItemCreationForm },
    data() {
        return { dialog: false };
    },
};
</script>

<style>
</style>