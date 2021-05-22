<template>
  <div class="container mx-auto">
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { Home },
  computed: {
    ...mapState(["paginate"]),
  },
  methods: {
    ...mapActions([
      "pushNewPokemons",
      "filterPokemons",
      "searchPokemonByName",
      "getPokemons",
    ]),
    async next() {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;

      if (clientHeight + scrollTop >= scrollHeight) {
        console.log(clientHeight + scrollTop >= scrollHeight);
        await this.pushNewPokemons();
        await this.filterPokemons('');
      }
    },
    concatPokemonScrolling() {
      window.addEventListener("scroll", () => this.next(), true);
    },
  },
  async created() {
    await this.getPokemons();
    await this.filterPokemons('');
    await this.searchPokemonByName('');
    await this.concatPokemonScrolling();
  },
};
</script>



