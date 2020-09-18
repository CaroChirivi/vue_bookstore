<template>
    <div>
        <h1 class="text-center light-blue--text text--darken-3">Lista de Libros</h1>
        <v-simple-table>
            <template v-slot>
                <thead>
                    <tr>
                        <th class="text-left">Título</th>
                        <th class="text-left">Descripción</th>
                        <th class="text-left">Cantidad</th>
                        <th class="text-left">Precio</th>
                        <th class="text-left">Autor</th>
                        <th class="text-center">Herramientas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="book in books" :key="book.id">
                        <td>{{ book.title }}</td>
                        <td>{{ book.description }}</td>
                        <td>{{ book.quantity }}</td>
                        <td>{{ book.price }}</td>
                        <td>{{ book.author.name }}</td>
                        <td>
                            <v-row justify="center">
                                <v-btn 
                                    :to="{ name: 'editbook', params: {id: book.id}}"
                                    fab
                                    small dark
                                    color="primary"
                                    class="mr-2">
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                                <v-btn 
                                    @click="deleteBook(book.id)"
                                    fab
                                    small
                                    dark
                                    color="error">
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </v-row>
                        </td>
                        
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'ListBooks',
    methods: {
        ...mapActions('book', ['getAllBooks', 'deleteBook'])
    },
    computed: {
        ...mapState('book', ['books'])
    },
    created () {
        this.getAllBooks()
    }
}
</script>