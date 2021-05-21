<template>
<div class="container mx-auto">
 <Home/>
</div>
 
</template>

<script>
import Home from './views/Home.vue'
import {mapActions, mapState} from 'vuex'
export default {
  components: { Home },
  computed: {
    ...mapState(['paginate'])
  },
  methods: {
    ...mapActions(['pushNewPokemons','filterPokemons','searchPokemonByName','getPokemons']),
    async next(){
       await this.pushNewPokemons(this.paginate.next)
        await this.filterPokemons('')
      //  await this.searchPokemonByName('')
      
    },
    concatPokemonScrolling(){
      window.addEventListener('scroll',()=>{
        
      })
    }
  },
  async created(){
    await this.getPokemons()
    await this.filterPokemons('')
    await this.searchPokemonByName('')
  }
}
</script>



