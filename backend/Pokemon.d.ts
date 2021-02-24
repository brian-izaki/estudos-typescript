// criando uma interface
interface Pokemon {
  name: string;
  hp: number;
  atack(): void;
  // não é obrigatório
  defend?(): void;
}

// extendendo a interface de Pokemon
interface SeaPokemon extends Pokemon {
  type: 'water' | 'fly';
}
