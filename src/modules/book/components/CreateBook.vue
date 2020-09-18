<template>
    <v-form ref="main" @submit.prevent="createNewBook()">
        <v-row>
            <v-col>
                <h1 class="text-center light-blue--text text--darken-3">Registro de libros</h1>
            </v-col>   
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-text-field v-model="title" label="Título del libro"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field v-model="description" label="Descripción del libro"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-text-field v-model="quantity" label="Cantidad de libros"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field v-model="price" label="Precio del libro"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-select 
                    v-model="author_id" 
                    :items="authors"
                    item-text="name"
                    item-value="id"
                    label="Autor del libro"></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex">
                <v-btn 
                    type="submit"
                    dark
                    class="mx-auto"
                    color="light-blue darken-2">Crear Libro</v-btn>
            </v-col>
        </v-row>
        <v-snackbar 
            v-model="snackbar"
            top
            right
            color="success">¡Libro creado!</v-snackbar>
    </v-form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'CreateBook',
    data () {
        return {
            title: '',
            description: '',
            quantity: 0,
            price: 0,
            author_id: '',
            snackbar: false
        }
    },
    created () {
        this.getAllAuthors()
    },
    computed: {
        ...mapState('author', ['authors'])
    },
    methods: {
        ...mapActions('author', ['getAllAuthors']),
        ...mapActions('book', ['createBook']),
        createNewBook() {
            const newBook = {
                title: this.title,
                description: this.description,
                quantity: parseInt(this.quantity),
                price: parseInt(this.price),
                author_id: this.author_id
            }

            this.createBook(newBook)
            this.snackbar = true
            this.$refs.main.reset()
        }
    }
}
</script>