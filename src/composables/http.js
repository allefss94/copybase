import axios from "axios";
import { useNotification } from "@kyvg/vue3-notification";

const { notify }  = useNotification()

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const useHttp = function() {
  const getPokemon = async (pokeName) => {
    try {
      const { data } = await instance.get(`pokemon/${pokeName}`);
      return data

    } catch (error) {
      console.error('error: ', error)

      notify({
        title: 'Erro',
        type: 'error',
        text: error.message
      })
    }

  }
  const getPokemonForm = async (formId) => {
    try {
      const { data } = await instance.get(`pokemon-form/${formId}`);
      return data

    } catch (error) {
      console.error('error: ', error)

      notify({
        title: 'Erro',
        type: 'error',
        text: error.message
      })
    }

  }

  return {
    getPokemon,
    getPokemonForm
  }
};
