<template>
  <div class="grid grid-cols-4">
    <button class="border border-purple-400 bg-purple-100 p-2 m-2 rounded" @click="filterPokemons('grass')">grass</button>
    <button class="border border-purple-400 bg-purple-100 p-2 m-2 rounded" @click="filterPokemons('poison')">poison</button>
    <button class="border border-purple-400 bg-purple-100 p-2 m-2 rounded" @click="filterPokemons('fire')">fire</button>
    <button class="border border-purple-400 bg-purple-100 p-2 m-2 rounded" @click="filterPokemons('flying')">flying</button>
    <button class="border border-purple-400 bg-purple-100 p-2 m-2 rounded" @click="filterPokemons('water')">water</button>
    <button class="border border-purple-400 bg-purple-100 p-2 m-2 rounded" @click="filterPokemons('bug')">bug</button>
    <button class="border border-purple-400 bg-purple-100 p-2 m-2 rounded" @click="filterPokemons('normal')">normal</button>
    <button class="border border-purple-400 bg-purple-100 p-2 m-2 rounded" @click="filterPokemons('electric')">electric</button>
    <button class="border border-purple-400 bg-purple-100 p-2 m-2 rounded" @click="filterPokemons('ground')">ground</button>
    <button class="border border-purple-400 bg-purple-100 p-2 m-2 rounded" @click="filterPokemons('fairy')">fairy</button>
    <button class="border border-purple-400 bg-purple-100 p-2 m-2 rounded" @click="filterPokemons('psychic')">psychic</button>
    <button class="border border-purple-400 bg-purple-100 p-2 m-2 rounded" @click="filterPokemons('fighting')">fighting</button>
    <button class="border border-purple-400 bg-purple-100 p-2 m-2 rounded" @click="filterPokemons('rock')">rock</button>
    <button class="border border-purple-400 bg-purple-100 p-2 m-2 rounded" @click="filterPokemons('steel')">steel</button>
    <button class="border border-purple-400 bg-purple-100 p-2 m-2 rounded" @click="filterPokemons('ice')">ice</button>
    <button class="border border-purple-400 bg-purple-100 p-2 m-2 rounded" @click="filterPokemons('')">all</button>
  </div>
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