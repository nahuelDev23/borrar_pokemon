<template>
  <button @click="filterPokemons('grass')">grass</button>
  <button @click="filterPokemons('poison')">poison</button>
  <button @click="filterPokemons('fire')">fire</button>
  <button @click="filterPokemons('flying')">flying</button>
  <button @click="filterPokemons('water')">water</button>
  <button @click="filterPokemons('bug')">bug</button>
  <button @click="filterPokemons('normal')">normal</button>
  <button @click="filterPokemons('electric')">electric</button>
  <button @click="filterPokemons('ground')">ground</button>
  <button @click="filterPokemons('fairy')">fairy</button>
  <button @click="filterPokemons('psychic')">psychic</button>
  <button @click="filterPokemons('fighting')">fighting</button>
  <button @click="filterPokemons('rock')">rock</button>
  <button @click="filterPokemons('steel')">steel</button>
  <button @click="filterPokemons('ice')">ice</button>
  <button @click="filterPokemons('')">all</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["filterPokemons"]),
  },
};
</script>

<style>
</style>