<template>
  <v-row justify="center" align="center" class="h-screen">
    <v-col cols="12" lg="10">
      <h1 class="text-center">Galeria</h1>
      <v-carousel>
        <v-carousel-item
          v-for="(img, index) in pokeStore.images"
          :key="index"
          :src="img"

        ></v-carousel-item>
      </v-carousel>
      <RouterLink :to="{name: 'Home'}" class="text-decoration-none">
        <v-btn class="mt-5" color="primary" variant="outlined" block>Voltar</v-btn>
      </RouterLink>
    </v-col>
  </v-row>
</template>

<script setup>
import { onBeforeMount } from "vue";
import {useRouter} from 'vue-router'
import { UsePokemonStore } from "@/store/pokemon";
const pokeStore = UsePokemonStore();
const router = useRouter()

onBeforeMount(() => {
  if(!pokeStore.images) router.push({name: 'Home'})
});
</script>
