export type props = {
    nome: string;
    idade: number;
}

export type pokemon = {
    name: string;
    url: string;
    sprites: {
        front_default: string;
        dream_world: {
            front_default: string;
        },
        versions: {
            "generation-viii": {
                "brilliant-diamond-shining-pearl": {
                    icons: {
                        front_default: string
                    }
                    front_default: string
                }
            }
        }
    }
}