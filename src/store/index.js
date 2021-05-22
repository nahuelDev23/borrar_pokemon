import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemons: [],
    pokemonsFilter: [],
    paginate: '',
    findOnePokemon: [],
    loader: true,
    showModal: false,
    maxStat:0
  },
  mutations: {
    setMaxStat(state,payload){
      state.setMaxStat = payload
    },
    setFindOnePokemon(state, payload) {
      state.findOnePokemon = payload
    },
    setPaginate(state, payload) {
      state.paginate = payload
    },
    setShowModal(state,payload) {
      state.showModal = payload
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
    pushNewPokemons(state, payload) {
      state.pokemons = payload

    }
  },
  actions: {
    getMaxStat({commit},stat){
      commit('setMaxStat',stat)
    },
    findOnePokemonAction({ commit, state }, id) {
      const pokemon = state.pokemons.find(item => item.id == id)
      // console.log(pokemon)
      commit('setFindOnePokemon', pokemon)
    },
    async pushNewPokemons({ commit, state }) {
      const url = state.paginate.next
      const getNewPokemons = await fetch(url)
      const respuesta = await getNewPokemons.json()

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
    async changeShowModal({ commit },show) {
      commit('setShowModal',show)
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
