<template>
    <div>
        <h1 class="text-center light-blue--text text--darken-3">Lista de Autores</h1>
        <v-simple-table>
            <template v-slot>
                <thead>
                    <tr>
                        <th class="text-left">Nombre</th>
                        <th class="text-left">País</th>
                        <th class="text-left">Herramientas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="author in authors" :key="author.id">
                        <td> {{ author.name }} </td>
                        <td> {{ author.country }} </td>
                        <td>
                            <v-row justify="center">
                                <v-btn fab small dark color="primary" :to="{ name: 'editauthor', params: { id: author.id }}">
                                    <v-icon>mdi-pencil</v-icon>
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
    name: 'ListAuthors',
    methods: {
        ...mapActions('author', ['getAllAuthors'])
    },
    computed: {
        ...mapState('author', ['authors'])
    },
    created () {
        this.getAllAuthors()
    }
}
</script>