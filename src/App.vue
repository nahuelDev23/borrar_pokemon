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
    ...mapActions(['getPokemons','filterPokemons'])
  },
  async created(){
    await this.getPokemons()
    await this.filterPokemons()
    
  }
}
</script>



