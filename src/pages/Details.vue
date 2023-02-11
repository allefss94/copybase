<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h1 class="text-center">Detalhes</h1>
    </v-col>
  </v-row>

  <v-row class="px-10">
    <v-col cols="12"> Lista de pokemons da mesma propriedade {{ route.params.type }}</v-col>

    <v-col cols="12">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">EndPoint</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in pokeStore[route.params.type].pokemon"
            :key="item.pokemon.name"
          >
            <td>{{ item.pokemon.name }}</td>
            <td>{{ item.pokemon.url }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onBeforeMount } from "vue";
import { UsePokemonStore } from "../store/pokemon";
const route = useRoute();
const pokeStore = UsePokemonStore();

onBeforeMount(async () => {
  const { type, id } = route.params;
  await pokeStore.getInfo(type, id);
});
</script>
