<template>
  <div class="grid grid-cols-1" id="card">
    <div>
      <search />
      <FilterByType />
    </div>

    <div class="grid grid-cols-6">
      <div
        class="poke"
        v-for="(pokemon, index) in pokemons"
        :key="index"
        @click="details(pokemon.id)"
      >
        <div class="text-center">{{ pokemon.name }}</div>
        <img
          class="mx-auto poke2"
          :src="pokemon.sprites.front_default"
          alt=""
        />
        <img
          class="mx-auto hidden pokeesc"
          :src="pokemon.sprites.front_shiny"
          alt=""
        />
        <div v-for="item in pokemon.types" :key="item.id">
          <div
            class="p-2 bg-purple-100 border border-gray-400 rounded text-center m-2"
          >
            {{ item.type.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import FilterByType from "./FilterByType.vue";
import Search from "./Search.vue";
export default {
  components: { FilterByType, Search },
  name: "Card",
  props: ["pokemons"],
  data() {
    return {
      totalStats: [],
    };
  },
  computed: {
    ...mapState(["showModal", "setMaxStat", "findOnePokemon"]),
  },
  methods: {
    ...mapActions([
      "findOnePokemonAction",
      "changeShowModal",
      "getMaxStat",
      "filterPokemons",
    ]),
    async details(index) {
      await this.findOnePokemonAction(index);
      await this.calcMaxStatBase();
      await this.changeShowModal(true);
    },
    calcMaxStatBase() {
      this.totalStats = [];
      for (let i in this.findOnePokemon.stats) {
        this.totalStats.push(this.findOnePokemon.stats[i].base_stat);
      }
      let maxStat = Math.max(...this.totalStats);
      this.getMaxStat(maxStat);
      console.log(this.findOnePokemon);
    },
  },
};
</script>

<style>
.poke:hover > .pokeesc {
  display: block;
}
.poke:hover > .poke2 {
  display: none;
}
</style>