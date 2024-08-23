import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IPokemon} from "../models/IPokemon";
import {IData, IDataPokemon} from "../models/IData";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
});

const dataService = {
    getData: async (): Promise<IData> => {
        const response = await axiosInstance.get<IData>(urls.pokemons.base);
        return response.data;
    }
}

const pokemonService = {
    getAll: async (offset:string, limit:string): Promise<IDataPokemon[]> => {
        const response = await axiosInstance.get<IData>(urls.pokemons.byLimit(offset, limit));
        return response.data.results;
    },
    getPokemonById: async (id: string): Promise<IPokemon> => {
        const response = await axiosInstance.get<IPokemon>(urls.pokemons.byId(id));
        return response.data;
    }
}

export {dataService, pokemonService};
