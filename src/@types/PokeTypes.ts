export type PokemonListResult = {
  name: string;
  url: string;
};

export type PokemonDetail = {
  id: number;
  name: string;
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
};