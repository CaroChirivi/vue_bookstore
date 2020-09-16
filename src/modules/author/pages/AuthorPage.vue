<template>
    <div>
        <h1 class="light-blue--text text--darken-3">Bienvenido a la sección de autores</h1>
        <p class="font-italic light-blue--text text--accent-4">"Aquí podrás gestionar a tus autores"</p>
        <v-row>
            <v-col cols="6">
                <v-btn 
                    dark color="cyan darken-3" 
                    to="/author/create"
                    class="mr-4"
                    >Crear autor</v-btn>
                <v-btn 
                    dark 
                    color="cyan darken-4"
                    to="/author/list"
                >Lista de autores</v-btn>
            </v-col>
        </v-row>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'AuthorPage',

}
</script>