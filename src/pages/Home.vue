<template>
    <v-container>
        <h1 class ="light-blue--text text--darken-3">Bienvenido a EdBookstore</h1>
        <p class="font-italic light-blue--text text--accent-2">"La librería de EdTeam"</p>
        <v-row>
            <v-btn 
                dark
                color="cyan lighten-1"
                class="mr-4"
                to="/author">Gestión de autores</v-btn>
            <v-btn 
                dark
                color="indigo lighten-1"
                to="/book">Gestión de libros</v-btn>
        </v-row>
    </v-container>
</template>