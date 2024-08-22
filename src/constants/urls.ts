const baseUrl = 'https://pokeapi.co/api/v2/';

const urls = {
    pokemons: {
        base: '/pokemon/',
        byId: (id: string): string => urls.pokemons.base + `${id}`,
    },
    image: {
        byId: (id: string): string => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    }
}

export {
    baseUrl
    , urls
};