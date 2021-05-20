<template>
    <div v-if="loader" >
      cargando
    </div>
   
    <div class="" v-else>
       <Card :pokemons='pokemonsFilter'/>
    </div>
     
</template>

<script>
import { mapState } from 'vuex'
import Card from '../components/Card.vue'


export default {
  name: 'Home',
  components: {
    Card 
    },
    computed: {
     ...mapState(['loader','pokemonsFilter'])

    },
    methods:{
     
    }
}
</script>
