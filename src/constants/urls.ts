const baseUrl = 'https://pokeapi.co/api/v2/';

const urls = {
    pokemons: {
        base: '/pokemon/',
        byId: (id: string): string => urls.pokemons.base + `${id}`,
    }
}

export {
    baseUrl
    , urls
};