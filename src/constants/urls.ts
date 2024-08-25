const baseUrl = 'https://pokeapi.co/api/v2/';

const urls = {
    pokemons: {
        base: '/pokemon',
        byId: (id: string): string => urls.pokemons.base + `/${id}`,
        byLimit: (offset: string, limit: string): string => urls.pokemons.base + `?offset=${offset}&limit=${limit}`
    },
    image: {
        byId: (id: string): string => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    },
    forms: {
        base: '/evolution-chain',
        byId: (id: string): string => urls.forms.base +`/${id}`
    }
}

export {
    baseUrl
    , urls
};