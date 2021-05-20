<template>
    <div v-for="(pokemon,index) in pokemons" :key="index">
        <div class="text-center">{{pokemon.name}}</div>
     <div v-for="item in pokemon.types" :key="item.id">
         <div class='p-2 bg-purple-100 border border-gray-400 rounded text-center m-2'>{{ item.type.name }}</div>
     </div>
    </div>
</template>

<script>
export default {
    name:'Card',
    props:['pokemons']
}
</script>

<style>

</style>