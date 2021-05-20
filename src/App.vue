<template>
<div class="container mx-auto">
 <Home/>
</div>
 
</template>

<script>
import Home from './views/Home.vue'
import {mapActions} from 'vuex'
export default {
  components: { Home },
  methods: {
    ...mapActions(['getPokemons','filterPokemons','searchPokemonByName'])
  },
  async created(){
    await this.getPokemons()
    await this.filterPokemons('')
    await this.searchPokemonByName('')
    
  }
}
</script>



