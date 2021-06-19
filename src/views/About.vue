<template>
    <!-- <v-app> -->
    <v-row justify="center">
        <v-col cols="8">
            <v-autocomplete
                v-model="select"
                :items="items"
                solo
                rounded
                clearable
                @change="updateCurrentValue"
            >
                <template v-slot:no-data>
                    <v-list-item class="d-flex flex-column space-around">
                        <v-list-item-title> No result </v-list-item-title>
                        <v-list-item-content>
                            <v-btn color="primary"> Add a new Item</v-btn>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-autocomplete>
        </v-col>
    </v-row>
    <!-- </v-app> -->
    <!-- </v-container> -->
    <!-- </v-card> -->
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            select: null,
            items: ["tomatoes", "oranges", "yaourt", "lait"],
        };
    },
    methods: {
        updateCurrentValue(e) {
            console.log(e);
        },
    },
};
</script>
