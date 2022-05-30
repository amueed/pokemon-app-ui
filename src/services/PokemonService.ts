import { fetchWrapper } from "../helpers";
import { config } from "../config";

const baseUrl = `${config.POKEMON_SERVICE_BASEURL}/pokemon`;

export const PokemonService = {
  getByName,
};

function getByName(name: string) {
  return fetchWrapper.get(`${baseUrl}/${name}`);
}
