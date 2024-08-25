import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IPokemon} from "../models/IPokemon";
import {IData, IDataPokemon} from "../models/IData";
import {IEvolutionChain} from "../models/IEvolution";

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
    getAll: async (offset: string, limit: string): Promise<IDataPokemon[]> => {
        const response = await axiosInstance.get<IData>(urls.pokemons.byLimit(offset, limit));
        return response.data.results;
    },
    getPokemonById: async (id: string): Promise<IPokemon> => {
        const response = await axiosInstance.get<IPokemon>(urls.pokemons.byId(id));
        return response.data;
    },
    getIdByName: async (name:string): Promise<string> => {
        const response = await axiosInstance.get(urls.pokemons.base + `/${name}`);
        return response.data.id.toString();
    }
}

const evoChainService = {
    getEvolutions: async (): Promise<string[]> => {
        const response = await axiosInstance.get<{ count: number }>('https://pokeapi.co/api/v2/evolution-chain');
        const limit = response.data.count;

        const totalRes = await axiosInstance.get<{ results: { url: string }[] }>(
            `https://pokeapi.co/api/v2/evolution-chain?offset=0&limit=${limit}`
        );
        const urls: string[] = [];
        totalRes.data.results.forEach(result => urls.push(result.url));

        return urls;
    },

    getSpeciesById: async (id: string): Promise<string> => {
        const response = await axiosInstance.get<{ evolution_chain: { url: string } }>(
            `https://pokeapi.co/api/v2/pokemon-species/${id}`
        );
        return response.data.evolution_chain.url;
    },
    getFormsByUrl: async (url: string): Promise<string[]> => {
        const response = await axiosInstance.get<IEvolutionChain>(url);
        const chain = response.data.chain;

        const extractNames = (evolveTo: any[]): string[] => {
            let names: string[] = [];
            for (const evolve of evolveTo) {
                names.push(evolve.species.name);
                if (evolve.evolves_to) {
                    names = names.concat(extractNames(evolve.evolves_to));
                }
            }
            return names;
        };

        return extractNames([chain]);
    }
};



export {dataService, pokemonService, evoChainService};
