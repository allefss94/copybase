<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h1 class="text-center">Detalhes</h1>
    </v-col>
  </v-row>

  <v-row class="px-10">
    <v-col cols="12">
      Lista de pokemons com a mesma propriedade {{ route.params.type }} -
      {{ pokeStore[route.params.type].name }}</v-col
    >
    <v-col cols="12">
      <router-link class="text-decoration-none" :to="{ name: 'Home' }">
        <v-btn color="primary" width="200" variant="outlined">Voltar</v-btn>
      </router-link>
    </v-col>

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
            v-for="{ pokemon: item } in pokeStore[route.params.type].pokemon"
            :key="item"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.url }}</td>
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
