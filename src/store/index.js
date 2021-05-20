import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemons:[],
    pokemonsFilter:[],
    loader:true
  },
  mutations: {
    setLoader(state,payload){
      state.loader = payload
    },
    setPokemons(state, payload){
      state.pokemons = payload
      
    },
    setPokemonsFilter(state,payload){
      state.pokemonsFilter = payload
     
    }
  },
  actions: {
    async changeLoader({commit},status){
      commit('setLoader',status)
    },
    async getPokemons({commit}){
      let array = []
      for(let i = 1 ; i<=150 ; i++){
        const getPokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const respuesta = await getPokemons.json()
       
        array.push(respuesta)
       
      }
      await commit('setLoader',false)
      await commit('setPokemons',array)
      
    },
     async filterPokemons({commit,state},tipo){
       if(tipo !== ''){
        let filtrado = []
        state.pokemons.filter(item => {
            for(let i = 0 ; i < item.types.length ; i++){
              if(item.types[i].type.name == tipo.toLowerCase()){
                filtrado.push(item)
              }
           }   
        })
        commit('setPokemonsFilter',filtrado)
        
       }else{
        commit('setPokemonsFilter',state.pokemons)
        console.log(state.pokemons)
       }
     },
     async searchPokemonByName({commit,state},name){
       let pokemon = state.pokemons.filter(pokemon => {
         const pokemonName = pokemon.name.toLowerCase()
          if(pokemonName.includes(name)){
            return pokemon
          }
       } )
      commit('setPokemonsFilter',pokemon)
     }
  },
  getters:{
    
  },
  modules: {
  }
})
