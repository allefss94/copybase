import { defineStore } from "pinia";
import { useHttp } from "../composables/http";
const { getPokemon, getPokemonForm } = useHttp();
export const UsePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemon: null,
    pokemonForm: null,
    loading: false,
  }),

  getters: {
    pokeImg: state => state.pokemon?.sprites?.front_default
  },

  actions: {
    async get(pokeName) {
      this.loading = true;
      const data = await getPokemon(pokeName);
      this.loading = false;
      this.pokemon = data;
    },
  },
});
