<template>
    <v-form 
        ref="main" 
        @submit.prevent="createNewAuthor()">
        <v-row>
            <v-col>
                <h1 class="text-center light-blue--text text--darken-3">Registro de Autores</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-text-field v-model="name" label="Nombre completo del autor"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field v-model="country" label="País del autor"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex">
                <v-btn 
                    type="submit" 
                    dark 
                    class="mx-auto light-blue accent-4" color="success">Crear autor</v-btn>
            </v-col>
        </v-row>
        <v-snackbar
            color="success"
            v-model="snackbar"
            top
            right
        >¡Author creado!</v-snackbar>
    </v-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'CreateAuthor',
    data () {
        return {
            name: '',
            country: '',
            snackbar: false
        }
    },
    methods: {
        ...mapActions('author', ['createAuthor']),
        createNewAuthor() {
            console.log("Entra a createNewAuthor");
            const newAuthor = {
                name: this.name,
                country: this.country
            }
            console.log(newAuthor)
            this.createAuthor(newAuthor)
            //console.log(author)
            this.snackbar = true
            //this.$ref.main.reset()
        }
    }
}
</script>