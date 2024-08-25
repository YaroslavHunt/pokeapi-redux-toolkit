export interface IEvolutionChain {
    id: number;
    chain: {
        evolves_to: Array<{
            evolves_to: Array<{
                evolves_to: Array<{
                    evolves_to: Array<{
                        evolves_to: Array<{
                            evolves_to: Array<{
                                evolves_to: Array<{
                                    species: { name: string }
                                }>
                            }>
                            species: { name: string }
                        }>
                        species: { name: string }
                    }>
                    species: { name: string }
                }>
                species: { name: string }
            }>
            species: { name: string }
        }>
        species: { name: string }
    }
}





