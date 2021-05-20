<template>
    <div v-if="loader" >
      cargando...
    </div>
   
    <div class="grid grid-cols-6" v-else>
       <Card :pokemons='pokemons'/>
    </div>
     
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Card from '../components/Card.vue'


export default {
  name: 'Home',
  components: {
    Card 
    },
    computed: {
     ...mapState(['pokemons','loader'])
    },
    methods:{
     
    }
}
</script>
