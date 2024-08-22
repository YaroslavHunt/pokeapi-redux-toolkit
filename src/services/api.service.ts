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
    getAll: async (): Promise<IDataPokemon[]> => {
        const response = await axiosInstance.get<IData>(urls.pokemons.base);
        return response.data.results;
    },
    getPokemon: async (id: string): Promise<IPokemon> => {
        const response = await axiosInstance.get<IPokemon>(urls.pokemons.byId(id));
        return response.data;
    }
}

export {dataService, pokemonService};
