export interface IPokemon {
    id: number;
    name: string;
    abilities: Ability[];
    stats: Stat[];
    sprites: Sprite;
    forms: Form[];
}

interface Ability {
    ability: {
        name: string,
        url: string
    },
    is_hidden: boolean,
    slot: number
}

interface Stat {
    base_stat: number,
    effort: number,
    stat: {
        name: string,
        url: string
    }
}

interface Sprite {
    other: {
        dream_world: {
            front_default: string;
        }
    }
}

interface Form {
    name: string,
    url: string
}

