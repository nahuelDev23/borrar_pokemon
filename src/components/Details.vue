<template>
  <div
    v-if="showModal"
    class="flex centrar bg-opacity-75 bg-gray-900 p-4 text-gray-200 rounded"
  >
    <button @click="!shiny">Shinny</button>
    <button
      class="absolute top-2 right-2 focus:outline-none"
      @click="changeShowModal(false)"
    >
      <i class="fas fa-window-close"></i>
    </button>
    <div class="mx-4 my-auto ">
      <!-- <img
        v-if="findOnePokemon.sprites"
        :src="findOnePokemon.sprites.front_default"
        alt=""
      /> -->
      <img v-if="shinny" :src="`https://projectpokemon.org/images/normal-sprite/${findOnePokemon.name}.gif`" alt="" /> 
      <img v-else :src="`https://projectpokemon.org/images/shiny-sprite/${findOnePokemon.name}.gif`" alt="" />   
       
    </div>
    <div class="flex flex-col">
      <div class="" v-for="(i, index) in findOnePokemon.stats" :key="index">
        {{ i.stat.name }}:{{ i.base_stat }}

        <div :style="`width:${setMaxStat}px`">
          <div
            :style="`
          max-width:${(i.base_stat * 100) / setMaxStat}%;
          height:4px;
          background-color:purple;
          transition:max-width .5s linear;
          `"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Details",
data() {
  return {
    shinny: false
  }
},
  computed: {
    ...mapState(["showModal", "findOnePokemon", "setMaxStat"]),
  },
  methods: {
    ...mapActions(["changeShowModal"]),
  },
};
</script>

<style>
.centrar {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>