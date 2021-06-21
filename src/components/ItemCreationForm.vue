<template>
    <!-- <v-container>
        <v-row justify="center">
            <v-col > -->
    <v-card>
        <v-card-title> Créer un nouveau produit </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    v-model="productName"
                    label="Nom du produit"
                    outlined
                />
                <v-select
                    v-model="category"
                    :items="categories"
                    label="Categorie"
                    outlined
                ></v-select>
                <v-btn
                    :disabled="isValid"
                    color="secondary"
                    @click="createProduct"
                >
                    Add
                </v-btn>
            </v-form>
        </v-card-text>
    </v-card>
    <!-- </v-col>
        </v-row>
    </v-container> -->
</template>

<script>
import Category from "@/services/Category";
export default {
    data() {
        return {
            productName: null,
            category: null,
            categories: [],
        };
    },

    computed: {
        // categories() {
        //     return [
        //         "epicerie salée",
        //         "epicerie sucrée",
        //         "fruits & légumes",
        //         "alcool",
        //     ];
        // },
        isValid() {
            return !!this.productName && !!this.category ? false : true;
        },
    },
    async created() {
        const categories = await Category.fetchData();
        this.categories = categories;
    },

    methods: {
        createProduct() {
            const newProduct = {
                name: this.productName,
                category: this.category,
            };
            this.$store.dispatch("product/createNewProduct", newProduct);
            this.$emit("close-modal");
        },
    },
};
</script>

<style>
</style>