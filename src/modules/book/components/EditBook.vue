<template>
    <v-form @submit.prevent="updateBookData()">
        <v-row>
            <v-col>
                <h1 class="text-center light-blue--text text--darken-3">Actualización de libros</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-text-field v-model="book.title" label="Título del libro"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field v-model="book.description" label="Descripción del libro"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-text-field v-model="book.quantity" label="Cantidad de libros"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field v-model="book.price" label="Precio del libro"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-select v-model="book.author_id" :items="authors" item-text="name" item-value="id" label="Autor del libro"></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex">
                <v-btn
                    type="submit"
                    dark
                    class="mx-auto" 
                    color="light-blue darken-2">Actualizar libro</v-btn>
            </v-col>
        </v-row>
        <v-snackbar v-model="snackbar"
        color="success" top right>¡Libro modificado!</v-snackbar>
    </v-form>
</template>

<script>
import { mapActions, mapState} from 'vuex'
export default {
    name: 'EditBook',
    data () {
        return {
            snackbar: false
        }
    },
    created () {
        const { id } = this.$route.params
        this.getBookById(id)
        this.getAllAuthors()
    },
    methods: {
        ...mapActions('author', ['getAllAuthors']),
        ...mapActions('book', ['updateBook', 'getBookById']),
        updateBookData () {
            const { id } = this.$route.params
            this.updateBook( { id })
            this.snackbar = true
        }
    },
    computed: {
        ...mapState('author', ['authors']),
        ...mapState('book', ['book']),
    }
}
</script>