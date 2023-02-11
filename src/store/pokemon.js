import { defineStore } from "pinia";
import { useHttp } from "../composables/http";
const { getPokemon, getInfo } = useHttp();
export const UsePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemon: null,
    pokemonForm: null,
    loading: false,
    move: {},
    type: {},
    ability: {},
  }),

  getters: {
    pokeImg: state => state.pokemon?.sprites?.front_default,
    images: state => {
      const images = []
      Object.keys(state?.pokemon?.sprites).map((item) => {
        if (typeof state?.pokemon?.sprites[item] === "string") {
          images.push(state?.pokemon?.sprites[item]);
        }
      });

      return images
    }
  },

  actions: {
    async get(pokeName) {
      this.loading = true;
      const data = await getPokemon(pokeName);
      this.loading = false;
      this.pokemon = data;
    },
    async getInfo(type, id) {
      this.loading = true;
      const data = await getInfo(type, id);
      this.loading = false;
      this[type] = data;
    }
  },
});
