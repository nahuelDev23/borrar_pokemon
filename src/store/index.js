import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemons: [],
    pokemonsFilter: [],
    paginate:'',
    loader: true
  },
  mutations: {
    setPaginate(state, payload) {
      state.paginate = payload
    },
    setLoader(state, payload) {
      state.loader = payload
    },
    setPokemons(state, payload) {
      state.pokemons = payload



    },
    setPokemonsFilter(state, payload) {
      state.pokemonsFilter = payload

    },
    pushNewPokemons(state,payload){
      state.pokemons = payload
      
    }
  },
  actions: {
    async pushNewPokemons({commit,state},url){
      const getPokemons = await fetch(url)
      const respuesta = await getPokemons.json()
      
      const array = []
      for (let i in respuesta.results) {
        respuesta.results[i].url
        const getPokemonsAll = await fetch(respuesta.results[i].url)
        const responsePokemonsAll = await getPokemonsAll.json()
        array.push(responsePokemonsAll)
      }
      
      await commit('pushNewPokemons', state.pokemons.concat(array))
      await commit('setPaginate', respuesta)

    },
    async changeLoader({ commit }, status) {
      commit('setLoader', status)
    },
    async getPokemons({ commit }) {
      const getPokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
      const respuesta = await getPokemons.json()

      const array = []
      for (let i in respuesta.results) {
        respuesta.results[i].url
        const getPokemonsAll = await fetch(respuesta.results[i].url)
        const responsePokemonsAll = await getPokemonsAll.json()
        array.push(responsePokemonsAll)
      }
      
      await commit('setLoader', false)
      await commit('setPokemons', array)
      await commit('setPaginate', respuesta)

    },
    async filterPokemons({ commit, state }, tipo) {
      if (tipo !== '') {
        let filtrado = []
        state.pokemons.filter(item => {
          for (let i = 0; i < item.types.length; i++) {
            if (item.types[i].type.name == tipo.toLowerCase()) {
              filtrado.push(item)
            }
          }
        })
        commit('setPokemonsFilter', filtrado)

      } else {
        commit('setPokemonsFilter', state.pokemons)

      }
    },
    async searchPokemonByName({ commit, state }, name) {
      let pokemon = state.pokemons.filter(pokemon => {
        const pokemonName = pokemon.name.toLowerCase()
        if (pokemonName.includes(name)) {
          return pokemon
        }
      })
      commit('setPokemonsFilter', pokemon)
    }
  },
  getters: {

  },
  modules: {
  }
})
