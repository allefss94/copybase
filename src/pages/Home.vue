<template>
  <h1 class="my-10 text-center">Buscador de Pokemons</h1>
  <v-row justify="center" align="center" class="h-screen w-screen">
    <v-col class="" cols="6" md="8" lg="6">
      <v-text-field
        v-model="pokeName"
        :loading="pokeStore.loading"
        density="compact"
        class="elevation-6"
        variant="solo"
        label="Buscar Pokemon"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="getPokemon(pokeName)"
        @keyup.enter="getPokemon(pokeName)"
      />
      <div class="d-flex justify-center">
        <v-card
          v-if="!!pokeStore.pokemon"
          class="mt-10 elevation-12"
          width="250"
        >
          <v-card-title>
            <v-img :src="pokeStore.pokeImg" alt="pokemon" />
          </v-card-title>

          <v-card-text>
            <h3>Atributos</h3>
            <div class="stats">
              <p
                v-for="({ base_stat, stat }, index) in pokeStore.pokemon.stats"
                :key="index"
              >
                <v-chip color="primary">{{ stat.name }}</v-chip> - {{ base_stat }}
              </p>
            </div>

            <v-divider color="black" thickness="2" class="my-2"></v-divider>

            <h3>Tipos</h3>
            <div class="stats">
              <p
                v-for="({ type }, index) in pokeStore.pokemon.types"
                :key="index"
              >
                <v-icon :icon="`mdi-${mapIcon(type.name)}`"></v-icon>
                <v-chip color="primary">
                  {{ type.name }}
                </v-chip>
                 -
                <router-link
                  class="text-decoration-underline text-grey"
                  :to="{
                    path: `/details/type/${type.url
                      .split('type')[1]
                      .replace('/', '')}`,
                  }"
                >
                  detalhes
                </router-link>
              </p>
            </div>

            <v-divider color="black" thickness="2" class="my-2"></v-divider>

            <h3>Habilidades</h3>
            <div class="stats">
              <p
                v-for="({ ability }, index) in pokeStore.pokemon.abilities"
                :key="index"
              >
              <v-chip color="primary">
                {{ ability.name }}
              </v-chip>
                <router-link
                  class="text-decoration-underline text-grey"
                  :to="{
                    path: `/details/ability/${ability.url
                      .split('ability')[1]
                      .replace('/', '')}`,
                  }"
                >
                  detalhes
                </router-link>
              </p>
            </div>

            <v-divider color="black" thickness="2" class="my-2"></v-divider>

            <h3>Movimentos</h3>
            <div class="stats">
              <v-btn color="primary" variant="outlined">
                Ver lista

                <v-dialog v-model="dialog" activator="parent" width="300">
                  <v-card>
                    <v-card-text>
                      <ul>
                        <li v-for="({ move }, index) in pokeStore.pokemon.moves" :key="index">{{ move.name }}</li>
                      </ul>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="primary" block @click="dialog = false"
                        >Fechar</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-btn>
            </div>
          </v-card-text>

          <v-card-actions>
            <router-link
              class="text-decoration-none w-100"
              :to="{ name: 'Galery' }"
            >
              <v-btn color="primary" variant="outlined" block
                >Ver galeria</v-btn
              >
            </router-link>
          </v-card-actions>
        </v-card>

        <p v-else class="my-10">
          Pokemon não encontrado, verifique se o nome está correto ;)
        </p>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
//imports
import { RouterLink } from "vue-router";
import { ref, computed } from "vue";
import { UsePokemonStore } from "../store/pokemon";

// stores
const pokeStore = UsePokemonStore();

// data
const pokeName = ref("");
const dialog = ref(false);

const mapIcon = (name) => {
  const list = {
    grass: "grass",
    poison: "bottle-tonic-skull-outline",
    fire: "fire-circle",
    flying: "bird",
    water: "water-circle",
    bug: "shield-bug",
    normal: "paw",
    electric: "lightning-bolt-outline",
    ground: "earth",
    fairy: "candy-outline",
    default: "account-circle-outline",
  };
  return list[name] || list.default;
};
const getPokemon = async (name) => {
  await pokeStore.get(name);
};
</script>
