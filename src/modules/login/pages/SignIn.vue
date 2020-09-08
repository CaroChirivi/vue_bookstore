<template>
    <v-container 
        fluid 
        class="fill-height"
    >
        <v-row 
            align="center" 
            justify="center"
        >
            <v-col cols="6">
                <v-card class="elevation-12">
                    <v-form @submit.prevent="signIn()">
                        <v-toolbar 
                            flat 
                            color="cyan darken-2" 
                            dark
                        >
                            <v-toolbar-title class="mx-auto">Ingresa a EDBookstore</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-text-field 
                                v-model="email"
                                label="Email" 
                                name="email" 
                                prepend-icon="person" 
                                type="text"
                            ></v-text-field>
                            <v-text-field
                                v-model="password"
                                label="password"
                                name="password"
                                prepend-icon="lock"
                                type="password"
                            ></v-text-field>
                        </v-card-text>        
                        <v-card-actions>
                            <v-btn 
                                to="/signup" 
                                color="cyan darken-2"
                                dark
                            >Registrarse</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn 
                                type="submit"
                                class="mx-auto" 
                                color="cyan darken-2"
                                dark
                            >Ingresar</v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import LoginServices from "../services";

export default {
    name: 'SignIn',
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        async signIn () {
            const user = { email: this.email, password: this.password };
            const {
                data: { token }
            } = await LoginServices.signIn(user);
            this.$store.dispatch('login/signIn', token);
            this.$router.push('/');
        }
    }
}
</script>