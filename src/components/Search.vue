<template>
    <input class="border border-blue-200 m-2 p-2 rounded w-full"  placeholder="Pon el nombre de tu pokemon favorito!" type="text" @keyup="searchPokemonByName(nombrePokemon)" v-model="nombrePokemon">
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            nombrePokemon: ''
        }
    },
    methods: {
        ...mapActions(['searchPokemonByName'])
    },
}
</script>

<style>

</style>