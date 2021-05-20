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
       
        let array = state.pokemons.filter(item => {
         
          for(let i in item){
            return i.name
            
          }
        })
        console.log(array)
        // commit('setPokemonsFilter',array)
     }

  },
  getters:{
    
  },
  modules: {
  }
})
