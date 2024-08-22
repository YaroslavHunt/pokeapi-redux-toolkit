export interface IData {
    count: number,
    next: null | string,
    previous: null | string,
    results: IDataPokemon[];
}

export interface IDataPokemon {
    name: string;
    url: string;
}