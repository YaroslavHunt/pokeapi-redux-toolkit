export interface IPokemon {
    id: number;
    name: string;
    abilities: AbilityData[];
    stats: StatData[];
    sprites: Sprite;
    forms: Form[];
    types: TypeData[];
    weight: number;
}

export interface AbilityData {
    ability: {
        name: string,
        url: string
    },
    is_hidden: boolean,
    slot: number
}

export interface StatData {
    base_stat: number,
    effort: number,
    stat: {
        name: string,
        url: string
    }
}

export interface TypeData {
    slot: number
    type: {
        name: string,
        url: string
    }
}

export interface Sprite {
    other: {
        dream_world: {
            front_default: string;
        }
    }
}

export interface Form {
    name: string,
    url: string
}



