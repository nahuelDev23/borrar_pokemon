<template>
  <div class="grid grid-cols-1">
    <div>
      <FilterByType />
    </div>

    <div class="grid grid-cols-6">
      <div v-for="(pokemon, index) in pokemons" :key="index">
        <div class="text-center">{{ pokemon.name }}</div>
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
import FilterByType from "./FilterByType.vue";
export default {
  components: { FilterByType },
  name: "Card",
  props: ["pokemons"],
};
</script>

<style>
</style>