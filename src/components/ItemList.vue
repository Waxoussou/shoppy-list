<template>
    <v-list>
        <v-list-item v-for="(item, index) in itemList" :key="index">
            {{ item }}
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    computed: {
        itemList() {
            return this.$store.state.selection.items;
        },
    },
};
</script>

<style>
</style>